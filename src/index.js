import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../client/store.js';
import ReactDOM from 'react-dom';
import App from '../client/components/App.jsx';

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('app'));

