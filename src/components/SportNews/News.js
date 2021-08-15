import React from "react"
import ReactPlayer from 'react-player'

const URL="https://www.youtube.com/watch?v=F0_aypvtW8Y"

function News(){
//   const[news,setNews]=useState()
//     let getrequestOptions = {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       }

//     useEffect(()=>{
//         fetch(`${URL}`, getrequestOptions)
//         .then((res) => res.json())
//         .then((player) => console.log(player))
//     },[])

    return <div>
        <ReactPlayer mute="true" width="480px" height='240px' url="https://www.youtube.com/watch?v=F0_aypvtW8Y"/>
    </div>
}
export default News 