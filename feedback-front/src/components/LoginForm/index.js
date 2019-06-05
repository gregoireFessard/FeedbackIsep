import React from 'react';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Image from '../../assets/IsepPicture.jpg';
import App from '../../containers/App';
import { Redirect } from 'react-router';

const dataUsers = [
	{"id":"14","username":"aadmin","firstname":"admin","lastname":"admin","isep_id":"14","mail":"admin.admin@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#eeeeee","parent_id":null,"enabled":"1"},
	{"id":"3","username":"acanard","firstname":"Antoine","lastname":"Canard","isep_id":"3","mail":"antoine.canard@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#a6e590","parent_id":null,"enabled":"1"},
	{"id":"8","username":"adubernet","firstname":"Alice","lastname":"Dubernet","isep_id":"8","mail":"alice.dubernet@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#888888","parent_id":null,"enabled":"1"},
	{"id":"11","username":"aplatel","firstname":"Adriana","lastname":"Platel","isep_id":"11","mail":"adriana.platel@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#bbbbbb","parent_id":null,"enabled":"1"},
	{"id":"4","username":"aveloso","firstname":"Alex","lastname":"Veloso","isep_id":"4","mail":"alex.veloso@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#444444","parent_id":null,"enabled":"1"},
	{"id":"5","username":"ccisse","firstname":"Cameron","lastname":"Cisse","isep_id":"5","mail":"cameron.cisse@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#555555","parent_id":null,"enabled":"1"},
	{"id":"12","username":"eabgrall","firstname":"Emma","lastname":"Abgrall","isep_id":"12","mail":"emma.abgrall@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#cccccc","parent_id":null,"enabled":"1"},
	{"id":"1","username":"gfessar","firstname":"Gregoire","lastname":"Fessar","isep_id":"1","mail":"gregoire.fessard@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#111111","parent_id":null,"enabled":"1"},
	{"id":"10","username":"jleite","firstname":"Jean Charles","lastname":"Leite","isep_id":"10","mail":"jeancharles.leite@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#aaaaaa","parent_id":null,"enabled":"1"},
	{"id":"13","username":"jlemee","firstname":"Jacky","lastname":"Lemee","isep_id":"13","mail":"jacky.lemee@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#dddddd","parent_id":null,"enabled":"1"},
	{"id":"2","username":"ktan","firstname":"Kevin","lastname":"TAN","isep_id":"2","mail":"kevin.tan@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#222222","parent_id":null,"enabled":"1"},
	{"id":"6","username":"mnguyen","firstname":"Mathieu","lastname":"Nguyen","isep_id":"6","mail":"mathieu.nguyen@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#666666","parent_id":null,"enabled":"1"},
	{"id":"9","username":"mpepineau","firstname":"Maurice","lastname":"Pepineau","isep_id":"9","mail":"maurice.pepineau@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#999999","parent_id":null,"enabled":"1"},
	{"id":"7","username":"zkaziaoul","firstname":"Zakia","lastname":"Kaziaoul","isep_id":"7","mail":"zakia.kaziaoul@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#777777","parent_id":null,"enabled":"1"}
]
const styles = theme =>({
	root: {
		display: 'flex',
	},
	main: {
		width: '100%',
		minHeight:'100vh',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		overflow: 'hidden',
	},
	backgroundHolder: {
		width: '100%',
		minHeight:'100vh',
		backgroundImage: `url(${Image})`,
		backgroundSize: '100%',
		backgroundRepeat: 'no-repeat',

	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});




class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mail: '',
			password : '',
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		if (event.target.name === "mail") {
			this.setState({
				mail : event.target.value
			})
		}
		if (event.target.name === "password") {
			this.setState({
				password : event.target.value
			})
		}
	}

	handleSubmit(event){
		event.preventDefault()

		dataUsers.map((info) =>{
			console.log(this.s)
				if (this.state.mail === info.mail && this.state.password === info.password){
					console.log(info)
					sessionStorage.setItem('UserAutotentificateFirstname', info.firstname)
					sessionStorage.setItem('UserAutotentificateLastname', info.lastname)
					sessionStorage.setItem('UserAutotentificateUsername', info.username)
					sessionStorage.setItem('UserAutotentificateMail', info.mail)
					sessionStorage.setItem('UserAutotentificateId', info.id)
					sessionStorage.setItem('UserAutotentificateIsep_id', info.isep_id)
					sessionStorage.setItem('UserAutotentificateAvatar', info.avatar)
					sessionStorage.setItem('UserAutotentificateColor', info.color)
					sessionStorage.setItem('UserAutotentificateParent_id', info.parent_id)
					sessionStorage.setItem('UserAutotentificateEnabled', info.enabled)
					document.location = "/home"
				}
			}
		)

	}



	render() {

		const{classes} = this.props;

		return (
			<main className={classes.backgroundHolder}>
				<div className={classes.main}>
					<Paper className={classes.paper}>
						<Typography component="h1" variant="h5">
							Connection
						</Typography>
						<form className={classes.form} onSubmit={this.handleSubmit}>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="mail">Email</InputLabel>
								<Input id="mail" name="mail" autoComplete="mail" autoFocus value={this.state.mail} onChange={this.handleInputChange}/>
							</FormControl>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="password">Mot de passe</InputLabel>
								<Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.password} onChange={this.handleInputChange}/>
							</FormControl>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Se souvenir de moi"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Se connecter
							</Button>
						</form>
					</Paper>
				</div>
			</main>
		);

	}
}

export default withStyles(styles)(Index);
