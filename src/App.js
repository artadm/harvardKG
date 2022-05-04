import React, {createContext} from "react";
import Intro from "./components/Intro/Intro";
import Header from './components/header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Programm from "./components/Programm/Programm";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import News from "./components/News/News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contacts from "./components/Contacts/Contacts";
import Footer from './components/Footer/Footer'
import 'animate.css';


const App = () => {

  return (
    <>

      <Header />

      <Intro />
      <Programm/>
      <About/>
      <Courses/>
      <News/>
      <Contacts/>
      <Footer/>
      
    </>
  );
};

export default App;
