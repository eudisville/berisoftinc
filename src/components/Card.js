import React from "react";
import '../pages/style.css'

const Card = ({ image, title, date }) => {

    image = 'BO1.jpg'
    title = 'Contenu'
    date = 'April 23'
  
    return (
      <div className="card">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h5>{date}</h5>
      </div>
    )
  }

export default Card;