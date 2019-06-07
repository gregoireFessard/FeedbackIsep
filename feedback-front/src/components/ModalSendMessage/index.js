import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import './index.css'
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



function ModalSendMessage(dataReceiver) {
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

    const handleSubmit = () =>{
        //Envoie message a la bdd
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
                <form className={"formPanel"} onSubmit={handleSubmit}>
                    <Typography component="h1" variant="h5">
                        Envoyer un message
                    </Typography>
                    <FormControl margin="normal" required className={"formControlReceiver"}>
                        <label id="receiver" name="receiver" >Destinataire : {dataReceiver.firstname + " " + dataReceiver.lastname}</label>
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