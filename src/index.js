import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './redux/state';

const render = (state) => {
    ReactDOM.render(<App state={state}
                         dispatch={store.dispatch.bind(store)}
    />, document.getElementById('root'));
};

render(store.getState());

store.subscriber(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
