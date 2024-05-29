
 import React, { useState } from 'react'
 import "../pages/FindRecipe.css"
 import PageNav from '../components/PageNav'
 import PageFooter from '../components/PageFooter'
 import Recipe from '../components/Recipe';
 import FridgeMaterial from '../components/FridgeMaterial';

const FindRecipe = () => {
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const clearIngredients = () => {
    setRecipeIngredients([]);
  };

  return (
    <>
      <PageNav />
      <div className="fields">
        <FridgeMaterial setRecipeIngredients={setRecipeIngredients} />
        <Recipe recipeIngredients={recipeIngredients} onClearIngredients={clearIngredients} />
      </div>
    </>
  );
};

export default FindRecipe;
