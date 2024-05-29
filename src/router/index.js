import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/SignUp"
import ShoppingList from "../pages/ShoppingList"
import FindRecipe from "../pages/FindRecipe"
import Fridge from "../pages/Fridge";





const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                 <Routes>
                     <Route index element={<Home/>}/>
                     <Route path="login" element={<Login/>}/>
                     <Route path="signup" element={<Signup/>}/>
                     <Route path="shoppinglist" element={<ShoppingList/>}/>
                     <Route path="findRecipe" element={<FindRecipe/>}/>
                     <Route path="fridge" element={<Fridge/>}/>
                 </Routes> 
            </BrowserRouter>
        </div>
    )
}
export default Router


