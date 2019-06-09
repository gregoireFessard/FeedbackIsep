import React, { Component} from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import withStyles from "@material-ui/core/styles/withStyles";
import Image from "../../assets/IsepPicture.jpg";
import './index.css'

const styles = theme =>({






    hc : {
        width: '100%',
        display: 'flex',
        flexFlow: 'column',


    },

    header: {

    },

    sidebar: {

    },

    content: {
        overflowY : 'scroll',
        backgroundRepeat: 'no-repeat',

    }


})


class Layout extends Component {

    render(){

        const {classes, children} = this.props;
        return(
            <div className={'main'}>
                <div className={'sidebar'}>
                    <SideBar/>
                </div>
                <div className={classes.hc}>
                    <div className={classes.header}>
                        <Header/>
                    </div>
                    <div className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Layout)