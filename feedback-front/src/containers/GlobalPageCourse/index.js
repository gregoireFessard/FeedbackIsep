import React, { Component} from 'react'
import axios from "axios";
import Layout from "../Layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles"
import './index.css'
import {Button} from "@material-ui/core";



const styles = theme =>({


    paper : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',

        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: '60%',
    },


})

const MaterialPanel =(props)=>
    <div className={"commentGlobal"}>
        <Typography variant="h6" align={"center"}>
            {props.data.material.name} : cours du {new Date(Date.parse(props.data.dateTime)).toDateString()}
        </Typography>
        <div className={"commentHeaderGlobal"}>

            <img className={"profilPictureGlobal"} src={props.data.teacher.avatar}></img>
            <Typography>
                Professeur : {props.data.teacher.firstName} {props.data.teacher.lastName}
            </Typography>
            <Typography>
                Date : { new Date(Date.parse(props.data.dateTime)).toDateString()}
            </Typography>

        </div>
        <Button href={'../course/'+props.data.id}>Accéder aux commentaires du cours</Button>

    </div>
class GlobalPageCourse extends React.Component{

    async getDataCourse(){
        console.log(this.state.id_matiere)
        await axios.get('/api/courses')
            .then(data => data.data.map((info)=>{
                console.log(info.material.id)
                if (info.material.id == this.state.id_matiere){
                    this.state.data_course.push(info)
                    this.setState({name_material : info.material.name})
                }
            }))
    }
    constructor(props) {
        super(props);
        this.state = {
            id_matiere : this.props.match.params.IDMaterial,
            name_material :"",
            data_course : []
        }

    }

    componentDidMount() {
        this.getDataCourse()
        console.log(this.state.data_course)
    }

    render() {
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
                        <Typography variant="h3" align={"center"}>
                            {this.state.name_material}
                        </Typography>
                    </Paper>
                        {this.state.data_course.map((info)=>{
                            return(
                                <Paper className={classes.paper}>
                                    <MaterialPanel data = {info}/>
                                </Paper>
                            )
                        })}

                </Grid>
            </Layout>
        )
    }
}

export default withStyles(styles)(GlobalPageCourse);