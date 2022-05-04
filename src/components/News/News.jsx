import React, { useState } from 'react'
import './News.css'
import Slider from "react-slick";
import NewsIMG1 from '../../assets/mainpage/news/news1.jpg'
import NewsItem from './NewsItem';

const News = () => {
    const newslist = [
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/1' },
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/2' },
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/3' },
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/4' },
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/5' },
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/6' },
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/7' },
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/8' },
        { id: Date.now(), src: NewsIMG1, title: 'Благотворительная Акция', date: '2021-04-27', href: 'http://www.harvard.kg/9' },
    ]

    var settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    };
    return (
        <section className='news'>
            <div className="container news__container">
                <h1>
                    Новости и события
                </h1>

                <Slider {...settings}>
                    {newslist.map(el =>
                        <NewsItem key={el.href} props={el} />)}
                </Slider>
            </div>

            <a className='news__add' href="http://www.harvard.kg/">Все новости</a>
        </section>
    )
}

export default News