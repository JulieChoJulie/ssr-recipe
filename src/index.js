import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
    rootReducer,
    window.__PRELOADED_STATE__, // use this state as initialState
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>,
        document.getElementById('root'));

serviceWorker.unregister();
