import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom"

const URL = "http://127.0.0.1:9393/";

function PlayerProfile(){
    const [singlePlayer, setsinglePlayer] = useState(null);
    const params = useParams()
    useEffect(() => {
        fetch(`${URL}/players/${params.id}`)
          .then(r => r.json())
          .then(data => setsinglePlayer(data))
      }, [params.id])


    return <p>this is a profile</p>
}

export default PlayerProfile