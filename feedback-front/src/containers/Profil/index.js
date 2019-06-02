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
        background: dataProfil[0].colorProfil,
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
const dataProfil =[
    {name : 'Antoine',surname : 'CANARD', email: 'antoine.canard@isep.fr', colorProfil : '#bbbbbb',profilImage  : profilPicture}
];


class Profil extends Component {

    state = {
        name : dataProfil[0].name,
        surname : dataProfil[0].surname,
        email : dataProfil[0].email,
        colorProfil : dataProfil[0].colorProfil,
        profilImage : dataProfil[0].profilImage,
        displayColorPicker: false,

    };

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
                        Nom: {this.state.name}
                    </Typography>
                    <Typography>
                        Prénom: {this.state.surname}
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
                        <div className={ classes.color } />
                    </div>
                    { this.state.displayColorPicker ? <div className={ classes.popover }>
                        <div className={ classes.cover } onClick={ this.handleClose }/>
                        <SketchPicker color={ this.state.colorProfil} onChange={ this.handleChange } />
                    </div> : null }
                    <Typography>
                        Image de profil :
                    </Typography>
                    <img className={classes.profilPicture} src={this.state.profilImage}/>
                    <button> change image </button>

                </Paper>
            </Layout>
        )
    }
}


export default withStyles(styles)(Profil);