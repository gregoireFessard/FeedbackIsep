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

    subject: {
       color:'red', // temporaire
    },


})

class Message extends Component {

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
                        <ExpansionPanel square>
                            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Pierre Fer</Typography>
                                <Typography className={classes.subject}>sujet du message</Typography>
                                <Reply/>
                                <DeleteIcon/>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square>
                            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Pierre Fer</Typography>
                                <Typography className={classes.subject}>sujet du message</Typography>
                                <Reply/>
                                <DeleteIcon/>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square>
                            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Pierre Fer</Typography>
                                <Typography className={classes.subject}>sujet du message</Typography>
                                <Reply/>
                                <DeleteIcon/>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square>
                            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Pierre Fer</Typography>
                                <Typography className={classes.subject}>sujet du message</Typography>
                                <Reply/>
                                <DeleteIcon/>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                    </Grid>
                </Paper>

            </Layout>
        )
    }
}


export default withStyles(styles)(Message);