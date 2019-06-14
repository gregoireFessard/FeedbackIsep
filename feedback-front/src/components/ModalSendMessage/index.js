import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import getConversations  from "../../actions/conversations";
import './index.css'
import axios from "axios";
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

async function add(dataConversations, dataReceiver, message, subject) {

    var from_user={}
    var to_user = {}
    await axios.get('/api/users/'+sessionStorage.getItem("UserAutotentificateId"))
        .then(data => from_user = data.data)
    await axios.get('/api/users/'+dataReceiver.id)
        .then(data => to_user = data.data)

    const conversation = {
        "dateTime": new Date(),
        "from": from_user,
        "status": "string",
        "subject": subject.subject,
        "to": to_user
    }


    const idConversation = dataConversations[dataConversations.length -1].id +1
    const dataPostMessage = {
        "conversation": conversation,
        "message": {
            "content": message.message,
            "conversation_id": 1 ,
            "dateTime": new Date(),
            "conversation" : conversation,
            "is_from_sender": true,
            "message_read": false
        }
    }
    await axios.post('/api/conversations' , dataPostMessage)
        .then(function (response) {
            console.log(response);
         }).catch(function (error) {
            console.log(error);
        });
}


function ModalSendMessage(dataReceiver, dataConversations) {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [subject, setSubject] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        if (event.target.name === "message") {
            setMessage(event.target.value)
        }
        if (event.target.name === "subject") {
            setSubject(event.target.value)
        }

    }

    async function handleSubmit (event){
        event.preventDefault();
        await add(dataConversations, dataReceiver, {message}, {subject})
        handleClose()
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary" size={"small"} >Envoyer un message</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <form className={"formPanel"} onSubmit={handleSubmit} >
                    <Typography component="h1" variant="h5">
                        Envoyer un message
                    </Typography>
                    <FormControl margin="normal" required className={"formControlReceiver"}>
                        <label id="receiver" name="receiver" >Destinataire : {dataReceiver.firstName + " " + dataReceiver.lastName}</label>
                    </FormControl>
                    <FormControl margin="normal" required className={"formControlReceiver"}>
                        <input type="text" name="subject" placeholder=" Object : " value={subject} onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl margin="normal" required className={"formControlMessage"}>
                        <textarea name="message" id="message" autoFocus
                                  value={message} onChange={handleInputChange} placeholder={"Entrez votre message ..."}>
                        </textarea>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={"submit"}
                    >
                        Envoyer
                    </Button>
                </form>
            </Modal>
        </div>
    );
}

export default ModalSendMessage;