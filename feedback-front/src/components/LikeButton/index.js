import React, { Component} from 'react'
import Like from "../../assets/like.png";
import axios from "axios";
import {Button} from "@material-ui/core";


class LikeButton extends React.Component{
   addLike(){
        var nb_like =0
        axios.post('/api/courses/'+this.state.IDCourse+"/comments/"+this.state.IDComment+"/like" )
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            })
       this.setState({

       })

    }
    constructor(props) {
        super(props);
        this.state = {
            nb_like : props.nb_like,
            IDCourse : props.IDCourse,
            IDComment : props.IDComment
        }

    }
    render() {
        return(
            <div>
                <button  name="like" onClick={this.addLike()}><img src={Like} width={'30px'} style={{'margin-right' : '10%'}}/></button>{this.state.nb_like}
            </div>
        )
    }


}

export default LikeButton