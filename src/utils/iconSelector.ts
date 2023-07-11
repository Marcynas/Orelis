// Description: This file contains functions that map weather text to corresponding SVG icons

/**
 * function to get weather icon url based on condition text and day/night
 * @param conditionText from weather api ex: "Sunny" or "Partly cloudy"
 * @param isDay boolean to check if it is day or night
 * @returns icon url
 */
function getWeatherIcon(conditionText, isDay): string | null {
  // Map condition text to corresponding SVG icons
  const conditionMap = {
    "Sunny": isDay ? "clear-day.svg" : "clear-night.svg",
    "Clear": isDay ? "clear-day.svg" : "clear-night.svg",
    "Partly cloudy": isDay
      ? "partly-cloudy-day.svg"
      : "partly-cloudy-night.svg",
    "Cloudy": "cloudy.svg",
    "Overcast": isDay ? "overcast-day.svg" : "overcast-night.svg",
    "Mist": "mist.svg",
    "Patchy rain possible": "drizzle.svg",
    "Patchy snow possible": "snowflake.svg",
    "Patchy sleet possible": "sleet.svg",
    "Patchy freezing drizzle possible": "drizzle.svg",
    "Thundery outbreaks possible": "thunderstorms.svg",
    "Blowing snow": "snowflake.svg",
    "Blizzard": "snowflake.svg",
    "Fog": isDay ? "fog-day.svg" : "fog-night.svg",
    "Freezing fog": "fog.svg",
    "Patchy light drizzle": "drizzle.svg",
    "Light drizzle": "drizzle.svg",
    "Freezing drizzle": "drizzle.svg",
    "Heavy freezing drizzle": "drizzle.svg",
    "Patchy light rain": "rain.svg",
    "Light rain": "rain.svg",
    "Moderate rain at times": "rain.svg",
    "Moderate rain": "rain.svg",
    "Heavy rain at times": "rain.svg",
    "Heavy rain": "rain.svg",
    "Light freezing rain": "rain.svg",
    "Moderate or heavy freezing rain": "rain.svg",
    "Light sleet": "sleet.svg",
    "Moderate or heavy sleet": "sleet.svg",
    "Patchy light snow": "snowflake.svg",
    "Light snow": "snowflake.svg",
    "Patchy moderate snow": "snowflake.svg",
    "Moderate snow": "snowflake.svg",
    "Patchy heavy snow": "snowflake.svg",
    "Heavy snow": "snowflake.svg",
    "Ice pellets": "sleet.svg",
    "Light rain shower": "rain.svg",
    "Moderate or heavy rain shower": "rain.svg",
    // Add more condition text mappings as needed
  };

  // Check if the condition text exists in the mapping
  if (conditionText in conditionMap) {
    return new URL(
      `/src/assets/all/${conditionMap[conditionText]}`,
      import.meta.url
    ).href;
  } else {
    return null; // Return null if no matching SVG icon found
  }
}

/**
 * function to get UV index icon url based on UV index
 * @param uv UV index from weather api
 * @returns icon url
 */
function getUvIcon(uv): string | null {
  // Map UV index to corresponding SVG icons
  const uvMap = {
    1: "uv-index-1.svg",
    2: "uv-index-2.svg",
    3: "uv-index-3.svg",
    4: "uv-index-4.svg",
    5: "uv-index-5.svg",
    6: "uv-index-6.svg",
    7: "uv-index-7.svg",
    8: "uv-index-8.svg",
    9: "uv-index-9.svg",
    10: "uv-index-10.svg",
    11: "uv-index-11.svg",
  };
  if (uv in uvMap) {
    return new URL(`/src/assets/all/${uvMap[uv]}`, import.meta.url).href;
  } else {
    return null; // Return null if no matching SVG icon found
  }
}

/**
 * function to get wind beaufort scale icon url based on wind speed
 * @param wind_kph wind speed in kph from weather api
 * @returns icon url
 */
function windBeaufortIcon(wind_kph) {
  // convert wind speed from kph to beaufort scale
  const windBeaufort = Math.round(wind_kph / 3.6);
  // Map wind beaufort scale to corresponding SVG icons
  const windBeaufortMap = {
    0: "wind-beaufort-0.svg",
    1: "wind-beaufort-1.svg",
    2: "wind-beaufort-2.svg",
    3: "wind-beaufort-3.svg",
    4: "wind-beaufort-4.svg",
    5: "wind-beaufort-5.svg",
    6: "wind-beaufort-6.svg",
    7: "wind-beaufort-7.svg",
    8: "wind-beaufort-8.svg",
    9: "wind-beaufort-9.svg",
    10: "wind-beaufort-10.svg",
    11: "wind-beaufort-11.svg",
    12: "wind-beaufort-12.svg",
  };
  if (windBeaufort in windBeaufortMap) {
    return new URL(
      `/src/assets/all/${windBeaufortMap[windBeaufort]}`,
      import.meta.url
    ).href;
  } else {
    return null; // Return null if no matching SVG icon found
  }
}

/**
 * function to get wind direction icon url based on wind direction
 * @param windDegree wind direction in degree from weather api
 * @returns icon url
 */
function preassureIcon(preassure_mb): string {
  if (preassure_mb <= 1013) {
    return new URL(`/src/assets/all/pressure-low.svg`, import.meta.url).href;
  } else {
    return new URL(`/src/assets/all/pressure-high.svg`, import.meta.url).href;
  }
}

/**
 * function to get moon phase icon url based on moon phase
 * @param moonPhase moon phase from weather api e.g. "Waning Gibbous" or "Waxing Gibbous"
 * @returns icon url
 */
function getMoonIcon(moonPhase): string | null {
  // Map moon phase to corresponding SVG icons
  const moonPhaseMap = {
    "Waning Gibbous": "moon-waning-gibbous.svg",
    "Waxing Gibbous": "moon-waxing-gibbous.svg",
    "Waning Crescent": "moon-waning-crescent.svg",
    "Waxing Crescent": "moon-waxing-crescent.svg",
    "First Quarter": "moon-first-quarter.svg",
    "Last Quarter": "moon-last-quarter.svg",
    "New Moon": "moon-new.svg",
    "Full Moon": "moon-full.svg",
  };
  if (moonPhase in moonPhaseMap) {
    return new URL(
      `/src/assets/all/${moonPhaseMap[moonPhase]}`,
      import.meta.url
    ).href;
  } else {
    return null; // Return null if no matching SVG icon found
  }
}

/**
 * function to get astro icon url based on astro phase
 * @param astro phase of the sun or moon e.g. "Sunrise" or "Moonset"
 * @returns icon url
 */
function getAstroIcon(astro): string | null {
  // Map moon phase to corresponding SVG icons
  const astroMap = {
    "Sunrise": "sunrise.svg",
    "Sunset": "sunset.svg",
    "Moonrise": "moonrise.svg",
    "Moonset": "moonset.svg",
  };
  if (astro in astroMap) {
    return new URL(
      `/src/assets/all/${astroMap[astro]}`,
      import.meta.url
    ).href;
  } else {
    return null; // Return null if no matching SVG icon found
  }
}

export { getWeatherIcon, getUvIcon, windBeaufortIcon, preassureIcon, getMoonIcon, getAstroIcon };
