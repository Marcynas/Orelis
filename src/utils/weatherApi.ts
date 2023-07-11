/**
 * Function to get weather data from weather api based on latitude and longitude
 * @param latitude latidufe of the location
 * @param longitude longitude of the location
 * @param weatherApiKey api key for weather api
 * @returns weather data
 */
async function getWeather(latitude, longitude, weatherApiKey ): Promise<any> {
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&days=4&q=${latitude},${longitude}`,);
    const finalRes = await res.json();
    return finalRes;
}

export { getWeather };