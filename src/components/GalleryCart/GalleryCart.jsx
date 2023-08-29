import React from 'react'

const GalleryCart = (props) => {
  return (
    <div>
      <div>
        <img src={props.image}/>
        <div>{props.transport}</div>
        <p>{props.city}, {props.month} — {props.price}</p>
      </div>
    </div>
  )
}

export default GalleryCart