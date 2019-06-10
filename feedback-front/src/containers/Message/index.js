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
import NotReadMessageHome from "../../components/NotReadMessageHome";
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
    <ExpansionPanel square>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{props.firstName} {props.lastName}</Typography>
            <Typography style={{'color' : 'red'}}>{props.subject}</Typography>
            <Reply/>
            <DeleteIcon/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
                {props.message}
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>

class Message extends Component {
    state = {
        dataMessages : []
    }

    async findCreateData() {
        var dataConversations = []
        const listIpConversationsSender = []
        const listIpConversationsReceiver = []

        await axios.get('/api/conversations')
            .then(data => { dataConversations = data.data})

        dataConversations.map((infoConversations) =>{
            if( infoConversations.from_id == sessionStorage.getItem("UserAutotentificateId")){
                var dataPushed = {
                    firstName : "",
                    lastName : "",
                    subject : "",
                    message : ""
                };

               dataPushed.subject = infoConversations.subject;


                axios.get('/api/users/' + infoConversations.to_id)
                    .then(data => {
                       dataPushed.firstName = data.data.firstName;
                        dataPushed.lastName = data.data.lastName
                    })

                axios.get('/api/conversations/'+ infoConversations.id +'/messages')
                    .then(data => {
                        data.data.map((info) =>{
                            if(info.message_read === false && info.is_from_sender ===false){
                                dataPushed.message = info.content
                            }
                        })
                    })


                this.state.dataMessages.push(dataPushed)
            }
            if( infoConversations.to_id == sessionStorage.getItem("UserAutotentificateId")){
                listIpConversationsReceiver.push(infoConversations.id)
            }
        })

        console.log(this.state.dataMessages)

    }

    componentDidMount() {
        this.findCreateData()
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
                        {this.state.dataMessages.map((info) =>{

                        })}
                    </Grid>
                </Paper>

            </Layout>
        )
    }
}


export default withStyles(styles)(Message);