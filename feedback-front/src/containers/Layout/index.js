import React, { Component} from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

import withStyles from "@material-ui/core/styles/withStyles";
import Image from "../../assets/IsepPicture.jpg";

const styles = theme =>({
    main : {
        display: 'flex',
        backgroundImage: `url(${Image})`,

        backgroundSize: '100%',
        height : '100vh',

    },

    hc : {
        width: '100%',
        display: 'flex',
        flexFlow: 'column',

    },

    header: {

    },

    sidebar: {
        opacity : '1'
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
            <div className={classes.main}>
                <div className={classes.sidebar}>
                    <NavBar/>
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