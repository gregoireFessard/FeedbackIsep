import React from 'react';
import './App.css';
import logo from './IsepLogo.svg';
import Header from './header.js';
import Sidebar from './sidebar.js';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
/*     <div>
		<Grid container direction="column" alignItems="stretch">
			<Grid item xs={3}>
				<Grid container direction="row" alignItems="stretch">
					<Grid item xs={3}>
						<Paper className="logo">
							<img src={logo} className="IsepLogo" alt="logo" />
						</Paper>
					</Grid>
					<Grid item xs={9}>
						<Paper className="Header">
							<Header />
						</Paper>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={9}>
				<Grid container direction="row" alignItems="stretch">
					<Grid item xs={3}>
						<Paper className="Sidebar">
							<Sidebar />
						</Paper>
					</Grid>
					<Grid item xs={9}>
						<Paper className="Content">
						Hey
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
    </div> */
	<div className="Main"> 
		<div className="Logo">
		</div>
		<div className="Header">
			<Header />
		</div>
		<div className="Sidebar">
			<Sidebar />
		</div>
		<div className="Content">
			a
		</div>
    </div>
  );
}

export default App;
