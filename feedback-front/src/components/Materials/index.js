import React from 'react';
import axios from "axios";
import Layout from "../../containers/Layout";
import {Button, Paper} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";


const styles = theme =>({


    paper : {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',

        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: '30%',
        paddingLeft :'5%',
        paddingRight:'5%'
    },


})

class Materials extends React.Component{

    state = {
        dataUserCourses : [],
        dataMaterials : []
    };
    async findDataUserCourse(){
        var dataUserCourse = []
        await axios.get('/api/courses?id='+sessionStorage.getItem("UserAutotentificateId"))
            .then(data => dataUserCourse.push(data.data))
        this.setState({dataUserCourses : dataUserCourse[0]})
    }

    async findCreateData(){
        await this.findDataUserCourse()
        var infoMaterial = []




        //Créer un tableau matière des cours de l'utilisateur ses trois prochains cours
        this.state.dataUserCourses.map((infoUserCoursesGlobal =>{
            var check = 0;
            infoMaterial.map((infoMaterial) =>{
                if(infoMaterial.nameMaterial == infoUserCoursesGlobal.material.name){
                    check = 1;
                }
            })
            if(check == 0){
                var compteur = 0;
                const dataCoursePushed =[]

                const dataPushed = {
                    nameMaterial : infoUserCoursesGlobal.material.name,
                    idMaterial : infoUserCoursesGlobal.material.id
                }
                infoMaterial.push(dataPushed)
            }
        }))
        this.setState({dataMaterials : infoMaterial})
        console.log(this.state.dataMaterials)
    }
    componentDidMount() {
        this.findCreateData()
    }

    render(){
        const{classes} = this.props;
        return(
            <Layout className={"main"}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Paper className={classes.paper} >
                        {
                            this.state.dataMaterials.map((info)=>{
                                return(
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={"button"}
                                        href={'../material/'+info.idMaterial}
                                    >
                                        {info.nameMaterial}
                                    </Button>
                                )
                            })
                        }
                     </Paper>
                </Grid>
            </Layout>
        )
    }
}

export default withStyles(styles)(Materials);