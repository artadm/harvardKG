import React from 'react'
import './Program.css'
import Pupils from '../../assets/programm/pupils.svg'
import Lang from '../../assets/programm/lang.svg'
import Program from '../../assets/programm/program.png'
import Soft from '../../assets/programm/softskills.png'
import Talking from '../../assets/programm/nationality.svg'
import Robots from '../../assets/programm/robotechs.png'

const Programm = () => {
    return (
        <section className='programm'>
            <h2>Школьная программа</h2>
            <div className="container programm__container">
                <ul>
                    <li><img src={Pupils} alt="" />Классическая программа обучения</li>
                    <li><img src={Lang} alt="" />Углубленное изучение английского языка</li>
                    <li><img src={Program} alt="" />Программирование Java Script, Python</li>
                    <li><img src={Soft} alt="" />Развитие soft skills</li>
                    <li><img src={Talking} alt="" />Talking Club</li>
                    <li><img src={Robots} alt="" />Робототехника</li>
                </ul>
            </div>
        </section>
    )
}

export default Programm