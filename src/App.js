import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import Header from './components/header/Header';
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/pages/profile/Profile";
import News from "./components/pages/news/News";
import DialogsContainer from "./components/pages/dialogs/DialogsContainer";
import MyTodos from "./components/pages/my-todos/MyTodos";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <main className="content">
                    <Route exact path="/" render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}
                    />
                    <Route path="/dialogs" render={() => <DialogsContainer
                        dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}
                    />
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/mytodos" render={() => <MyTodos
                        myTodos={props.state.myTodos}
                        dispatch={props.dispatch}
                    />}
                    />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
