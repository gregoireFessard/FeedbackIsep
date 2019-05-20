import React from 'react';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


function login() {
  return (
	<Paper>
		<form noValidate autoComplete="off">
			<TextField
				required
				id="name"
				label="Name"
			/>
			<TextField
				required
				id="password"
				label="Password"
				type="password"
			/>
		</form>
	
	</Paper>
  );
  
}

export default login;
