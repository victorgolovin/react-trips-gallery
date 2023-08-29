import React from 'react'
import Heading from '../Heading/Heading'
import GalleryCart from '../GalleryCart/GalleryCart'
import travelcard1img from '../../assets/travelcard1img.jpg'
import imgPeople from '../../assets/imgPeople.png'

const gallery = [
  {
    image: travelcard1img,
    transport: 'на автобусе',
    people: 10,
    imgPeople: imgPeople,
    city: 'Тбилиси',
    month: 'апрель',
    price: 83000
  }
]

const GallerySection = () => {
  return (
    <div>
      <Heading 
      level='h1' text='Галерея путешествий'/>

    {gallery.map((card) => (
      <GalleryCart 
        image={card.image}
        transport={card.transport}
        people={card.people}
        imgPeople={card.imgPeople}
        city={card.city}
        month={card.month}
        price={card.price}
      />
    ))}
      
    </div>
  )
}

export default GallerySection