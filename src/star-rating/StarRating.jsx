import React from 'react'
import {FaStar} from 'react-icons/fa';
import { useState } from 'react';
import './StarRating.css'

function StarRating({noOfStars=5}){
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex)
  }
  function handleMouseMove(getCurrentIndex){
    setHover(getCurrentIndex)
  }
  function handleMouseLeave(){
    setHover(rating)
  }
  return (
    <div className="Container">
      {
        [...Array(noOfStars)].map((_,index) =>{
          index += 1
          return<FaStar
            key={index}
            className={index<=(hover||rating)?'active':'inactive'}
            onClick={() =>handleClick(index)}
            onMouseMove={() =>handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        })
      }
    </div>
  );
}
export default StarRating
