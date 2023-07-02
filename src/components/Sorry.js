import React from 'react'
import "./Sorry.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import nomovie from "./icons/nomovie.svg"

const Sorry = () => {
  return (
    <div className='sorry-container'>
        <div className='not-found-div'>< FontAwesomeIcon icon={faQuestion} className='question-mark' /></div>
        <div className="message-container">
        <img className='nomovie' src={nomovie} alt="" />
        <div className='message'>
          <div className='line-div'></div>
        <h2>Sorry we couldn't find any movies with that title! :( </h2>  
        </div>
        

        </div>
    </div>
  )
}

export default Sorry