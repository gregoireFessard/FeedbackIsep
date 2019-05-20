import React, { Component} from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Logo from '../../assets/IsepLogo.svg';

const styles = theme =>({



})


export default class Layout extends Component {

    render(){

        const {children} = this.props;
        return(
            <div >
                <div>
                    <img src={Logo}></img>
                </div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Sidebar/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}