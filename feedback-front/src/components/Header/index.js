import React from 'react';

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './index.css';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';




class Header extends React.Component{
    render() {
        return (
            <Grid container direction="column" alignItems="stretch" style={{widht: '100%'}}>

                <div style={{minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px'}}>
                    <span>Antoine Canard</span>
                </div>

                <Tabs
                    variant="fullWidth"
                    indicatorColor="primary"


                >
                    <Tab className={'headerButtonHome'} value={0} label="Home" href={"./Home"}/>
                    <Tab className={'headerButtonMesMessages'} value={1} label="Mes messages" href={"./message"}/>
                    <Tab className={'headerButtonEnseignants'} value={2} label="Enseignants"  href={"./enseignant"}/>
                    <Tab className={'headerButtonEtudiants'} value={3} label="Etudiants" href={"./etudiant"}/>
                </Tabs>
            </Grid>
        );
    }

}

export default Header;
