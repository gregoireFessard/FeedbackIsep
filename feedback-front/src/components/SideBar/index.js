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
import SideBarComponent from "../SideBarComponent";

import './index.css'
import axios from "axios";

const dataUserCourses = [
	{"id":"1","user_id":"3","course_id":"1"},
	{"id":"2","user_id":"3","course_id":"2"},
	{"id":"3","user_id":"3","course_id":"3"},
	{"id":"4","user_id":"3","course_id":"4"},
	{"id":"5","user_id":"3","course_id":"5"},
	{"id":"6","user_id":"3","course_id":"6"},
	{"id":"7","user_id":"3","course_id":"7"},
	{"id":"8","user_id":"3","course_id":"8"},
	{"id":"9","user_id":"3","course_id":"9"},
	{"id":"10","user_id":"3","course_id":"10"},
	{"id":"11","user_id":"3","course_id":"11"},
	{"id":"12","user_id":"3","course_id":"12"},
	{"id":"13","user_id":"3","course_id":"13"},
	{"id":"14","user_id":"3","course_id":"14"},
	{"id":"15","user_id":"3","course_id":"15"},
	{"id":"16","user_id":"3","course_id":"16"},
	{"id":"17","user_id":"3","course_id":"17"},
	{"id":"18","user_id":"3","course_id":"18"},
	{"id":"19","user_id":"3","course_id":"19"},
	{"id":"20","user_id":"3","course_id":"20"},
	{"id":"21","user_id":"3","course_id":"21"},
	{"id":"22","user_id":"3","course_id":"22"},
	{"id":"23","user_id":"3","course_id":"23"},
	{"id":"24","user_id":"3","course_id":"24"},
	{"id":"25","user_id":"3","course_id":"25"},
	{"id":"26","user_id":"3","course_id":"26"},
	{"id":"27","user_id":"3","course_id":"27"},
	{"id":"28","user_id":"3","course_id":"28"},
	{"id":"29","user_id":"3","course_id":"29"},
	{"id":"30","user_id":"3","course_id":"30"},
	{"id":"31","user_id":"3","course_id":"31"},
	{"id":"32","user_id":"3","course_id":"32"}
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
		dataCourse : {},
		dataUserCourses : dataUserCourses,
		dataUserCoursesGlobal : [],
		dataSideBar : []
	};


	async findCreateData(){
		const  dataUserCoursesGlobal = []
		const dataSideBar = []
		await axios.get('/api/courses')
			.then(data => this.setState({dataCourse : data.data}))


		//recup les cours de l'utilisateur connecté qui ne se sont pas encore déroulé (comparaison date)
		this.state.dataCourse.map((infoCourse) =>{
				this.state.dataUserCourses.map((infoUserCourse)=>{
					if(infoUserCourse.course_id == infoCourse.id){
						const TimeStampStartCourse = Date.parse(infoCourse.dateTime)
						if(Date.now()>= TimeStampStartCourse){
							dataUserCoursesGlobal.push(infoCourse)
						}

					}
				})
			}
		)

		//Créer un tableau matière des cours de l'utilisateur ses trois prochains cours
		dataUserCoursesGlobal.map((infoUserCoursesGlobal =>{
			var check = 0;
			dataSideBar.map((infoDataSideBar) =>{
				if(infoDataSideBar.nameMaterial == infoUserCoursesGlobal.material.name){
					check = 1;
				}
			})
			if(check == 0){
				var compteur = 0;
				const dataCoursePushed =[]
				dataUserCoursesGlobal.map((info =>{
					if(info.material.name == infoUserCoursesGlobal.material.name && compteur !=3){
						compteur+=1
						dataCoursePushed.push(info)
					}
				}))
				const dataPushed = {
					nameMaterial : infoUserCoursesGlobal.material.name,
					dataCourse : dataCoursePushed
				}
				dataSideBar.push(dataPushed)
			}
		}))
		this.setState({dataSideBar : dataSideBar})
	}
	componentDidMount() {
		this.findCreateData()
	}

	render(){
		const { classes } = this.props
		return (
			<List component="nav">
				<img className={classes.logo} src={Logo}></img>
				{this.state.dataSideBar.map((info)=>{
					console.log("ok")
					return(
						<div>
							<SideBarComponent data = {info}/>
							<Divider/>
						</div>
					)
				})}

			</List>
		);
	}
}
export default withStyles(styles)(SideBar);
