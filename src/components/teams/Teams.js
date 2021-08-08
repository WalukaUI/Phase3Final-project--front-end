import React from "react"
function Teams({teams}){
 const allTeams=teams.map((team)=>{
     return <div>
         <p>{team.name}</p>
     </div>
 })

 return allTeams
}

export default Teams