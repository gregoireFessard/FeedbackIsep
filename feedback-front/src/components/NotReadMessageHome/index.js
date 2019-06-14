import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";


const styles = theme =>({
    main : {
        display: 'flex',

    },
    box1 :  {
        width: '20%',
        minHeight: '80px',
        float:'right',
        marginRight:'5%',
    },
    box2 :  {
        width: '60%',
        minHeight: '80px',
        alignItems: 'center',
        margin:'5%',
    },


    paper1 : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },



})

class NotReadMessageHome extends React.Component{
    state = {
        nbNotReadMessage : 0
    }
    async findCreateData() {
        var dataConversations = []
        const listIpConversationsSender = []
        const listIpConversationsReceiver = []

        await axios.get('/api/conversations/'+sessionStorage.getItem("UserAutotentificateId"))
            .then(data => { data.map((info)=>{
                listIpConversationsSender.push(info.id)
            })}).then(console.log(listIpConversationsSender))



       for (var i = 0; i< listIpConversationsSender.length ; i++){
           await axios.get('/api/conversations/'+ listIpConversationsSender[i] +'/messages')
               .then(data => { 
                  data.data.map((info) =>{
                      if(info.message_read === false && info.is_from_sender ===false){
                          this.setState({nbNotReadMessage : this.state.nbNotReadMessage +1})
                      }
                  })
               })
        }

        for (var i = 0; i< listIpConversationsReceiver.length ; i++){
            await axios.get('/api/conversations/'+ listIpConversationsReceiver[i] +'/messages')
                .then(data => {
                    data.data.map((info) =>{
                        if(info.message_read === false && info.is_from_sender ===true){
                            this.setState({nbNotReadMessage : this.state.nbNotReadMessage +1})
                        }
                    })
                })
        }


    }

    componentDidMount() {
        this.findCreateData()
    }

    render(){
        const{classes} = this.props;
        return(
            <div className={classes.box2}>
                <Paper className={classes.paper1}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Link
                            href={'./message'}
                            variant="body2"
                            underline="always"
                        >
                            Vous avez {this.state.nbNotReadMessage} messages non lus : Consulter mes messages
                        </Link>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(NotReadMessageHome);