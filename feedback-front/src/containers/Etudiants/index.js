import React, { Component} from 'react'
import Layout from '../Layout';
import './index.css';
import SearchBar from '../../components/SearchBar';
import Grid from '@material-ui/core/Grid';
import Image from "../../assets/basicProfile.png";
import Button from '@material-ui/core/Button';
import '../../actions/users';
import {getUsers} from "../../actions/users";
import ModalSendMessage from "../../components/ModalSendMessage";
import axios from "axios";



const dataAPI = getUsers();
const EtudiantPanel = props =>

    <Grid container className={'etudiantPanel'} xs={12}>
        <Grid item xs={3}>
            <img className={"imgProfil"} src={props.data.avatar} width={'50%'} />
        </Grid>
        <Grid item xs={3}>
            <p className={"nameProfil"} > {props.data.firstName} {props.data.lastName}</p>
        </Grid>
        <Grid item xs = {3} className={"buttonSeeProfil"} >
            <Button variant="contained" color="primary" size={"small"}  href={'../profil/'+ props.data.id}  >Voir le Profil</Button>
        </Grid>
        <Grid item xs = {3} className={"buttonSendMessage"} >
            {ModalSendMessage(props.data, props.dataConversations)}
        </Grid>
    </Grid>

class Etudiants extends React.Component{

    async getConversationsData(){
        await axios.get('/api/conversations')
            .then(data => this.setState({dataConversations : data.data}))
    }

    async getEtudiants(){
        await axios.get('/api/users')
            .then(data => data.data.map((info)=> {
                if (info.status == "student"){
                    this.state.dataEtudiants.push(info)
                }
            }))
        console.log(this.state.dataEtudiants)
    }

    componentDidMount() {
        this.getConversationsData()
        this.getEtudiants()
    }

    constructor(props){
        super(props);
        this.handler = this.handler.bind(this)
        this.state = {
            result: [],
            dataConversations : {},
            dataEtudiants : []
        }
    }


    handler(someValue) {
        this.setState({
            result: someValue
        })
    }

    render() {

        const{classes} = this.props;

        return(
            <Layout className={"root"}>

                <Grid container className={"mainPanel"} xs={10} justify={"center"} alignItems={"center"} direction={"row"} >
                    <Grid item xs={12} justify={"center"} className={"titlePanel"}>
                            <h1>Etudiants</h1>
                    </Grid>
                    <Grid item xs={10} justify={"center"} className={'searchBarPanel'}>
                        <SearchBar data={this.state.dataEtudiants} handler={this.handler}/>
                    </Grid>
                    <Grid item  xs={10} justify={"center"} className={'resultsPanel'}>
                        {this.state.result.map((info)=>{
                        return(
                            <Grid item xs={12} justify={"center"} className={'profilPanel'}>
                                <EtudiantPanel data = {info} dataConversations={this.state.dataConversations}/>
                            </Grid>
                        )
                        })}
                    </Grid>
                </Grid>

            </Layout>
        )
    }
}

export default (Etudiants)