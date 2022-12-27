import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from './App';
import { GlobalStyles, theme } from './styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
