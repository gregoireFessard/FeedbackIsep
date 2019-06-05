import React, { Component} from 'react'
import Layout from '../Layout';
import './index.css';
import SearchBar from '../../components/SearchBar';
import Grid from '@material-ui/core/Grid';
import Image from "../../assets/basicProfile.png";
import Button from '@material-ui/core/Button';
import '../../actions/users';
import {getUsers} from "../../actions/users";

const dataEtudiants =[
    {"id":"3","username":"acanard","firstname":"Antoine","lastname":"Canard","isep_id":"3","mail":"kev@gmail.com","password":"{noop}secret","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#a6e590","parent_id":null,"enabled":"1"},
    {"id":"4","username":"aveloso","firstname":"Alex","lastname":"Veloso","isep_id":"4","mail":"alex.veloso@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#444444","parent_id":null,"enabled":"1"},
    {"id":"5","username":"ccisse","firstname":"Cameron","lastname":"Cisse","isep_id":"5","mail":"cameron.cisse@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#555555","parent_id":null,"enabled":"1"},
    {"id":"1","username":"gfessar","firstname":"Gregoire","lastname":"Fessar","isep_id":"1","mail":"gregoire.fessard@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#111111","parent_id":null,"enabled":"1"},
    {"id":"2","username":"ktan","firstname":"Kevin","lastname":"TAN","isep_id":"2","mail":"kevin.tan@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#222222","parent_id":null,"enabled":"1"},
];

const dataAPI = getUsers();
const EtudiantPanel = props =>

    <Grid container className={'etudiantPanel'} xs={12}>
        <Grid item xs={3}>
            <img className={"imgProfil"} src={props.data.avatar} width={'50%'} />
        </Grid>
        <Grid item xs={3}>
            <p className={"nameProfil"} > {props.data.firstname} {props.data.lastname}</p>
        </Grid>
        <Grid item xs = {3} className={"buttonSeeProfil"} >
            <Button variant="contained" color="primary" size={"small"}  href={'../profil/'+ props.data.id}  >Voir le Profil</Button>
        </Grid>
        <Grid item xs = {3} className={"buttonSendMessage"} >
            <Button variant="contained" color="primary" size={"small"}  >Envoyer un message</Button>
        </Grid>
    </Grid>

class Etudiants extends React.Component{


    componentDidMount() {

    }

    constructor(props){
        super(props);
        this.handler = this.handler.bind(this)
        this.state = {
            result: []
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
                        <SearchBar data={dataEtudiants} handler={this.handler}/>
                    </Grid>
                    <Grid item  xs={10} justify={"center"} className={'resultsPanel'}>
                        {this.state.result.map((info)=>{
                        return(
                            <Grid item xs={12} justify={"center"} className={'profilPanel'}>
                                <EtudiantPanel data = {info}/>
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