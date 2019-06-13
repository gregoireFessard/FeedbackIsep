import React, { Component} from 'react'
import Layout from '../Layout';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import profilPicture from "../../assets/basicProfile.png";
import Button from '@material-ui/core/Button';


const styles = theme =>({

    main: {
        overflowY: 'scroll',
    },
    paper : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: '70%',
    },
    profilPicture:{
        height: '20px',
        padding: '20px',
    },

    comment:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

    },

    response:{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '20%',
        width: '80%',

    },

    commentHeader:{
        borderWidth:'1px',
        borderStyle: 'solid',
        width: '100%',
    },

    commentContent:{
        borderWidth:'1px',
        borderStyle: 'solid',
        width: '100%',
    },

    button:{
        float: 'right',
        backgroundColor:'white',
        margin: '3%',
        position: 'fixed',
    },
})

const comments = [
    {
        "content": "Ceci est un commentaire de cours",
        "course": {
            "dateEnd": "2019-06-13T23:07:18.969Z",
            "dateTime": "2019-06-13T23:07:18.969Z",
            "duration": "2019-06-13T23:07:18.969Z",
            "id": 0,
            "material": {
                "id": 0,
                "name": "string",
                "users": [
                    null
                ]
            },
            "teacher": {
                "avatar": "string",
                "color": "string",
                "courses": [
                    null
                ],
                "email": "string",
                "enabled": true,
                "firstName": "string",
                "id": 0,
                "isep_id": 0,
                "lastName": "string",
                "materials": [
                    {
                        "id": 0,
                        "name": "string",
                        "users": [
                            null
                        ]
                    }
                ],
                "password": "string",
                "status": "string",
                "teacher_courses": [
                    null
                ],
                "username": "string"
            },
            "users": [
                {
                    "avatar": "string",
                    "color": "string",
                    "courses": [
                        null
                    ],
                    "email": "string",
                    "enabled": true,
                    "firstName": "string",
                    "id": 0,
                    "isep_id": 0,
                    "lastName": "string",
                    "materials": [
                        {
                            "id": 0,
                            "name": "string",
                            "users": [
                                null
                            ]
                        }
                    ],
                    "password": "string",
                    "status": "string",
                    "teacher_courses": [
                        null
                    ],
                    "username": "string"
                }
            ]
        },
        "dateTime": "2019-06-13T23:07:18.969Z",
        "id": 1,
        "number_dislike": 0,
        "number_like": 0,
        "parent_id": 0,
        "user": {
            "avatar": "string",
            "color": "string",
            "courses": [
                null
            ],
            "email": "string",
            "enabled": true,
            "firstName": "string",
            "id": 0,
            "isep_id": 0,
            "lastName": "string",
            "materials": [
                {
                    "id": 0,
                    "name": "string",
                    "users": [
                        null
                    ]
                }
            ],
            "password": "string",
            "status": "string",
            "teacher_courses": [
                null
            ],
            "username": "string"
        }
    },
    {
        "content": "Ceci est un commentaire de cours",
        "course": {
            "dateEnd": "2019-06-13T23:07:18.969Z",
            "dateTime": "2019-06-13T23:07:18.969Z",
            "duration": "2019-06-13T23:07:18.969Z",
            "id": 0,
            "material": {
                "id": 0,
                "name": "string",
                "users": [
                    null
                ]
            },
            "teacher": {
                "avatar": "string",
                "color": "string",
                "courses": [
                    null
                ],
                "email": "string",
                "enabled": true,
                "firstName": "string",
                "id": 0,
                "isep_id": 0,
                "lastName": "string",
                "materials": [
                    {
                        "id": 0,
                        "name": "string",
                        "users": [
                            null
                        ]
                    }
                ],
                "password": "string",
                "status": "string",
                "teacher_courses": [
                    null
                ],
                "username": "string"
            },
            "users": [
                {
                    "avatar": "string",
                    "color": "string",
                    "courses": [
                        null
                    ],
                    "email": "string",
                    "enabled": true,
                    "firstName": "string",
                    "id": 0,
                    "isep_id": 0,
                    "lastName": "string",
                    "materials": [
                        {
                            "id": 0,
                            "name": "string",
                            "users": [
                                null
                            ]
                        }
                    ],
                    "password": "string",
                    "status": "string",
                    "teacher_courses": [
                        null
                    ],
                    "username": "string"
                }
            ]
        },
        "dateTime": "2019-06-13T23:07:18.969Z",
        "id": 2,
        "number_dislike": 0,
        "number_like": 0,
        "parent_id": 1,
        "user": {
            "avatar": "string",
            "color": "string",
            "courses": [
                null
            ],
            "email": "string",
            "enabled": true,
            "firstName": "string",
            "id": 0,
            "isep_id": 0,
            "lastName": "string",
            "materials": [
                {
                    "id": 0,
                    "name": "string",
                    "users": [
                        null
                    ]
                }
            ],
            "password": "string",
            "status": "string",
            "teacher_courses": [
                null
            ],
            "username": "string"
        }
    }
];

const comment_panel = (props) =>
    <div className={"comment"}>
        <div className={"commentHeader"}>
            <img className={"profilPicture"} src={props.data.user.avatar}></img>
            <Typography>
                {props.data.user.firstname} {props.data.user.lastname}
            </Typography>
            {props.data.dateTime}
        </div>
        <div className={"commentContent"}>
            <Typography>
                {props.data.content}
            </Typography>
        </div>
    </div>


class Course extends Component {


    render(){

        const{classes} = this.props;

        return(
            <Layout className={classes.main}>
                <Button className={classes.button} size="small" color="primary">
                    Commenter
                </Button>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Paper className={classes.paper}>
                        <Typography variant="h2">
                            Cours de Technologie Web
                        </Typography>
                    </Paper>
                    {comments.map((comment)=>{

                        return (
                        <Paper className={classes.paper}>

                        {comment.response.map( (response) =>{return (
                            <div className={classes.response}>
                                <div className={classes.commentHeader}>
                                    <img className={classes.profilPicture} src={comment.image}></img>
                                    <Typography>
                                        {response.name}
                                    </Typography>
                                    {response.date}
                                </div>
                                <div className={classes.commentContent}>
                                    <Typography>
                                        {response.content}
                                    </Typography>
                                </div>
                            </div>
                        )})}
                        </Paper>

                    )})}
                </Grid>
            </Layout>
        )
    }
}


export default withStyles(styles)(Course);