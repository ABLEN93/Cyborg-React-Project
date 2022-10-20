import React from 'react'
import './gamingcard.css';

function Gamingcard(props) {

  return (
    <>
      <div className="gamingcard-items">
        <ul className='gamingcard-items-wrapper'>
          <li><img src={props.img} alt="" /></li>
          <li><h6>{props.title}<span>{props.category}</span></h6></li>
          <li><h6>Date Added<span>{props.category}</span></h6></li>
          <li><h6>{props.title}<span>{props.category}</span></h6></li>
          <li><h6>{props.title}<span>{props.category}</span></h6></li>
          <div className='mainButton'><a href='#'>download</a></div>
        </ul>
      </div>
    </>
  )
}

export default Gamingcard