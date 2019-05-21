import React, { Component} from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme =>({
    main : {
        display: 'flex',
    }


})


class Layout extends Component {

    render(){

        const {classes, children} = this.props;
        return(
            <div className={classes.main}>
                <div>
                    <NavBar/>
                </div>
                <div style={{width: '100%'}}>
                    <Header/>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Layout)