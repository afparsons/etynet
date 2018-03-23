import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import amber from 'material-ui/colors/amber';
import grey from 'material-ui/colors/grey';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const urban_humanity_theme = createMuiTheme({
  palette: {
    primary: {
      ...amber,
      500: '#f7d6b5',
    },
    secondary: {
      ...grey,
      500: '#444b54'
    },
  },
});

ReactDOM.render(<MuiThemeProvider theme={urban_humanity_theme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

//https://material-ui-next.com/customization/themes/
