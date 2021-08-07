import React, { useEffect, useState } from "react"
import "./mainContainer.css"
import Players from "./players/Players";

function MainContainer(){
    const[allPlayes,setAllPlayers]=useState([null])
    
    const URL="http://127.0.0.1:9393/"
    useEffect(()=>{
        let getrequestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }
    },[])
return <> 
<Players allPlayes={allPlayes}/>
</>
}
export default MainContainer
