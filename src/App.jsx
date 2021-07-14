import React from 'react';
import {IconContext} from 'react-icons';
import {RiLockPasswordFill} from 'react-icons/ri';

import { BrowserRouter as Router,
          Switch,
          Route,
          Link as Anchor
        } from 'react-router-dom'; 

import AppFrame from './pages/AppFrame';
import IntroPage from './pages/IntroPage';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './App.css';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <IntroPage>
              <Grid container
                justifyContent="center"
                direction='column'
                className='full'>
                <div className="highlight">
                  <Grid container
                        justifyContent="center"
                        alignItems="center">
                          <Grid item>
                              <IconContext.Provider value={{size:'3em'}}>
                                <RiLockPasswordFill />
                              </IconContext.Provider>
                          </Grid>
                          <Grid container item
                                direction='column'
                                justifyContent='center'
                                alignItems='center'>
                                    <div className="wordart tilt">
                                        <span className="text">Super password generator</span>
                                    </div>
                          </Grid>
                          <Grid item>
                              <Link to="/generate" component={Anchor} color="inherit" aria-label='menu'>Generar</Link>
                          </Grid>
                  </Grid>
                </div>
              </Grid>
              </IntroPage>
            </Route>
            <Route path="/generate">
              <AppFrame />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  };
}

export default App;
