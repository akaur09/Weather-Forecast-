// // GIVEN a weather dashboard with form inputs
// // WHEN I search for a city
// // THEN I am presented with current and future conditions for that city and that city is added to the search history
// // WHEN I view current weather conditions for that city
// // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// // WHEN I view the UV index
// // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// // WHEN I view future weather conditions for that city
// // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// // WHEN I click on a city in the search history
// // THEN I am again presented with current and future conditions for that city

// * Satisfies all of the above acceptance criteria plus the following:

//     * Uses the OpenWeather API to retrieve weather data. :refer to 06-code-drill 01-api- 03- weather-api

//     * Uses `localStorage` to store persistent data.
var APIkey= "346fa36c7fb173393b353dd518347322"
var query= "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid="+ APIkey;

$.ajax({
    url: query,
    method: "GET"
}).then(function(response) {

    console.log(query);
    console.log(response);

});