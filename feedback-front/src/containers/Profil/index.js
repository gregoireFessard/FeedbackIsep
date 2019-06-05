import React, { Component} from 'react';
import Layout from '../Layout';
import Paper from '@material-ui/core/Paper';
import { SketchPicker } from 'react-color';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import reactCSS from 'reactcss'
import profilPicture from '../../assets/basicProfile.png';

const styles = theme =>({
    paper : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        float:'left',
        width: '40%',
        margin:'10%',
        textAlign:'left',
    },
    profilPicture:{
        height: '20px',
        padding: '20px',
    },
    color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: "#ffffff",
    },
    swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
    },
    popover: {
        position: 'absolute',
        zIndex: '2',
    },
    cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    },
})
const dataUsers = [
    {"id":"14","username":"aadmin","firstname":"admin","lastname":"admin","isep_id":"14","mail":"admin.admin@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#eeeeee","parent_id":null,"enabled":"1"},
    {"id":"3","username":"acanard","firstname":"Antoine","lastname":"Canard","isep_id":"3","mail":"kev@gmail.com","password":"{noop}secret","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#a6e590","parent_id":null,"enabled":"1"},
    {"id":"8","username":"adubernet","firstname":"Alice","lastname":"Dubernet","isep_id":"8","mail":"alice.dubernet@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#888888","parent_id":null,"enabled":"1"},
    {"id":"11","username":"aplatel","firstname":"Adriana","lastname":"Platel","isep_id":"11","mail":"adriana.platel@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#bbbbbb","parent_id":null,"enabled":"1"},
    {"id":"4","username":"aveloso","firstname":"Alex","lastname":"Veloso","isep_id":"4","mail":"alex.veloso@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#444444","parent_id":null,"enabled":"1"},
    {"id":"5","username":"ccisse","firstname":"Cameron","lastname":"Cisse","isep_id":"5","mail":"cameron.cisse@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#555555","parent_id":null,"enabled":"1"},
    {"id":"12","username":"eabgrall","firstname":"Emma","lastname":"Abgrall","isep_id":"12","mail":"emma.abgrall@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#cccccc","parent_id":null,"enabled":"1"},
    {"id":"1","username":"gfessar","firstname":"Gregoire","lastname":"Fessar","isep_id":"1","mail":"gregoire.fessard@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#111111","parent_id":null,"enabled":"1"},
    {"id":"10","username":"jleite","firstname":"Jean Charles","lastname":"Leite","isep_id":"10","mail":"jeancharles.leite@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#aaaaaa","parent_id":null,"enabled":"1"},
    {"id":"13","username":"jlemee","firstname":"Jacky","lastname":"Lemee","isep_id":"13","mail":"jacky.lemee@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#dddddd","parent_id":null,"enabled":"1"},
    {"id":"2","username":"ktan","firstname":"Kevin","lastname":"TAN","isep_id":"2","mail":"kevin.tan@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#222222","parent_id":null,"enabled":"1"},
    {"id":"6","username":"mnguyen","firstname":"Mathieu","lastname":"Nguyen","isep_id":"6","mail":"mathieu.nguyen@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#666666","parent_id":null,"enabled":"1"},
    {"id":"9","username":"mpepineau","firstname":"Maurice","lastname":"Pepineau","isep_id":"9","mail":"maurice.pepineau@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#999999","parent_id":null,"enabled":"1"},
    {"id":"7","username":"zkaziaoul","firstname":"Zakia","lastname":"Kaziaoul","isep_id":"7","mail":"zakia.kaziaoul@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#777777","parent_id":null,"enabled":"1"}
];


class Profil extends Component {
    state = {
        firstname : "",
        lastname : "",
        mail :"",
        color : "#ffffff",
        avatar : "",
        displayColorPicker: false,

    };
    constructor(props){
        super(props)
        const IDUser = this.props.match.params.IDUser
        dataUsers.map((info)  =>{
            if (info.id == IDUser) {
                this.state = {
                    firstname : info.firstname,
                    lastname : info.lastname,
                    mail : info.mail,
                    color : info.color,
                    avatar : info.avatar,
                    displayColorPicker: false,
                }
                console.log(this.state.firstname)
            }
        })


    }


    componentDidMount() {
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ colorProfil: color })
    };

    render(){

        const{classes} = this.props;

        const styles = reactCSS({
            'default': {

            },
        });

        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }

        return(
            <Layout>

                <Paper className={classes.paper}>
                    <Typography>
                        Nom: {this.state.firstname}
                    </Typography>
                    <Typography>
                        Prénom: {this.state.lastname}
                    </Typography>
                    <Typography>
                        Mail: {this.state.email}
                    </Typography>
                </Paper>

                <Paper className={classes.paper}>
                    <Typography>
                        Couleur des messages :
                    </Typography>
                    <div className={ classes.swatch } onClick={ this.handleClick }>
                        <div className={ classes.color } style={{backgroundColor : this.state.color}} />
                    </div>
                    { this.state.displayColorPicker ? <div className={ classes.popover }>
                        <div className={ classes.cover } onClick={ this.handleClose }/>
                        <SketchPicker color={ this.state.color} onChange={ this.handleChange } />
                    </div> : null }
                    <Typography>
                        Image de profil :
                    </Typography>
                    <img className={classes.profilPicture} src={this.state.avatar}/>
                    <button> change image </button>

                </Paper>
            </Layout>
        )
    }
}


export default withStyles(styles)(Profil);