import React, { Component} from 'react'
import Layout from '../Layout';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Reply from '@material-ui/icons/Reply';

import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import './index.css'
import {Alert} from "antd";
const styles = theme =>({

    main: {
        display: 'flex',
    },

    mainPaper: {
        width: '70%',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: theme.spacing.unit * 8,
        height: '80vh',
        overflowY: 'scroll',
    },




})
const MessagePanel = props =>
    <ExpansionPanel square className={"panel"}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{props.data[4].firstName} {props.data[5].lastName} </Typography>
            <Typography>Object : {props.data[3].subject} </Typography><br/>
            <Typography>{new Date(Date.parse(props.data[2].dateTime)).toDateString()}</Typography>
            <Reply values={props.data[0].id}/>
            <DeleteIcon values={props.data[0].id}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
                {props.data[1].content}
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>

class Message extends Component {
    state = {
        dataMessages : [],
        dataConversations : [],
        data : []
    }



    componentDidMount() {
        this.findMessagesConverseationToId()
    }

    async findUser(data, idUser){
        await axios.get('/api/users/' + idUser)
            .then(dataUser => {
                data.push({firstName : dataUser.data.firstName})
                data.push({lastName : dataUser.data.lastName})
            })

        this.setState({
            dataMessages: this.state.dataMessages.concat([data])
        })
    }
    async findDataToId(id, idUser , dataSubject){
        await axios.get('/api/conversations/'+ id + '/messages')
            .then(data => {
                data.data.map((info) => {
                    if (info.message_read == false && info.is_from_sender == true) {
                        var dataToId  = []

                        dataToId.push({id : info.id})
                        dataToId.push({content : info.content})
                        dataToId.push({dateTime : info.dateTime})
                        dataToId.push({subject : dataSubject})
                        this.findUser(dataToId, idUser)
                    }
                })
            })
    }

    async findDataFromId(id , idUser, dataSubject){
        await axios.get('/api/conversations/'+ id + '/messages')
            .then(data => {
                data.data.map((info) => {
                    if (info.message_read == false && info.is_from_sender == false) {
                       var dataFromId  = []
                        dataFromId.push({id : info.id})
                        dataFromId.push({content : info.content})
                        dataFromId.push({dateTime : info.dateTime})
                        dataFromId.push({subject : dataSubject})
                        this.findUser(dataFromId, idUser)
                    }
                })
            })

    }


     async findMessagesConverseationToId(){
        const dataMessage = []
         const dataConversations = []
         await axios.get('/api/conversations')
             .then(data => {dataConversations.push(data.data)})

        console.log(dataConversations[0])
        dataConversations[0].map((infoConversations) =>{
            if( infoConversations.to_id == sessionStorage.getItem("UserAutotentificateId")) {
                this.findDataToId(infoConversations.id, infoConversations.to_id, infoConversations.subject)
            }
            if( infoConversations.from_id == sessionStorage.getItem("UserAutotentificateId")) {
                this.findDataFromId(infoConversations.id, infoConversations.from_id, infoConversations.subject)
            }
    })

    }


    render(){

        const{classes} = this.props;
        return(
            <Layout className={classes.main}>
                <Paper className={classes.mainPaper}>
                    <Typography variant="h3">
                        Mes messages
                    </Typography>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        {this.state.dataMessages.map((data) => {
                            console.log(data)
                            return(
                                <MessagePanel data = {data}/>
                                )
                        })}
                    </Grid>
                </Paper>

            </Layout>
        )
    }
}


export default withStyles(styles)(Message);