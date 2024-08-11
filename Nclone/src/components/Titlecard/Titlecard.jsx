import React from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards_data.js'
const Titlecard = () =>{
  return (
    <div className='titlecards'>
     <h2>Popular on netflix</h2>
     <div className="card-list">
      {cards_data.map((card,index)=>{
        return <div className="card" key={index}>
          <img src={card.image}/>
          <p>{card.name}</p>
        </div>

      })}

     </div>


    </div>

);
}

    
  

export default Titlecard;

