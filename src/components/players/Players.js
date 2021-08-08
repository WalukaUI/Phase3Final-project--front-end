import React from 'react';
import "./players.css"
import "./PlayersCards"
import PlayersCards from './PlayersCards';

function Players({allPlayes}){
    const playerstoCard=allPlayes.map((card)=>{
      return <PlayersCards
       key={card.id}
       id={card.id}
       name={card.name}
       age={card.age}
       skill={card.skill}
   
      />
    })
    return <div>
         {playerstoCard}
    </div> 

}
export default Players