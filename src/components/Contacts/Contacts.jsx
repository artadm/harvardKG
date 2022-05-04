import React from 'react'
import { useState } from 'react'
import './Contacts.css'

const Contacts = () => {
    const [user, setUser] = useState({})
    return (
        <section className='contacts'>
            <div className="container contacts__container">
                <div className="contacts__connect">
                    <h1>Контакты</h1>

                    <ul>
                        <li className="contacts__connect-place">
                            <span>Местоположение</span>
                            <a href='https://goo.gl/maps/D475n3cTpGS45p6z6'>Г. Бишкек, ул. Алыкулова 3А</a>
                        </li>

                        <li className="contacts__connect-phone">
                            <span>Телефон</span>
                            <a href='tel:+996 706 57 77 77'>+996 706 57 77 77</a>
                        </li>

                        <li className="contacts__connect-mail">
                            <span>E-mail</span>
                            <a href='mailto:international_school@mail.ru'>international_school@mail.ru</a>
                        </li>
                    </ul>
                </div>
                <form action='' className="contacts__form">
                    <h2>Хочу в “Harvard International School”</h2>
                    <div className='contacts__form-subtitle'>Зарегистрируйтесь на сайте и знакомьтесь со школой, чтобы принять решение о поступлении.</div>

                    <div className="contacts__input">
                        <input type="text" required placeholder='Имя родителя' />

                    </div>

                    <div className="contacts__input">
                        <input type="tel" required placeholder='Номер телефона' />

                    </div>

                    <div className="contacts__input">
                        <input type="text" required placeholder='Имя школьника' />

                    </div>

                    <div className="contacts__input">
                        <input type='number' required placeholder='Возраст ребенка' />

                    </div>

                    <button className='contacts__form-button' type='submit'>Отправить</button>
                </form>
            </div>
            <div className="contacts__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5848.173888669349!2d74.509876!3d42.871009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c40a9637a19c3e5!2zNDLCsDUyJzE1LjYiTiA3NMKwMzAnMzUuNiJF!5e0!3m2!1sru!2sus!4v1651508187687!5m2!1sru!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Contacts