import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo1.png'

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">

                <div className="footer__logo"><img src={Logo} alt="" /> Harvard International School</div>
                <div className="footer__nav">
                    <ul>
                        <li>О нас</li>
                        <li>Детский сад</li>
                        <li>Поступление</li>
                        <li>Школьная жизнь</li>
                        <li>Новости</li>
                        <li>Электронный дневник</li>
                        <li>Аккредитация</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer