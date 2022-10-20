import React from 'react'
import './card.css';
import {FaStar} from "react-icons/fa";
import {FaDownload} from "react-icons/fa";


function Card(props) {
    return (
        <div className='wrapper'>
            <div className="text">
              
                <div className="mostpopular-items">
                    <div className="mostpopular-item">
                        <div className="card-wrapper">
                            <img className="mostpopular-img" src={props.img} alt="" />
                            <div className="mostpopular-content">
                                <h4 className="mostpopular-item-title">
                                    {props.title}
                                    <br />
                                    <span>SandBox</span>
                                </h4>
                                <ul>
                                    <li> <FaStar className='star'/> <span>{props.category} </span></li>
                                    <li><FaDownload className='download'/>{props.download}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card