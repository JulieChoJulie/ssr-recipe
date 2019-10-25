import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';

const app = express();

// handler function to take care of SSR
cost serverRender = (req, res, next) => {
    // at 404 error, SSR

    const context = {};
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const root = ReactDOMServer.renderToString(jsx);
    res.send(root); // send the response to a client.
};

const serve = express.static(path.resolve('./build'), {
    index: false // not shoing index.html in "/" path.
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});