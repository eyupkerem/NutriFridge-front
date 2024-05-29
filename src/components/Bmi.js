 import React, { useState } from 'react';
 import './Bmi.css'

 function Bmi() {
   const [height, setHeight] = useState('');
   const [weight, setWeight] = useState('');
   const [bmi, setBmi] = useState(0);
   const handleHeightChange = (event) => {
     setHeight(event.target.value);
   };

   const handleWeightChange = (event) => {
     setWeight(event.target.value);
   };
   const calculate = () => {
     if (height && weight) {
       const newBmi = parseFloat(weight) / (parseFloat(height) / 100) ** 2;
       setBmi(newBmi.toFixed(2));
     }
   };

   
  let bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi < 25) {
    bmiCategory = 'Normal weight';
  } else if (bmi < 30) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obese';
  }


   return (
     <div className="bmi-çerceve">
       <h1 className='bmi-label'>BMI Hesaplama</h1>
       <div className="cerceve">
         <div className="bmi-kutusu">
           <div className="giris-alanlari">
             <label>Boy (cm):</label>
             <input type="number" value={height} onChange={handleHeightChange} />
             <label>Kilo (kg):</label>
             <input type="number" value={weight} onChange={handleWeightChange} />
           </div>
           <button onClick={calculate} className='hesapla-buton' >Hesapla</button>
           {bmi > 0 && (
            <div className="sonuc">
              <p>BMI: {bmi} ({bmiCategory})</p>
            </div>
          )}
        </div>
       </div>
     </div>
   );
 }

 export default Bmi;


