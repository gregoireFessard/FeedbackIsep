import React, { Component} from 'react'
import Layout from '../Layout';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import profilPicture from "../../assets/basicProfile.png";
import Button from '@material-ui/core/Button';


const styles = theme =>({

    main: {
        overflowY: 'scroll',
    },
    paper : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: '70%',
    },
    profilPicture:{
        height: '20px',
        padding: '20px',
    },

    comment:{
        display: 'flex',
        flexDirection: 'column',
    },

    response:{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '20%',
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
        float: 'right',
        backgroundColor:'white',
        margin: '3%',
        position: 'fixed',
    },
})

const comments = [
    {name: 'Marcel Pol',image:'link',date:'date',content:'content',nbLike:'1',nbDislike:'a',response: [
            {nom: 'Marcel Pol',image:'link',date:'date',content:'content',nbLike:'1',nbDislike:'a'},
        ]
    },
    {name: 'Marcel Pol',image:'link',date:'date',content:'content',nbLike:'1',nbDislike:'a',response:[]},

];




class Course extends Component {


    render(){

        const{classes} = this.props;

        return(
            <Layout className={classes.main}>
                <Button className={classes.button} size="small" color="primary">
                    Commenter
                </Button>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Paper className={classes.paper}>
                        <Typography variant="h2">
                            Cours de Technologie Web
                        </Typography>
                    </Paper>
                    {comments.map((comment)=>{

                        return (
                        <Paper className={classes.paper}>
                            <div className={classes.comment}>
                                <div className={classes.commentHeader}>
                                    <img className={classes.profilPicture} src={comment.image}></img>
                                    <Typography>
                                        {comment.name}
                                    </Typography>
                                    {comment.date}
                                </div>
                                <div className={classes.commentContent}>
                                    <Typography>
                                        {comment.content}
                                    </Typography>
                                </div>
                            </div>
                        {comment.response.map( (response) =>{return (
                            <div className={classes.response}>
                                <div className={classes.commentHeader}>
                                    <img className={classes.profilPicture} src={profilPicture}></img>
                                    <Typography>
                                        {response.name}
                                    </Typography>
                                    {response.date}
                                </div>
                                <div className={classes.commentContent}>
                                    <Typography>
                                        {response.content}
                                    </Typography>
                                </div>
                            </div>
                        )})}
                        </Paper>

                    )})}
                </Grid>
            </Layout>
        )
    }
}


export default withStyles(styles)(Course);