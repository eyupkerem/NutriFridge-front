import React, { useState } from 'react';
import './TipOfTheDay.css';


const tips = [
  "Bol miktarda meyve ve sebze yiyin.",
  "Düzenli egzersiz yapın.",
  "Sağlıklı bir kiloda kalın.",
  "Yeterli uyku alın.",
  "Stresi yönetin.",
  "Sigara içmekten kaçının.",
  "Alkol tüketimini sınırlayın.",
  "Düzenli olarak doktorunuza görünün.",
  "Bol su için.",
  "Rutin sağlık kontrollerini ihmal etmeyin.",
  "Dengeli ve çeşitli beslenin.",
  "Kişisel hijyeninize dikkat edin.",
  "Şeker tüketimini azaltın.",
  "Güneşten korunmak için güneş kremi kullanın.",
  "Ruh sağlığınıza dikkat edin.",
  "Kafein tüketimini sınırlayın.",
  "Duruşunuzu düzeltin ve doğru oturma pozisyonlarına dikkat edin.",
  "Diş sağlığınıza özen gösterin ve düzenli diş hekimi kontrollerine gidin.",
  "Yeni şeyler öğrenerek zihinsel aktivitenizi canlı tutun."
  ];
  
  function TipOfTheDay() {
    const [tip1, setTip1] = useState(tips[Math.floor(Math.random() * tips.length)]);
    const [tip2, setTip2] = useState(tips[Math.floor(Math.random() * tips.length)]);
  
    const generateNewTips = () => {
      const newTip1 = tips[Math.floor(Math.random() * tips.length)];
      const newTip2 = tips[Math.floor(Math.random() * tips.length)];
      setTip1(newTip1);
      setTip2(newTip2);
    };
  
    return (
      <div className="tip-box">
        <h2>Birkaç Öneri</h2>
        <div className="tip-container">
          <div className="tip">
            <p className="tip-text">{tip1}</p>
          </div>
        </div>
        <button className="new-tip-button" onClick={generateNewTips}>
          Yeni Öneri
        </button>
      </div>
    );
  }
  
  export default TipOfTheDay;