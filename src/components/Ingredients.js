import React, { useEffect, useState } from 'react'
import './Ingredients.css'
import axios from 'axios'
import ItemCard from './ItemCard'


const Ingredients = () => {

  const[ingredients,setIngredients] = useState([])
  
 useEffect(()=>{
    const fetchIngredients = async () =>{
      try {
        const response = await axios.get('/api/Material')
        setIngredients(response.data);
      } catch (error) {
        console.error("Veriler alınamadı",error)
      }
    }
    fetchIngredients();
  })

     const deleteIngredient = async (id) => {
      try {
        await axios.delete(`/api/Material/${id}`); 
        setIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== id));
      } catch (error) {
        console.error("Malzeme silinemedi", error);
      }
 
    }; 



  return (
    <div className="ingredients-container">
    <h2 className='ingredient-label '>Buzdolabı</h2>
    <div className="ingredient-list">
      {ingredients.map((ingredient) => (
        <div key={ingredient.id} className="ingredient">
            <ItemCard name={ingredient.name} onDelete={()=>deleteIngredient(ingredient.id)} />  
        </div>
      ))}
    </div>
  </div>
  )
}


export default Ingredients