import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


function side(){
	return (
	    <List component="nav">
			<ListItem button>
				<ListItemText primary="Techno web" />
			</ListItem>
			<Divider />
			<ListItem button divider>
				<ListItemText primary="Genie logiciel" />
			</ListItem>
			<ListItem button>
				<ListItemText primary="Analyse de donnee" />
			</ListItem>
		</List>
	);
}
export default side;
