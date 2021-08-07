
import React from 'react';
import "./players.css"
import "./PlayerCard"
import PlayerCard from './PlayerCard';

function Players({allPlayes}){
    const playerstoCard=allPlayes.map((card)=>{
      <PlayerCard 
       name={card.name}
       age={card.age}
       skill={card.skill}
       
      />
    })
    return playerstoCard

}
export default Players