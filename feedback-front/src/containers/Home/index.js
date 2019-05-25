import React, { Component} from 'react'
import Layout from '../Layout';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import profilPicture from '../../assets/basicProfile.png';


import withStyles from "@material-ui/core/styles/withStyles";
import List from "../../components/NavBar";

const styles = theme =>({
    main : {
        display: 'flex',
    },
    box1 :  {
        width: '10%',
        minHeight: '80px',
        float:'right',
        margin:'5%',
    },
    box2 :  {
        width: '60%',
        minHeight: '80px',
        alignItems: 'center',
        margin:'5%',
    },
    box3 :  {
        width: '60%',
        margin:'5%',
        minHeight:'100vh',
        backgrundColor:'red',
    },
    message: {
        width: '100%',
    },

    paper1 : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },

    paper2 : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },

    profilPicture:{
        height: '20px',
        padding: '20px',
    },
    content: {
        backgroundColor:'green',
    },
    content1: {
        backgroundColor:'blue',
    },
    content2: {
        backgroundColor:'red',
    },

    messageContext:{
        float:'right',
    },

})

class Home extends Component {

    render(){

        const{classes} = this.props;

        return(
            <Layout className={classes.main}>
                <div className={classes.box1}>
                    <Paper className={classes.paper1}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography>
                                Liens ISEP
                            </Typography>
                            <Link
                                component="button"
                                variant="body2"
                                color="default"
                                underline="always"
                                onClick={() => {
                                    alert("I'm a button.");
                                }}
                            >
                                Hyperplanning
                            </Link>
                            <Link
                                component="button"
                                variant="body2"
                                color="default"
                                underline="always"
                                onClick={() => {
                                    alert("I'm a button.");
                                }}
                            >
                                Moodle
                            </Link>
                            <Link
                                component="button"
                                variant="body2"
                                color="default"
                                underline="always"
                                onClick={() => {
                                    alert("I'm a button.");
                                }}
                            >
                                weberp
                            </Link>
                        </Grid>
                    </Paper>
                </div>
                <div className={classes.box2}>
                    <Paper className={classes.paper1}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Link
                                component="button"
                                variant="body2"
                                color="default"
                                underline="always"
                                onClick={() => {
                                    alert("I'm a button.");
                                }}
                            >
                                Vous avez x messages non lus : Consulter mes messages
                            </Link>
                        </Grid>
                    </Paper>
                </div>

                <div className={classes.box3}>
                    <Paper className={classes.paper2}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h3">
                                Derniers messages des professeurs
                            </Typography>
                            <Paper className={classes.message}>
                                <Typography>
                                    Technologies Web :
                                </Typography>
                                <div className={classes.content}>
                                    <div className={classes.content1}>
                                        <img className={classes.profilPicture} src={profilPicture}></img>
                                        M. Nguyen
                                        Enseignant
                                        le 6 mai à 17h22
                                    </div>
                                    <div className={classes.content2}>
                                        mon message
                                    </div>
                                </div>
                                <Button size="small" color="primary">
                                    voir ce message dans son contexte
                                </Button>
                            </Paper>

                        </Grid>

                    </Paper>
                </div>

            </Layout>
        )
    }
}


export default withStyles(styles)(Home);