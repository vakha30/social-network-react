import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import Header from './components/header/Header';
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/pages/profile/Profile";
import News from "./components/pages/news/News";
import DialogsContainer from "./components/pages/dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <main className="content">
                    <Route exact path="/" render={() => <Profile
                        handleNewPostChange={props.handleNewPostChange}
                        addNewPost={props.addNewPost}
                        profilePage={props.state.profilePage}
                    />}
                    />
                    <Route path="/dialogs" render={() => <DialogsContainer
                        dialogsPage={props.state.dialogsPage}
                        updateMessage={props.updateMessage}
                        addNewMessage={props.addNewMessage}
                    />}
                    />
                    <Route path="/news" render={() => <News/>}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
