import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom"

const URL = "http://127.0.0.1:9393/";

function PlayerProfile(){
    const [singlePlayer, setsinglePlayer] = useState([]);
    const params = useParams()
    useEffect(() => {
      fetch(`${URL}/players/${params.id}`)
        .then((r) => r.json())
        .then((data) => setsinglePlayer(data));
    }, [params.id]);


    return <div>
       <p>{singlePlayer.name}</p>
       <p>{singlePlayer.age}</p>
       <p>{singlePlayer.skill}</p>
       <p>{singlePlayer.team}</p>
    </div>
    
}

export default PlayerProfile