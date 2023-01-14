export function get_coordinates(city, country, setGeoCity, state=""){
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
                        setGeoCity(result[0])
					});
    return
}

export function get_weather(lon, lat, setDataReceived, setWeatherData, setTimeZone){
    console.log(lon, lat)
    const key = process.env.REACT_APP_WEATHERMAP_KEY;
    let api_call = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=4e1556fbea944fe7a78573611782a65d` 
    let output = ""
    fetch(api_call)
					.then((response) => 
						// after recieving a response, take the response from the server and convert it to JSON 
						response.json()
					)
					.then((result) => {
						console.log(result["list"]); //print out results
                        setWeatherData(result["list"])
                        setTimeZone(result["city"]["timezone"]/3600)
                        setDataReceived(true)
					});
    return
}

export function get_current_weather(lon, lat, setWeatherData){
    const key = process.env.REACT_APP_WEATHERMAP_KEY
    let api_call = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
    fetch(api_call)
        .then((response) =>
            // convert response to json
            response.json()
        )
        .then((result) => {
            console.log(result)
            setWeatherData(result)

        });
    return
}

export function get_air_quality(lon, lat, setAirQuality){
    const key = process.env.REACT_APP_WEATHERMAP_KEY
    let api_call = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`
    fetch(api_call)
        .then((response) =>
            // convert response to json
            response.json()
        )
        .then((result) => {
            console.log("Air Quality", result)
            setAirQuality(result)
        });
    return
}