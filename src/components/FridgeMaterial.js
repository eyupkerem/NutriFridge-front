
import React, { useEffect, useState } from 'react';
import './FridgeMaterial.css';
import axios from 'axios';
import RecipeMaterial from '../components/RecipeMaterial';

const FridgeMaterial = ({ setRecipeIngredients }) => {
  const [fridgeMaterials, setFridgeMaterials] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get('/api/Material');
        setFridgeMaterials(response.data);
      } catch (error) {
        console.error('Veriler alınamadı', error);
      }
    };
    fetchIngredients();
  }, []);

  const handleIngredientClick = (ingredient) => {
    setRecipeIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  return (
    <div className="ingredients-container">
      <h2 className="ingredient-label">Buzdolabı</h2>
      <div className="ingredient-list">
        {fridgeMaterials.map((ingredient) => (
          <div key={ingredient.id} className="ingredient" onClick={() => handleIngredientClick(ingredient)}>
            <RecipeMaterial name={ingredient.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FridgeMaterial;
