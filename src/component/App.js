import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from '../component/ui/theme'
import ContactUs from './ContactUs';
import Success from './Success'
import CallDetails from './CallDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Switch>
                <Route
                exact
                path='/'
                render={() => (
                  <ContactUs/>
                )}
              />
               <Route
                exact
                path='/success'
                render={() => (
                  <Success/>
                )}
              />

              <Route
                exact
                path='/callDetails'
                render={() => (
                  <CallDetails/>
                  )}
              />  

            </Switch>
         </BrowserRouter>
        
    </ThemeProvider>
  );
}

export default App;
