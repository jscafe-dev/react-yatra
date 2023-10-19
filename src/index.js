import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import "./styles.css";
import { Provider } from 'react-redux'
import {store} from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
<BrowserRouter>
    <App/>
</BrowserRouter>
</Provider>
)