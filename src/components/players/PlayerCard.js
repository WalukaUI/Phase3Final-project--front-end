function PlayerCard({name, age, skill}){
    return <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <a><h5 className="card-title">{name}</h5></a>
    <p className="card-text">{skill}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
}

export default PlayerCard