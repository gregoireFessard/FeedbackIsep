import React, { Component} from 'react'
import axios from "axios";
import Layout from "../Layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles"
import './index.css'



const styles = theme =>({


    paper : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: '70%',
    },


})

const MaterialPanel =(props)=>
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
                </Grid>
            </Layout>
        )
    }
}

export default withStyles(styles)(GlobalPageCourse);