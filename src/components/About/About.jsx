import React from 'react'
import './About.css'
import Mission from '../../assets/mainpage/about__school/about.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const About = () => {
    return (
        <section className='about'>

            <article className="about__school about__school-about">
                <AnimationOnScroll animateIn="animate__slideInLeft" animateOut="animate__slideOutLeft">
                    <h1>Harvard International School</h1>
                    <div className='about__text'>Это международная школа, включающая в себя полный образовательный цикл для детей от 3 до 18 лет. Для вашего ребенка предлагается насыщенная и разнообразная программа, что позволит ему максимально полно раскрыть свой интеллектуальный и личностный потенциал. Под руководством опытных и квалифицированных учителей осуществляется целостная концепция развития личности вашего ребенка. Результатом комплексного подхода является хороший академический прогресс и становление гармоничной, всесторонне развитой, уверенной в себе личности.
                    </div>
                </AnimationOnScroll>
            </article>


            <AnimationOnScroll animateIn="animate__slideInRight" animateOut="animate__slideOutRiht">
                <article className="about__school about__school-mission">
                    <h1>Миссия школы</h1>
                    <div className='about__text'>Дать каждому ребенку возможность стать счастливым, помочь понять себя, свои потребности, развить те навыки, ценности и личностные качества, которые позволят им быть успешными. Ведь счастливый человек, который любит жизнь, понимает и знает, чем он хочет заниматься – залог успешной семьи, общества, государства и мира в целом.
                    </div>
                    <img src={Mission} alt="" />
                </article>
            </AnimationOnScroll>

            <article className="about__school about__school-atmosfere">
                <AnimationOnScroll animateIn="animate__slideInLeft" animateOut="animate__slideOutLeft">
                    <h1>Атмосфера школы</h1>
                    <div className='about__text'>На жизненную позицию, правильное формирование целей и мировоззрение ребенка сильно влияет правильная атмосфера школы, её современность, огромное пространство, функциональность и инфраструктура. Именно от того, в какой атмосфере будет находиться ребенок в течении 270 дней в году зависит гармоничное развитие успешной личности ребенка.
                    </div>
                </AnimationOnScroll>
            </article>

        </section >
    )
}

export default About