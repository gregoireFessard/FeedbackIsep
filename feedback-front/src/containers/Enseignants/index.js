import React, { Component} from 'react'
import Layout from '../Layout';
import './index.css';
import SearchBar from '../../components/SearchBar';
import Grid from '@material-ui/core/Grid';
import Image from "../../assets/basicProfile.png";
import Button from '@material-ui/core/Button';


const dataEnseignants =[
    {name : 'Jean BONBON', picture : Image},
    {name : 'Antoine CANARD', picture : Image},
    {name : 'Antoine CANARD', picture : Image},
    {name : 'Antoine CANARD', picture : Image},
    {name : 'Antoine CANARD', picture : Image},
    {name : 'Antoine CANARD', picture : Image},
    {name : 'Antoine CANARD', picture : Image},
    {name : 'KévinTAN', picture : Image},
    {name : 'Gregoire FESSARD', picture : Image},
];

const EnseignantPanel = props =>

    <Grid container className={'EnseignantPanel'} xs={12}>
        <Grid item xs={3}>
            <img className={"imgProfil"} src={props.data.picture} width={'50%'} />
        </Grid>
        <Grid item xs={3}>
            <p className={"nameProfil"} > {props.data.name}</p>
        </Grid>
        <Grid item xs = {3} className={"buttonSeeProfil"} >
            <Button variant="contained" color="primary" size={"small"}    >Voir le Profil</Button>
        </Grid>
        <Grid item xs = {3} className={"buttonSendMessage"} >
            <Button variant="contained" color="primary" size={"small"}  >Envoyer un message</Button>
        </Grid>
    </Grid>

class Enseignants extends React.Component{



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

                <Grid container xs={10} className={"mainPanel"} justify={"center"} alignItems={"center"} direction={"row"} >
                    <Grid item xs={12}  className={"titlePanel"}>
                            <h1>Enseignants</h1>
                    </Grid>
                    <Grid item xs={10}  className={'searchBarPanel'}>
                        <SearchBar data={dataEnseignants} handler={this.handler}/>
                    </Grid>
                    <Grid item  xs={10}  className={'resultsPanel'}>
                        {this.state.result.map((info)=>{
                        return(
                            <Grid item xs={12} className={'profilPanel'}>
                                <EnseignantPanel data = {info}/>
                            </Grid>
                        )
                        })}
                    </Grid>
                </Grid>

            </Layout>
        )
    }
}

export default (Enseignants)