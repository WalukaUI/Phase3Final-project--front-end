function PlayerCard({name, age, skill}){
    return <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title {name}</h5>
    <p>{skill, age}</p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    console.log("kkkkkkk");
  </div>
</div>
}

export default PlayerCard