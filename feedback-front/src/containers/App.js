import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import LoginPage from '../containers/LoginPage';
import Home from '../containers/Home';
import Course from '../containers/Course';
import Etudiants from '../containers/Etudiants';
import Message from '../containers/Message';
import Profil from '../containers/Profil';
import { Route, Switch, Redirect } from 'react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Enseignants from "./Enseignants";


const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b1b41'
    },
    secondary: {
      main: '#20e2f1',
      contrastText: 'white',

    },
    danger: {
      main: 'red'
    },

    action: {
      selected: '#ffffff'
    },


  },
  typography: {
    fontFamily: '"Montserrat", sans serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegula: 400,
    fontWeightMedium: 500


  },
  overrides: {
    MuiStepIcon: {
      root: {
        "& $completed": {
          color: "#1b1b41"
        },
        "& $active": {
          color: "#20e2f1"
        },
        "& $disabled":{
          color: "grey"
        }
      },
      active: {},
      completed: {},
    },
  },
});


class App extends Component {
  componentDidMount() {

  }

  render() {


    return (
      <MuiThemeProvider theme={muiTheme}>
        <Switch>
          <Route exact path="/(index.html|)/" component={LoginPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/course" component={Course} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/etudiant" component={Etudiants} />
          <Route exact path="/enseignant" component={Enseignants} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}


export default connect(state => ({

}), actions)(App);
