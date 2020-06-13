if(!window.document.title == "Star Wars") {
  window.location = "./star-wars.html";
}

if(window.document.title == "Star Wars") {

  const charactersCount = document.getElementById('characters');
  const vehiclesCount = document.getElementById('vehicles');
  const planetsCount = document.getElementById('planets');
  const starShipsCount = document.getElementById('starships');
  
  function fillCounters() {
    Promise.all(
      [
        swapiGet('people/'),
        swapiGet('vehicles/'),
        swapiGet('planets/'),
        swapiGet('starships/'),
      ]
      )
      .then(function(results) {
        charactersCount.innerHTML = results[0].data.count;
        vehiclesCount.innerHTML = results[1].data.count;
        planetsCount.innerHTML = results[2].data.count;
        starShipsCount.innerHTML = results[3].data.count;
      })
    }
    
    function swapiGet(param) {
      return axios.get(`https://swapi.dev/api/${param}`);
    }
    
    fillCounters();
}