import React, { Component} from 'react'
import Layout from '../Layout';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import profilPicture from "../../assets/basicProfile.png";
import  Like from '../../assets/like.png';
import Dislike from'../../assets/dislike.png';
import './index.css'
import {Button} from "@material-ui/core";
import axios from "axios";
import ModalComment from "../../components/ModalComment";
import LikeButton from "../../components/LikeButton"



const styles = theme =>({


    paper : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: '70%',
    },


})
async function addLike(IDComment, IDCourse){
    await axios.post('/api/courses/'+IDCourse+"/comments/"+IDComment+"/like" )
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
}

async function addDislike(IDComment, IDCourse){
    await axios.post('/api/courses/'+IDCourse+"/comments/"+IDComment+"/dislike" )
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

}
const ModalReponse = (props) =>
    <div>
    {ModalComment(props.IDCourse, props.parentID , props.text_button)}
    </div>

const CommentPanel = (props) =>
    <div className={"comment"}>
        <div className={"commentHeader"}>
            <img className={"profilPicture"} src={props.data.user.avatar}></img>
            <Typography>
                {props.data.user.firstName} {props.data.user.lastName}
            </Typography>
            { new Date(Date.parse(props.data.dateTime)).toDateString()}
        </div>
        <div className={"commentContent"}>
            <Typography>
                {props.data.content}
            </Typography>
        </div>
        <div className={"likeDislike"}>
            <Button  name="like" ><img src={Like} width={'30px'} style={{'margin-right' : '10%'}}/></Button>{props.data.number_like}
            <Button  name="dislike" ><img src={Dislike} width={'30px'} style={{'margin-right' : '10%'}}/></Button>{props.data.number_dislike}
        </div>
    </div>


class Course extends Component {
    state ={
        yo : "",
        comments : [],
        dataCourseName : [],
        dataCourseDateTime : "",
        courseId :""
    }
    async getCommentCourse(IDCourse){
        var comments = []
        await axios.get('/api/courses/'+IDCourse+'/comments')
            .then(data => comments.push(data.data))
        this.setState({comments : comments[0]})
    }

    async getDataCourse(IDCourse){
        var dataCourse = []
        await axios.get('/api/courses')
            .then(data => data.data.map((info)=>{
                if (info.id == IDCourse){
                    dataCourse.push(info)
                }
            }))
        this.setState({dataCourseName : dataCourse[0].material.name, dataCourseDateTime : new Date(Date.parse(dataCourse[0].dateTime)).toDateString()})

    }
    componentDidMount() {
        const IDCourse = this.props.match.params.IDCourse
        this.setState({courseId : IDCourse})
        this.getDataCourse(IDCourse)
         this.getCommentCourse(IDCourse)

    }




    render(){

        const{classes} = this.props;

        return(
            <Layout className={"main"}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Paper className={classes.paper}>
                        <Typography variant="h5" align={"center"}>
                            {this.state.dataCourseName} : Cours du {this.state.dataCourseDateTime}
                        </Typography>
                    </Paper>
                    <br/>
                    <Button className={"button"} size="small" variant="contained" color="primary">
                        <ModalReponse IDCourse = {this.state.courseId} parentID = {0} text_button = "Ajouter un commentaire"/>
                    </Button>
                    {this.state.comments.map((comment)=> {
                        console.log(comment)
                        if (comment.parent_id == 0) {
                            return (
                                <Paper className={classes.paper}>
                                    <div style={{'width' : '100%', 'margin-bottom' : '10px'}}>
                                        <CommentPanel data = {comment}  IDCourse = {this.state.courseId}/>
                                    </div>
                                    {
                                        this.state.comments.map((subComment)=> {
                                            if(subComment.parent_id == comment.id){
                                                console.log(this.state.courseId)
                                                return(
                                                    <div className={'answer'} >
                                                        <CommentPanel data = {comment} IDCourse = {this.state.courseId}/>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                    <div className={"buttonMessage"}>
                                        <ModalReponse IDCourse = {this.state.courseId} parentID = {comment.id} text_button ="Répondre"/>
                                    </div>
                                </Paper>
                            )

                        }
                    })}

                </Grid>
            </Layout>
        )
    }
}


export default withStyles(styles)(Course);