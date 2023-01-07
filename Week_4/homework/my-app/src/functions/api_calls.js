export function get_coordinates(city, country, state=""){
    const key = process.env.REACT_APP_WEATHERMAP_KEY;
    let api_call = "";
    let output = "";
    if(country === "USA"){
        api_call = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=${key}`;
    }else{
        api_call = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${key}`;
    }
    fetch(api_call)
					.then((response) => 
						// after recieving a response, take the response from the server and convert it to JSON 
						response.json()
					)
					.then((result) => {
						console.log(result); //print out results
                        output = result
                        return("Test");
					});
}

export function get_weather(lon, lat, setDataReceived, setWeatherData){
    const key = process.env.REACT_APP_WEATHERMAP_KEY;
    let api_call = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4e1556fbea944fe7a78573611782a65d`; 
    let output = ""
    fetch(api_call)
					.then((response) => 
						// after recieving a response, take the response from the server and convert it to JSON 
						response.json()
					)
					.then((result) => {
						console.log(result["list"]); //print out results
                        setWeatherData(result["list"])
                        setDataReceived(true)
					});
    return
}