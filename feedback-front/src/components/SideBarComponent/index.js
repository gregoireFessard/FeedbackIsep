import React from 'react';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from '@material-ui/core/List';
import ExpandLess from "@material-ui/core/SvgIcon/SvgIcon";
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const styles = theme =>({
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
})

class SideBarComponent extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            open : false,
            data : this.props.data
        }

    }

    handleClick = () => {
            if(this.state.open){
                this.setState({open : false})
            }else{
                this.setState({open : true})
            }
    };
    render() {
        console.log(this.state.data.dataCourse)

        return(
            <div>
                <ListItem button  onClick={this.handleClick} >
                    <ListItemText primary={this.state.data.nameMaterial} />
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {this.state.data.dataCourse.map((info)=>{
                            const date = new Date(Date.parse(info.dateTime)).toDateString()

                            return(
                                <ListItem button >
                                    <ListItemText primary={date} secondary={info.teacher.firstName + " " +info.teacher.lastName}/>
                                </ListItem>
                            )
                        })
                        }
                    </List>
                </Collapse>
            </div>
        )
    }
}

export default SideBarComponent;