import React from "react"
import img2 from "./ranking.jpg";
import "./Ranking.css"
import News from "../sportNews/News";

function Rankings(){
    return <div>
       <img className="img1" src={img2} alt="sch"/>
       <News />
    </div>
}
export default Rankings