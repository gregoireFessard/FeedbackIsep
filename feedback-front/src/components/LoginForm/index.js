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
	render() {

		const{classes} = this.props;

		return (
			<main className={classes.backgroundHolder}>
				<div className={classes.main}>
					<Paper className={classes.paper}>
						<Typography component="h1" variant="h5">
							Connection
						</Typography>
						<form className={classes.form}>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="email">Nom de compte</InputLabel>
								<Input id="email" name="email" autoComplete="email" autoFocus />
							</FormControl>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="password">Mot de passe</InputLabel>
								<Input name="password" type="password" id="password" autoComplete="current-password" />
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
