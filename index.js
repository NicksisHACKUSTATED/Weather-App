const apiKey = '156642ce1ad161c0eb4ff5d964ea2dbf';

const getWeather = (location) => {
  console.log(location);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(response => response.json())
    .then((response) => {
		if(response.cod === '404'){
			alert('city not found, make sure you are typing the correct city name, e.g.New York.')
		}
		else{
			console.log(response);
			document.getElementById("cloud_pct").innerHTML = response.clouds.all;
			document.getElementById("temp").innerHTML = Math.round((response.main.temp - 273.15) * 10) / 10 + '°C';
	
			document.getElementById("feels_like").innerHTML = Math.round((response.main.feels_like - 273.15) * 10) / 10 + '°C';
	
			document.getElementById("humidity").innerHTML = response.main.humidity;
		}
	    
    })
    .catch(err => console.error(err));
}


document.getElementById("submit").addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(document.getElementById("location").value);
});
