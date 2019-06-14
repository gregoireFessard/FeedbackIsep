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


async function add(message , IDCourse, parent_ID) {
    var dataUser = {}

    await axios.get('/api/users/'+sessionStorage.getItem("UserAutotentificateId"))
        .then(data => dataUser = data.data)

    const dataPost = {
        "content": message.message,
        "dateTime": new Date(),
        "number_dislike": 0,
        "number_like": 0,
        "parent_id": parent_ID,
        "user": dataUser
    }

    console.log(dataPost)

    await axios.post('/api/courses/'+IDCourse+"/comments" , dataPost)
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

}
function ModalSendMessage(courseId , parentID , text_button) {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

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
    }

    async function handleSubmit (event){
        event.preventDefault();
        await add({message} , courseId, parentID)
        handleClose()
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary" size={"small"} >{text_button}</Button>
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
                        Répondre
                    </Button>
                </form>
            </Modal>
        </div>
    );
}

export default ModalSendMessage;