import React, {  useState } from 'react';
import './Recipe.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Recipe = ({ recipeIngredients , onClearIngredients}) => {
  const [gptMessage, setGptMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

console.log(recipeIngredients);

  let ingredientsString = "";
for(let recipe of recipeIngredients){
  console.log(recipe);
  ingredientsString = `${ingredientsString} ${recipe.name}`
}


  const fetchGptMessage = async () => {
    setIsLoading(true);
    toast.success("Tarif oluşturuluyor...");
    try {
      const newChat = await axios.post(`/api/Chat/add` , {
        title : "New Chat",
        description : "New Chat",
        userId: 2
      })

      console.log(newChat);

      const allChats = await axios.get(`/api/Chat`);

      const newChatId = allChats.data[allChats.data.length - 1].id;


      const postResponse = await axios.post(`/api/Message/add`, {
        id: 0,
        userId: 1,
        chatId: newChatId,
        userInput: ingredientsString
      });
      
      

       const getResponse = await axios.get(`/api/Message/getall`);
       console.log(getResponse.data[getResponse.data.length -1].userInput);
       const message = getResponse.data[getResponse.data.length -1].userInput;
       toast.success("Tarif başarıyla oluşturuldu!");
       setGptMessage(message);
       
    } catch (error) {
      console.log("Bir hata oluştu:", error.message);
    }
    finally{
      setIsLoading(false);
    }

    onClearIngredients();
  };


  return (
    <div className="recipe-container">
      <h2 className="recipe-title">Tarif</h2>
      <ul className="ingredient-list">
        {recipeIngredients.map((ingredient, index) => (
          <li key={index} className='ingredientCard'>{ingredient.name}</li>
        ))}
      </ul>
      <button className="get-recipe-button" onClick={fetchGptMessage}>
      {isLoading ? 'Tarif Alınıyor...' : 'Tarif Bul'}
      </button>
      <div className="gpt-message-container">
        <p className="gpt-message">{gptMessage}</p>
      </div>
    </div>
  );
};

export default Recipe;
