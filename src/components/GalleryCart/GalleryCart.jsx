import React from 'react'
import './GalleryCart.css'

const GalleryCart = (props) => {
  return (
    <div>
      <div>
        <p>{props.transport}</p>
        <p>{props.peopleNumber}</p>
        <img src={props.peopleImg} alt="People-img" />
      </div>
      <div>
        <p>{props.city}, {props.month} - {props.price}</p>
      </div>
    </div>
  )
}

export default GalleryCart