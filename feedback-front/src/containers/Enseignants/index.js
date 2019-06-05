import React, { Component} from 'react'
import Layout from '../Layout';
import './index.css';
import SearchBar from '../../components/SearchBar';
import Grid from '@material-ui/core/Grid';
import Image from "../../assets/basicProfile.png";
import Button from '@material-ui/core/Button';


const dataEnseignants =[
    {"id":"8","username":"adubernet","firstname":"Alice","lastname":"Dubernet","isep_id":"8","mail":"alice.dubernet@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#888888","parent_id":null,"enabled":"1"},
    {"id":"11","username":"aplatel","firstname":"Adriana","lastname":"Platel","isep_id":"11","mail":"adriana.platel@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#bbbbbb","parent_id":null,"enabled":"1"},
    {"id":"12","username":"eabgrall","firstname":"Emma","lastname":"Abgrall","isep_id":"12","mail":"emma.abgrall@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#cccccc","parent_id":null,"enabled":"1"},
    {"id":"10","username":"jleite","firstname":"Jean Charles","lastname":"Leite","isep_id":"10","mail":"jeancharles.leite@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#aaaaaa","parent_id":null,"enabled":"1"},
    {"id":"13","username":"jlemee","firstname":"Jacky","lastname":"Lemee","isep_id":"13","mail":"jacky.lemee@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#dddddd","parent_id":null,"enabled":"1"},
    {"id":"6","username":"mnguyen","firstname":"Mathieu","lastname":"Nguyen","isep_id":"6","mail":"mathieu.nguyen@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#666666","parent_id":null,"enabled":"1"},
    {"id":"9","username":"mpepineau","firstname":"Maurice","lastname":"Pepineau","isep_id":"9","mail":"maurice.pepineau@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#999999","parent_id":null,"enabled":"1"},
    {"id":"7","username":"zkaziaoul","firstname":"Zakia","lastname":"Kaziaoul","isep_id":"7","mail":"zakia.kaziaoul@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#777777","parent_id":null,"enabled":"1"}
];

const EnseignantPanel = props =>

    <Grid container className={'EnseignantPanel'} xs={12}>
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