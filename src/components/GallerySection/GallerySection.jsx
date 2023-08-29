import React from 'react'
import Heading from '../Heading/Heading'
import GalleryCart from '../GalleryCart/GalleryCart'

const GallerySection = () => {
  return (
    <div>
      <Heading 
      level='h1' text='Галерея путешествий'/>
      <GalleryCart />
    </div>
  )
}

export default GallerySection