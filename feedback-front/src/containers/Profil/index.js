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
})

class Profil extends Component {

    state = {
        displayColorPicker: false,
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    render(){

        const{classes} = this.props;

        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
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
                        Nom: Canard
                    </Typography>
                    <Typography>
                        Prénom: Antoine
                    </Typography>
                    <Typography>
                        Mail: antoine.canard@isep.fr
                    </Typography>
                </Paper>

                <Paper className={classes.paper}>
                    <Typography>
                        Couleur des messages :
                    </Typography>
                    <div style={ styles.swatch } onClick={ this.handleClick }>
                        <div style={ styles.color } />
                    </div>
                    { this.state.displayColorPicker ? <div style={ styles.popover }>
                        <div style={ styles.cover } onClick={ this.handleClose }/>
                        <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                    </div> : null }
                    <Typography>
                        Image de profil :
                    </Typography>
                    <img className={classes.profilPicture} src={profilPicture}></img>
                    <button> change image </button>

                </Paper>

            </Layout>
        )
    }
}


export default withStyles(styles)(Profil);