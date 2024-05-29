import React, { useEffect, useState } from 'react';
import './ShoppingList.css';
import ItemCard from './ItemCard';
import { db } from './firebaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

function ShoppingList() {
  return (
    <div className="container">
      <Form />
    </div>
  );
}

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const itemCollectionRef = collection(db, 'ListItem');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemCollectionRef);
      setItems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    getItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      try {
        const docRef = await addDoc(itemCollectionRef, {
          itemName: inputValue,
        });
        setItems([...items, { id: docRef.id, itemName: inputValue }]);
        setInputValue('');
      } catch (error) {
        console.error('Yeni malzeme eklenirken hata oluştu', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'ListItem', id));
      setItems(items.filter((item) => item.id !== id));
      console.log('Öğe başarıyla silindi');
    } catch (error) {
      console.error('Öğe silinirken hata oluştu', error);
    }
  };

  return (
    <div className="shopping-list-container">
      <div className="shopping-list-input-container">
        <h1 className="title">Alışveriş Listesi</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Add item..."
            className="input-field"
          />
          <button type="submit" className="add-button">
           Ekle
          </button>
        </form>
      </div>
      <div className="list-container">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <ItemCard id={item.id} name={item.itemName} onDelete={() => handleDelete(item.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
