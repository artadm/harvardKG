import React from 'react'

const NewsItem = ({ props }) => {
    return (
        <div className='news__item'>
            <img src={props.src} alt="" />
            <div className="news__item-content">
                <div className="news__item-date">{props.date}</div>
                <h3>{props.title}</h3>
                <a href={props.href} className="news__item-href">Подробнее</a>
            </div>
        </div>
    )
}

export default NewsItem