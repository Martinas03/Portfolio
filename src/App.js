import React from "react";
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
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
            {/*<Footer/>*/}
            {/*<Header/>*/}
        </div>
    );
}

export default App;
