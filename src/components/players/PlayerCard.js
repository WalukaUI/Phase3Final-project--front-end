function PlayerCard({name, age, skill}){
    return <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title {name}</h5>
    <p>{skill, age}</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
}

export default PlayerCard