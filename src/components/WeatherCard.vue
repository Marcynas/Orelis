<script>
export default {
  props: {
    coords: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      weather: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const { latitude, longitude } = this.coords;
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=7be11dcae1594fa885083538230307&q=${latitude},${longitude}`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          response.json().then((data) => {
            this.weather = data;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getWeatherIcon(conditionText, isDay) {
      // Map condition text to corresponding SVG icons
      const conditionMap = {
        Sunny: isDay ? "clear-day.svg" : "clear-night.svg",
        Clear: isDay ? "clear-day.svg" : "clear-night.svg",
        "Partly cloudy": isDay
          ? "partly-cloudy-day.svg"
          : "partly-cloudy-night.svg",
        Cloudy: "cloudy.svg",
        Overcast: isDay ? "overcast-day.svg" : "overcast--night.svg",
        Mist: "mist.svg",
        "Patchy rain possible": "drizzle.svg",
        "Patchy snow possible": "snowflake.svg",
        "Patchy sleet possible": "sleet.svg",
        "Patchy freezing drizzle possible": "drizzle.svg",
        "Thundery outbreaks possible": "thunderstorms.svg",
        "Blowing snow": "snowflake.svg",
        Blizzard: "snowflake.svg",
        Fog: isDay ? "fog-day.svg" : "fog-night.svg",
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
        "Moderate or heavy rain shower" : "rain.svg",
        // Add more condition text mappings as needed
      };

      // Check if the condition text exists in the mapping
      if (conditionText in conditionMap) {
        return conditionMap[conditionText];
      } else {
        return null; // Return null if no matching SVG icon found
      }
    },
    getUvIcon(uv) {
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
        return uvMap[uv];
      } else {
        return null; // Return null if no matching SVG icon found
      }
    },
    windBeaufortIcon(wind_kph) {
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
        return windBeaufortMap[windBeaufort];
      } else {
        return null; // Return null if no matching SVG icon found
      }
    },
    preassureIcon(preassure_mb) {
      if (preassure_mb <= 1013) {
        return "pressure-low.svg";
      } else {
        return "pressure-high.svg";
      }
    },
  },
};
</script>

<template >
  <div
    class="select-none border-2 border-blue-900 text-blue-900 bg-white bg-opacity-50  rounded-lg p-4 m-4 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
    <template v-if="weather">
      <img
        :src="`/src/assets/all/${getWeatherIcon(
          weather.current.condition.text,
          weather.current.is_day
        )}`"
        :alt="weather.current.condition.text"
        class="w-24 h-24"/>
      <h1 class="text-4xl font-bold">{{ weather.current.temp_c }}°C</h1>
      <h4 class="text-xl font-bold">{{ weather.current.condition.text }}</h4>
      <div
        class="flex flex-row justify-center items-center border-t-2 border-blue-900 w-full mt-4"
      >
        <img
          :src="`/src/assets/all/${getUvIcon(weather.current.uv)}`"
          :alt="`UV Index: ${weather.current.uv}`"
          class="w-16 h-16"
        />
        <img
          :src="`/src/assets/all/${windBeaufortIcon(weather.current.wind_kph)}`"
          :alt="`Wind Beaufort: ${weather.current.wind_kph}`"
          class="w-16 h-16"
        />
        <img
          :src="`/src/assets/all/${preassureIcon(weather.current.pressure_mb)}`"
          :alt="`Preassure: ${weather.current.pressure_mb}`"
          class="w-16 h-16"
        />
      </div>
      {{ weather.location.name }}
    </template>
    <template v-else>
      <p>Loading weather data...</p>
    </template>
  </div>
</template>
