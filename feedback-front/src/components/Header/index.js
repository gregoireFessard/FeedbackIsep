import React from 'react';

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



function menu(){
	return (
		<Grid container direction="column" alignItems="stretch" style={{widht: '100%'}}>

			<div style={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px'}}>
				<span>Antoine Canard</span>
			</div>

			<Tabs
			  variant="fullWidth"
			  indicatorColor="secondary"
			  textColor="secondary"
			>
			  <Tab label="Home" />
			  <Tab label="Mes messages" />
			  <Tab label="Enseignants" />
			  <Tab label="Etudiants" />
			</Tabs>
		</Grid>
	);
}

export default menu;
