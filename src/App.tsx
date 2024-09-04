import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/MyPosts/./Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props: any) => {

    return (

            <div className="app-wrapper">
                <Header message="Hi brooo"/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <BrowserRouter>
                    <Route path="/dialogs" component={  Dialogs}/>
                    <Route path='/profile' component={  Profile}/>
                    </BrowserRouter>
                </div>
            </div>

    );
}


export default App;
