import { createRoot } from 'react-dom';
import App from './components/App';
import { ThemeProvider, createTheme } from '@mui/material/styles';


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);