
import React from 'react';
import "./players.css"
import "./PlayerCard"
import PlayerCard from './PlayerCard';

function Players({allPlayes}){
    const playerstoCard=allPlayes.map((card)=>{
      return <PlayerCard 
       key={card.id}
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