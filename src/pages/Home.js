import React from 'react'
import "../pages/Home.css"
import PageNav from '../components/PageNav'
import PageFooter from '../components/PageFooter'
import Slider from '../components/Slider'
import Bmi from '../components/Bmi'
import SignUpBox from '../components/SignupBox'
import slider6 from "../asset/sö6.gif"
import slider2 from "../asset/sö2.webp"
import slider3 from "../asset/sö3.jpg"
import TipOfTheDay from '../components/TipOfTheDay'




const Home = () => {
  const slides = [ 
    {image : slider6},
    {image :slider2},
    {image : slider3}
  ]


  return (
    <div className='home-container'>
    <PageNav/> 
    <Slider slides={slides} interval={5000} />
    <div className='boxes'>
    <Bmi/>
    <TipOfTheDay/>
    <SignUpBox/>
    </div>
    <PageFooter/>
    </div>
  )
}

export default Home