import React from 'react'
import "./ItemCard.css"

const ItemCard = ({name ,onDelete}) => {
  return (
    <>
     <button className='itemcard' onClick={onDelete}>
        {name}
     </button>
    </>
  )
}



export default ItemCard