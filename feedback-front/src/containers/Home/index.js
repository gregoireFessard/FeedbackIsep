import React, { Component} from 'react'
import Layout from '../Layout';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import profilPicture from '../../assets/basicProfile.png';
import axios from 'axios';
import LastMessageHome from '../../components/LastMessageHome'
import NotReadMessageHome from '../../components/NotReadMessageHome'


import withStyles from "@material-ui/core/styles/withStyles";

const dataLastMessageCourse = [
    {"nameMaterial" : "cybersécurité",
        "data" : [
            {
                "user" :   {"id":"1","username":"gfessar","firstname":"Gregoire","lastname":"Fessar","isep_id":"1","mail":"gregoire.fessard@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#111111","parent_id":null,"enabled":"1"},
                "comment" :{"id":"1","user_id":"1","course_id":"1","content":"Ce cOuRs eSt nUL. jAiMe pAs","date_time":"2019-05-21 13:02:00","number_like":"35","number_dislike":"0","parent_id":null},
            }
            ],

    },
    {"nameMaterial" : "Génie Logiciel",
        "data" : [
            {
                "user" :   {"id":"1","username":"gfessar","firstname":"Gregoire","lastname":"Fessar","isep_id":"1","mail":"gregoire.fessard@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#111111","parent_id":null,"enabled":"1"},
                "comment" :{"id":"1","user_id":"1","course_id":"1","content":"Ce cOuRs eSt nUL. jAiMe pAs","date_time":"2019-05-21 13:02:00","number_like":"35","number_dislike":"0","parent_id":null},
            }
            ],

    },
    {"nameMaterial" : "technoWeb",
        "data" : [
            {
                "user" :   {"id":"1","username":"gfessar","firstname":"Gregoire","lastname":"Fessar","isep_id":"1","mail":"gregoire.fessard@isep.fr","password":"root","avatar":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAARklEQVR4nGKZZXGLgRTQsYOZJPVMJKkmA4xaMGrBqAWjFoxaQA3AwvLOhiQNL5dGkKR+6AfRqAWjFoxaMGrBiLAAEAAA//9b4QZIR8FaGQAAAABJRU5ErkJggg==","color":"#111111","parent_id":null,"enabled":"1"},
                "comment" :{"id":"1","user_id":"1","course_id":"1","content":"Ce cOuRs eSt nUL. jAiMe pAs","date_time":"2019-05-21 13:02:00","number_like":"35","number_dislike":"0","parent_id":null},
            }
            ],

    }


    ]

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

class Home extends Component {

    state = {
        dataUser : {},
        dataLastMessageCourse : dataLastMessageCourse,
        dataCourse : {},
        dataUserCourses : dataUserCourses,

    }
    async findCreateData(){
        const  dataUserCoursesGlobal = []
        const dataLastMessageCourse = []
        await axios.get('/api/courses')
            .then(data => this.setState({dataCourse : data.data}))

        console.log(this.state.d)
        //recup les cours de l'utilisateur connecté qui ne se sont pas encore déroulé (comparaison date)
        this.state.dataCourse.map((infoCourse) =>{
                this.state.dataUserCourses.map((infoUserCourse)=>{
                    if(infoUserCourse.course_id == infoCourse.id){
                            dataUserCoursesGlobal.push(infoCourse)
                    }
                })
            }
        )

        this.setState({dataUserCoursesGlobal : dataUserCoursesGlobal})
    }

    componentDidMount() {
        this.findCreateData()
    }


    render(){

        const{classes} = this.props;
        return(
            <Layout className={classes.main}>
                <div className={classes.box1}>
                    <Paper className={classes.paper1}>
                        <Grid container
                              direction="column"
                              justify="center"
                              alignItems="center">
                            <Grid item xs >
                                <Link href={'https://www.isep.fr/'}>Site ISEP</Link>
                            </Grid>
                            <Grid item xs >
                                <Link href={'https://educ.isep.fr/moodle/'}>Moodle</Link>
                            </Grid>
                            <Grid item xs >
                                <Link href={'http://planning.isep.fr/'}>Hyperplanning</Link>
                            </Grid>
                            <Grid item xs >
                                <Link href={'./profil/'+sessionStorage.getItem("UserAutotentificateId")}>Mon profil</Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                <NotReadMessageHome/>
                <LastMessageHome data = {this.state.dataLastMessageCourse}/>
            </Layout>
        )
    }
}


export default withStyles(styles)(Home);