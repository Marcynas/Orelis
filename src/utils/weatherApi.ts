async function getWeather(latitude, longitude, weatherApiKey ) {
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&days=4&q=${latitude},${longitude}`,);
    const finalRes = await res.json();
    return finalRes;
}

export { getWeather };