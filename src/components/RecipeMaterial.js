import React from 'react'
import "./RecipeMaterial.css"

const RecipeMaterial = ({name}) => {
  return (
    <>
     <button className='itemcard'>
        {name}
      </button>
    </>
  )
}

export default RecipeMaterial