import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import state, {addNewMessage, addNewPost, handleNewPostChange, subscribe, updateMessage} from './redux/state';

const render = () => {
    ReactDOM.render(<App addNewMessage={addNewMessage} updateMessage={updateMessage} handleNewPostChange={handleNewPostChange} state={state} addNewPost={addNewPost} />, document.getElementById('root'));
}

render()

subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
