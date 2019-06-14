import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import profilPicture from "../../assets/basicProfile.png";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import './index.css'



const MessagePanel = (props) =>
    <div className={"responseHome"}>
        <div className={"commentHeaderHome"}>
            <img className={"profilPictureHome"} src={props.data.user.avatar}></img>
            <Typography>
                {props.data.user.firstname} {props.data.user.lastname}
            </Typography>
            {props.data.comment.dateTime}
        </div>
        <div className={"commentContentHome"}>
            <Typography>
                {props.data.comment.content}
            </Typography>
        </div>
        <Button className={"buttonHome"} size="small" color="primary">
            voir ce message dans son contexte
        </Button>
    </div>

class LastMessageHome extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open : false,
            data : this.props.data
        }

    }
    render(){
        const{classes} = this.props;
        return(
            <div className={"box3"}>
                <Paper>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography variant="h4" style={{'margin' : '3%'}}>
                            Derniers messages des professeurs
                        </Typography>
                        <Paper className={"messageHome"}>
                            {this.state.data.map((infoGlobal)=>{
                                return(
                                    <div>
                                        <Typography>
                                            {infoGlobal.nameMaterial} :
                                        </Typography>
                                        {infoGlobal.data.map((infoData)=>{
                                                console.log(infoData)
                                                return(
                                                    <MessagePanel data = {infoData}/>
                                                )
                                            }
                                        )}
                                    </div>
                                )
                            })}
                        </Paper>

                    </Grid>

                </Paper>
            </div>


        )
    }
}

export default LastMessageHome;