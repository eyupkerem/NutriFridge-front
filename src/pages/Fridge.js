import React from 'react'
import './Fridge.css'
import PageNav from '../components/PageNav'
import Ingredients from '../components/Ingredients'
import NewItem from '../components/NewItem'
import ShoppingList from '../components/ShoppingList'
import PageFooter from '../components/PageFooter'

const AddToFridge = () => {
  return (
    <div className='add-to-fridge-box'>
    <PageNav/>
    <div className='fields'>
    <NewItem/>
    <Ingredients/> 
    <ShoppingList/> 
    </div>
    <PageFooter/>




    </div>
  )
}

export default AddToFridge