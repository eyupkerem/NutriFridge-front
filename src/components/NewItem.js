import React, { useEffect, useState } from 'react'
import './NewItem.css'
import axios from 'axios';

const NewItem = () => {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientValue, setIngredientValue] = useState('');
  const [isLoading,setIsLoading] = useState(false);
 
  useEffect(() => {
    if (isLoading) {
      console.log('Yükleniyor...');
    }
  }, [isLoading]);

  const handleAddToFrige = async () => {
    setIsLoading(true);
    try {
      await axios.post('/api/Material' , {
        name: ingredientName,
        foodValue: ingredientValue
      });
      setIngredientName('');
      setIngredientValue('');
    } catch (error) {
      console.error("Malzeme eklenemedi", error);
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="add-to-fridge-container">
    <h1 className="title">Buzdolabına Ekle</h1>
    <br />
    <div className="add-form-container">
      <input type="text" className="input-field" value={ingredientName} onChange={(e) => setIngredientName(e.target.value)} placeholder="Enter ingredient name..." />
      <button className="add-button" onClick={handleAddToFrige}>Buzdolabına Ekle</button>
    </div>
    <div className="item-list">
      
    </div>
  </div>
  )
}

export default NewItem