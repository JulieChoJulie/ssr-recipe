import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';
import fs from 'fs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
import PreloadContext from './lib/PreloadContext';

// look up the paths in asset-manifest.json
const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), `utf-8`)
);

const chunks = Object.keys(manifest.files)
    .filter(key => /chunk\.js$/.exec(key)) // find a key ending with 'chunk.js'
    .map(key => `<script src="${manifest.files[key]}"></script>`) // switch to script tag
    // .join(''); // then join them


function createPage(root) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
    <link href="${manifest.files['main.css']}" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      ${root}
    </div>
    <script src="${manifest.files['runtime-main.js']}"></script>
    ${chunks}
    <script src="${manifest.files['main.js']}"></script>
  </body>
  </html>
    `;
}


const app = express();

// handler function to take care of SSR
const serverRender = async (req, res, next) => {
    // at 404 error, SSR
    const context = {};
    const store = createStore(rootReducer, applyMiddleware(thunk));

    const preloadContext = {
        done: false,
        promises: [],
    };

    const jsx = (
        <PreloadContext.Provider value={preloadContext}>
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        </PreloadContext.Provider>
    );

    /*
    Create new store every time receiving a request.
    rendering => collecting all promises => waiting till promise => re-rendering with data.
     */

    // rendering with renderToStaticMarkup to build static page
    // purpose: to call the function in preloader
    //          && faster than renderToStrings

    ReactDOMServer.renderToStaticMarkup(jsx);

    try {
        await Promise.all(preloadContext.promises); // wait for all promises
    } catch (e) {
        return res.status(500);
    }
    preloadContext.done = true;

    const root = ReactDOMServer.renderToString(jsx); //rendering
    // change JSON to string and
    res.send(createPage(root)); // send the response to a client.
};

const serve = express.static(path.resolve('./build'), {
    index: false // not showing index.html in "/" path.
});

app.use(serve); // this should come earlier than serverRender
app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});