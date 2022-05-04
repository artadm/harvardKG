import React from 'react'
import './Courses.css'
import { useState } from 'react'
import Atrium from '../../assets/mainpage/courses/atrium.jpg'
import Art from '../../assets/mainpage/courses/art_thumb.png'
import School from '../../assets/mainpage/courses/school_building.jpg'
import Kitchen from '../../assets/mainpage/courses/stolovaya.jpg'
import Cofeinia from '../../assets/mainpage/courses/cofeinia.jpg'
import Classes from '../../assets/mainpage/courses/classes_thumb.png'
import Cinema from '../../assets/mainpage/courses/kinoteatr_thumb.png'
import Chess from '../../assets/mainpage/courses/chess_thumb.png'
import Robots from '../../assets/mainpage/courses/robottechs.jpg'
import Pool from '../../assets/mainpage/courses/pool.jpg'
import Cort from '../../assets/mainpage/courses/court.jpg'
import Batsketball from '../../assets/mainpage/courses/busket.jpg'
import Football from '../../assets/mainpage/courses/football_thumb.png'
import Gymnastics from '../../assets/mainpage/courses/dance_thumb.png'
import Fight from '../../assets/mainpage/courses/fight.jpg'
import Modal from 'react-modal'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Courses = () => {

    const [images1, setImages1] = useState([
        { id: `img${Date.now()}`, src: School, content: 'Здание школы' },
        { id: `img${Date.now()}`, src: Atrium, content: 'Атриумы' },
        { id: `img${Date.now()}`, src: Kitchen, content: 'Столовая' },
        { id: `img${Date.now()}`, src: Cofeinia, content: 'Кофейня' },
        { id: `img${Date.now()}`, src: Classes, content: 'Классы' },
        { id: `img${Date.now()}`, src: Cinema, content: 'Кинотеатр' },
        { id: `img${Date.now()}`, src: Art, content: 'ИЗО' },
        { id: `img${Date.now()}`, src: Chess, content: 'Шахматы' },
        { id: `img${Date.now()}`, src: Robots, content: 'Робототехника' },
    ])

    const [images2, setImages2] = useState([
        { id: `2img${Date.now()}`, src: Pool, content: 'Плавание' },
        { id: `2img${Date.now()}`, src: Cort, content: 'Теннис' },
        { id: `2img${Date.now()}`, src: Batsketball, content: 'Баскетбол' },
        { id: `2img${Date.now()}`, src: Football, content: 'Футбол' },
        { id: `2img${Date.now()}`, src: Gymnastics, content: 'Гимнастика' },
        { id: `22img${Date.now()}`, src: Fight, content: 'Самооборона' },
    ])

    return (
        <section className='courses'>
            <div className="container courses__container">
                <AnimationOnScroll animateIn="animate__slideInLeft" animateOut="animate__slideOutLeft">
                    <div className="courses__idioms">
                        <article>ШКОЛА – место , где ваш ребенок проводит большую часть своего детства</article>
                        <article>Мы делам все возможное, чтобы ему было здесь комфортно и интересно</article>
                    </div>
                </AnimationOnScroll>



                <div className="courses__gallery  courses__gallery-first">
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                        <ul>
                            {images1.map((el) =>
                                <li key={el.src}>
                                    <span>{el.content}</span><img src={el.src} alt="" />
                                </li>
                            )}
                        </ul>
                    </AnimationOnScroll>
                </div>



                <div className="courses__gallery  courses__gallery-second">
                    <AnimationOnScroll animateIn="animate__slideInRight" animateOut="animate__slideOutRight">
                        <h2>Спортивное развитие вашего ребенка в Harvard Olympic Center
                        </h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                        <ul>
                            {images2.map((el) =>
                                <li key={el.src}>
                                    <span>{el.content}</span><img src={el.src} alt="" />
                                </li>
                            )}
                        </ul>
                    </AnimationOnScroll>
                </div>

            </div>
        </section>
    )
}

export default Courses