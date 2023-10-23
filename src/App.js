import React from "react";
import './App.scss';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Nav from "./header/nav/Nav";
import Menu from "./menu/Menu";

function App() {
    return (
        <div className="App">
            <Menu/>
            <LeftSideBar/>
            <Nav/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <div>
                <h1>Hello world</h1>
            </div>
        </div>
    );
}

export default App;
