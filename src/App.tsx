import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/MyPosts/./Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


const App = (props: any) => {

    return (
        <div className="app-wrapper">
            <Header message="Hi brooo"/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Dialogs/>*/}
                <Profile message="Hi brooo"/>
            </div>


        </div>
    );
}


export default App;
