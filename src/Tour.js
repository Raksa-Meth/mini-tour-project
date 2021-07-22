import React, { useState } from 'react';

const Tour = (props) => {
  const {id, image, info, price, name, removeTour} = props

  const [isReadMore, setReadMore] = useState(false)

  const toggleReadMore = () => {
      setReadMore(!isReadMore)
  }

  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{isReadMore?info:info.substring(0,200)+"..."}</p>
      <button onClick={toggleReadMore}> {isReadMore? "show less":"read more"} </button>
      <button className="delete-btn" onClick={()=>{removeTour(id)}}>not interested</button>
    </footer>
  </article>
};

export default Tour;
