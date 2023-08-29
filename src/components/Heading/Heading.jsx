import React from 'react'

const Heading = (props) => {
    if (props.level === 'h1') {
        return (<h1 className='card-title'>{props.text}</h1>)
      };
}

export default Heading