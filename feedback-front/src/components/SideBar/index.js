import React from 'react';

import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import withStyles from "@material-ui/core/styles/withStyles";
import Logo from '../../assets/IsepLogo.svg';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import './index.css'

const dataUserCourses = [
	{"id":"1","user_id":"3","course_id":"1"},
	{"id":"2","user_id":"3","course_id":"2"},
	{"id":"3","user_id":"3","course_id":"3"},
	{"id":"4","user_id":"3","course_id":"4"},
	{"id":"5","user_id":"3","course_id":"5"},
	{"id":"6","user_id":"3","course_id":"6"},
	{"id":"7","user_id":"3","course_id":"7"},
	{"id":"8","user_id":"3","course_id":"8"}
]
const dataCourseMaterials = [
	{"id":"1","name":"Genie logiciel"},
	{"id":"2","name":"Cybersecurite"},
	{"id":"3","name":"Architecture des SI"},
	{"id":"4","name":"Analyse Geopolitique"},
	{"id":"5","name":"Technologies Web"},
	{"id":"6","name":"Big Data"},
	{"id":"7","name":"Espagnol"},
	{"id":"8","name":"Anglais"}
]

const styles = theme =>({
	listItem : {
		color : 'white !important'
	},
	logo:{
		height: '80px',
		padding: '20px'
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
})


class SideBar extends React.Component{



	state = {
		open: false,
		dataCourseMaterials : {}
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};


	render(){
		const { classes } = this.props
		return (
			<List component="nav">
				<img className={classes.logo} src={Logo}></img>
				<ListItem button  >
					<ListItemText primary="Techno web"  />
				</ListItem>
				<Divider />
				<ListItem button divider>
					<ListItemText primary="Genie logiciel" />
				</ListItem>
				<ListItem button onClick={this.handleClick}>
					<ListItemText primary="Analyse de données" />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							{/*<ListItemIcon>
								<StarBorder />
							</ListItemIcon>*/}
							<ListItemText primary="Lundi 6 mai - Projet" secondary="M. NGUYEN"/>
						</ListItem>
						<ListItem button className={classes.nested}>
							<ListItemText primary="Lundi 16 mai - Projet" secondary="M. NGUYEN"/>
						</ListItem>
						<ListItem button className={classes.nested}>
							<ListItemText primary="Lundi 26 mai - Projet" secondary="M. NGUYEN"/>
						</ListItem>
					</List>
				</Collapse>
			</List>
		);
	}
}
export default withStyles(styles)(SideBar);
