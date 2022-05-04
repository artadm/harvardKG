import React from "react";
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import "./Intro.css";
import Video from '../../assets/school_video1.mov'
import 'animate.css'

const Intro = () => {

  return (
    <section className="intro">
      <video loop={true} autostart="true" autoPlay={true} muted playsInline src={Video} />
      <h1 className="intro__title animate__animated animate__slideInUp">Добро пожаловать в Harvard International School
      </h1>
      <div className="intro__socials animate__animated animate__slideInUp">
        <span>Подписаться</span>
        <a target="_blank" className="intro__socials-icon" href="https://www.instagram.com/harvard_kg/"><BsInstagram /></a>
        <a target="_blank" className="intro__socials-icon" href="https://www.facebook.com/Harvard_school_kg-100112238314979"><FaFacebookF /></a>
      </div>
      <div className=" intro__idiom ">
        <h1>Одни только дети знают, чего ищут
        </h1>
        <h3>Aнтуан Де Сент-Экзюпери</h3>
      </div>
    </section>
  );
};

export default Intro;
