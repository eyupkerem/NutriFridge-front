
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth ,db} from './firebaseConfig';
import {doc,setDoc} from "firebase/firestore"
import './Informations.css';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [preferences, setPreferences] = useState({
    vegetarian: false,
    vegan: false,
    porkFree: false,
    pescatarian: false,
    noBeef: false,
  });
  const [restrictions, setRestrictions] = useState({
    glutenFree: false,
    noLactose: false,
    noShellfish: false,
    noNuts: false,
    pregnancy: false,
  });

  const handlePreferenceClick = (preference) => {
    setPreferences({
      ...preferences,
      [preference]: !preferences[preference]
    });
  };

  const handleRestrictionClick = (restriction) => {
    setRestrictions({
      ...restrictions,
      [restriction]: !restrictions[restriction]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          fullName,
          email,
          dob,
          height,
          weight,
          goalWeight,
          gender,
          preferences,
          restrictions,
        })
      }
      toast.success("Başarıyla kayıt yapıldı");
      console.log("Başarıyla kayıt olundu");

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);

      


    } catch (error) {
      console.log(error.message);
      toast.error("Kayıt olunurken bir sorunla karşılaşıldı. Lütfen daha sonra tekrar deneyiniz");

    }
  };

  return (
    <div className="signup-container">
      <div className='signUp box'>
        <h4 className='label'>Sign Up</h4>
        <div className="signUpInput">
          <label> Full Name
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </label>
          <label> Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label> Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
      </div>

      <div className="profile box">
        <h4 className='label'>Profile</h4>
        <div className="profileInput">
          <label> Date of Birth
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </label>
          <label> Height (m)
            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>
          <label> Weight (kg)
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <label> Goal Weight
            <input type="text" value={goalWeight} onChange={(e) => setGoalWeight(e.target.value)} />
          </label>
          <label> Gender
            <br />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
      </div>

      <div className="preference box">
        <h4 className='label'>Preference</h4>
        {Object.keys(preferences).map((pref) => (
          <label key={pref}>
            {pref.charAt(0).toUpperCase() + pref.slice(1).replace(/([A-Z])/g, ' $1')}
            <button className='preferencebtn' type="button" onClick={() => handlePreferenceClick(pref)}>
              {preferences[pref] ? 'Yes' : 'No'}
            </button>
          </label>
        ))}
      </div>


      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUp;
