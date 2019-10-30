!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=15)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){e.exports=n(11)},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("regenerator-runtime")},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(2),u=n.n(r);function o(e,t,n,r,u,o,a){try{var c=e[o](a),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,u)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var a=e.apply(t,n);function c(e){o(a,r,u,c,i,"next",e)}function i(e){o(a,r,u,c,i,"throw",e)}c(void 0)}))}}var c=n(0),i=n.n(c),l=n(5),s=n.n(l),f=n(6),p=n.n(f),d=n(1),m=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/red"},"Red")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/blue"},"Blue")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/users"},"Users")))},v=(n(12),function(){return i.a.createElement("div",{className:"Red"},"Red")}),b=function(){return i.a.createElement(v,null)},h=(n(13),function(){return i.a.createElement("div",{className:"Blue"},"Blue")}),y=function(){return i.a.createElement(h,null)},E=function(e){var t=e.users;return t?i.a.createElement("div",null,i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))):null},g=n(4);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=n(8),j=n.n(x);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w="users/GET_USERS_PENDING",k="users/GET_USERS_SUCCESS",_="users/GET_USERS_FAILURE",R=function(e){return{type:_,error:!0,payload:e}},q={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return P({},e,{loading:P({},e.loading,{users:!0})});case k:return P({},e,{users:t.payload.data,loading:P({},e.loading,{users:!1})});case _:return P({},e,{error:P({},e.error,{users:t.payload}),loading:P({},e.loading,{users:!1})});default:return e}},D=Object(c.createContext)(null),U=D,L=function(e){var t=e.resolve,n=Object(c.useContext)(D);return n?n.done?null:(n.promises.push(Promise.resolve(t())),null):null},M=Object(g.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=a(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:w}),e.next=4,j.a.get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,t({type:k,payload:n}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),t(R(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.users,n=e.getUsers;return Object(c.useEffect)((function(){t||n()}),[t,n]),i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{users:t}),i.a.createElement(L,{resolve:n}))})),N=function(){return i.a.createElement(M,null)};n(14);var C=function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement("hr",null),i.a.createElement(d.Route,{path:"/red",component:b}),i.a.createElement(d.Route,{path:"/blue",component:y}),i.a.createElement(d.Route,{path:"/users",component:N}))},A=n(7),G=n.n(A),B=n(9),F=n.n(B),J=n(3),I=n(10),Y=n.n(I),$=Object(J.combineReducers)({users:T}),z=JSON.parse(F.a.readFileSync(G.a.resolve("./build/asset-manifest.json"),"utf-8")),H=Object.keys(z.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(z.files[e],'"><\/script>')}));function K(e,t){return'<!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="/favicon.ico" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale=1,shrink-to-fit=no"\n    />\n    <meta name="theme-color" content="#000000" />\n    <title>React App</title>\n    <link href="'.concat(z.files["main.css"],'" rel="stylesheet" />\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root">\n      ').concat(e,"\n    </div>\n    ").concat(t,'\n    <script src="').concat(z.files["runtime-main.js"],'"><\/script>\n    ').concat(H,'\n    <script src="').concat(z.files["main.js"],'"><\/script>\n  </body>\n  </html>\n    ')}var Q=p()(),V=function(){var e=a(u.a.mark((function e(t,n,r){var o,a,c,l,f,p,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},a=Object(J.createStore)($,Object(J.applyMiddleware)(Y.a)),c={done:!1,promises:[]},l=i.a.createElement(U.Provider,{value:c},i.a.createElement(g.Provider,{store:a},i.a.createElement(d.StaticRouter,{location:t.url,context:o},i.a.createElement(C,null)))),s.a.renderToStaticMarkup(l),e.prev=5,e.next=8,Promise.all(c.promises);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",n.status(500));case 13:c.done=!0,f=s.a.renderToString(l),p=JSON.stringify(a.getState()).replace(/</g,"\\u003c"),m="<script>__PRELOADED_STATE__ = ".concat(p,"<\/script>"),n.send(K(f,m));case 18:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),W=p.a.static(G.a.resolve("./build"),{index:!1});Q.use(W),Q.use(V),Q.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);