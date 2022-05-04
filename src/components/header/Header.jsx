import React from 'react'
import './Header.css'
import Logo from '../../assets/logo1.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const nav = useRef()

    const onKeydown = ({ key }) => {
        switch (key) {
            case 'Escape':
                setToggle(false)
                break
        }
    }

    useEffect(() => {

    });
    const isSticky = (e) => {
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop >= header.offsetHeight ? header.classList.add('active') : header.classList.remove('active');
    };


    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        document.addEventListener('keydown', onKeydown)
        return () => {
            return () => {
                document.removeEventListener('keydown', onKeydown)
                window.removeEventListener('scroll', isSticky);
            }
        };
    })



    return (
        <header>
            <div className="container header__container">
                <div className="header__logo"><img src={Logo} alt="" /> Harvard International School</div>
                <div ref={nav} className={toggle ? 'header__nav active' : 'header__nav'}>
                    <nav>
                        <h3 className='header__nav-title'>Menu</h3>
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
                        <button onClick={() => setToggle(false)} className="header__toggle header__toggle-nav active">
                            <span>M</span>
                        </button>
                    </nav>
                    <select onChange={e => e.target.value} className="header__language">
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                        <option value="kg">KG</option>
                    </select>
                    <span className='header__line'></span>
                    <button onClick={() => setToggle(!toggle)} className={toggle ? "header__toggle active" : 'header__toggle'}>
                        <span>M</span>
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Header