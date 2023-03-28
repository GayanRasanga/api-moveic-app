import React from 'react'
import "./Singlecontent.css"
import ReactStars from "../starRate/StarRate"

export default function Singlecontent({key,date,img,title}) {
  return (
    <div className="moviescard">
        <h3>{key}</h3>
        <img className="image" src="#" alt="hhjhj"/>
        <span className="year">{date}</span>
        <b className="title">{title}</b>
        <ReactStars className='ratestar' ></ReactStars>
        <span className="rate">{img}</span>
    </div>
  )
}
