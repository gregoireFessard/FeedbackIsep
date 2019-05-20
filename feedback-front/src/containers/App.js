import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import LoginPage from '../containers/LoginPage'
import { Route, Switch, Redirect } from 'react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


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
        </Switch>
      </MuiThemeProvider>
    );
  }
}


export default connect(state => ({

}), actions)(App);
