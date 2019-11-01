import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer, { rootSaga } from './modules';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    window.__PRELOADED_STATE__, // use this state as initialState
    applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>,
        document.getElementById('root'));

serviceWorker.unregister();
