import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './App';
import store from "./store"
import { StyledEngineProvider } from '@mui/material/styles';
// import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);

