import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#42a5f5',
      main: '#1976d2',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F8AE72',
      main: '#F59242',
      dark: '#F27612',
    },
    contrastThreshold: 4.5,
  },

  components: {
    MuiLink: {
      defaultProps: {
        color: '#fff',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="ToDo">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
