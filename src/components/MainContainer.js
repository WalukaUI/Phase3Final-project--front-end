import React, { useEffect, useState } from "react"
import "./mainContainer.css"
import NavBar from "./navBar/NavBar"
import Players from "./players/Players";

function MainContainer(){
    const[allPlayes,setAllPlayers]=useState([])
    
    const URL="http://127.0.0.1:9393/"
    useEffect(()=>{
        let getrequestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }
          fetch(`${URL}/players`,getrequestOptions)
          .then(res=>res.json())
          .then(player => setAllPlayers(player))

    },[])

return <div>
    <NavBar />
<div className="row">
    <div className="col-2">
{/* <Series /> */}
    </div>
    <div className="col-8">
<Players allPlayes={allPlayes}/> 
    </div>
    <div className="col-2">
{/* <NewsBar /> */}
    </div>
</div>
</div>
}
export default MainContainer
