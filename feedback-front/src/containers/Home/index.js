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

    comment:{
        display: 'flex',
        flexDirection: 'column',
    },

    response:{
        display: 'flex',
        flexDirection: 'row',
    },

    commentHeader:{
        borderWidth:'1px',
        borderStyle: 'solid',
    },

    commentContent:{
        borderWidth:'1px',
        borderStyle: 'solid',
    },

    button:{

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
                                <div className={classes.response}>
                                    <div className={classes.commentHeader}>
                                        <img className={classes.profilPicture} src={profilPicture}></img>
                                        <Typography>
                                            Marcel Pol
                                        </Typography>
                                        6 mai a 15h42
                                    </div>
                                    <div className={classes.commentContent}>
                                        <Typography>
                                            As explained in this blog post, certain legacy lifecycle methods are unsafe for use in async React applications. However, if your application uses third party libraries, it can be difficult to ensure that these lifecycles aren’t being used. Fortunately, strict mode can help with this!

                                            When strict mode is enabled, React compiles a list of all class components using the unsafe lifecycles, and logs a warning message with information about these components, like so:
                                        </Typography>
                                    </div>
                                    <Button className={classes.button} size="small" color="primary">
                                        voir ce message dans son contexte
                                    </Button>
                                </div>
                                <div className={classes.response}>
                                    <div className={classes.commentHeader}>
                                        <img className={classes.profilPicture} src={profilPicture}></img>
                                        <Typography>
                                            Marcel Pol
                                        </Typography>
                                        6 mai a 15h42
                                    </div>
                                    <div className={classes.commentContent}>
                                        <Typography>
                                            As explained in this blog post, certain legacy lifecycle methods are unsafe for use in async React applications. However, if your application uses third party libraries, it can be difficult to ensure that these lifecycles aren’t being used. Fortunately, strict mode can help with this!

                                            When strict mode is enabled, React compiles a list of all class components using the unsafe lifecycles, and logs a warning message with information about these components, like so:
                                        </Typography>
                                    </div>
                                    <Button className={classes.button} size="small" color="primary">
                                        voir ce message dans son contexte
                                    </Button>
                                </div>
                                <Typography>
                                    Genie logiciel :
                                </Typography>
                                <div className={classes.response}>
                                    <div className={classes.commentHeader}>
                                        <img className={classes.profilPicture} src={profilPicture}></img>
                                        <Typography>
                                            Marcel Pol
                                        </Typography>
                                        6 mai a 15h42
                                    </div>
                                    <div className={classes.commentContent}>
                                        <Typography>
                                            As explained in this blog post, certain legacy lifecycle methods are unsafe for use in async React applications. However, if your application uses third party libraries, it can be difficult to ensure that these lifecycles aren’t being used. Fortunately, strict mode can help with this!

                                            When strict mode is enabled, React compiles a list of all class components using the unsafe lifecycles, and logs a warning message with information about these components, like so:
                                        </Typography>
                                    </div>
                                    <Button className={classes.button} size="small" color="primary">
                                        voir ce message dans son contexte
                                    </Button>
                                </div>
                            </Paper>

                        </Grid>

                    </Paper>
                </div>

            </Layout>
        )
    }
}


export default withStyles(styles)(Home);