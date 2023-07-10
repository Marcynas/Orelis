<script setup>
import WeatherCard from "./components/WeatherCard.vue";
import { useGeolocation } from "@vueuse/core";
import { ref } from "vue";
import { getWeather } from "../src/utils/weatherApi";
import WeatherForecastCard from "./components/WeatherForecastCard.vue";
import AstroCard from "./components/AstroCard.vue";
// watch
import { watch } from "vue";

const { coords } = useGeolocation();
const weather = ref(null);
const forecast = ref(null);
const astro = ref(null);
const show = ref(false);

const isReady = () => {
  return (
    coords.value.latitude !== Infinity && coords.value.longitude !== Infinity
  );
};

//wait for coords to be ready
watch(isReady, async () => {
  if (isReady()) {
    getWeather(
      coords.value.latitude,
      coords.value.longitude,
      "7be11dcae1594fa885083538230307"
    ).then((data) => {
      weather.value = data;
      forecast.value = data.forecast.forecastday;
      astro.value = data.forecast.forecastday[0].astro;
    });
  }
});

// set bgGradient based on time of day
const bgGradient = ref("bg-gradient-to-b from-blue-500 to-blue-300");
const time = new Date().getHours();
if (time >= 6 && time < 12) {
  bgGradient.value = "bg-gradient-to-b from-blue-500 to-blue-300";
} else if (time >= 12 && time < 18) {
  bgGradient.value = "bg-gradient-to-b from-blue-300 to-blue-100";
} else if (time >= 18 && time < 24) {
  bgGradient.value = "bg-gradient-to-b from-blue-900 to-blue-500";
} else {
  bgGradient.value = "bg-gradient-to-b from-blue-900 to-blue-500";
}
</script>

<template>
  <div class="justify-center items-center min-h-screen flex select-none
  "
  :class="bgGradient
  ">
    <template v-if="weather">
      <WeatherCard :weather="weather" 
        :class="show ? 'opacity-0 scale-0' : 'opacity-100' "
        class="absolute transition-opacity duration-500 ease-in-out z-10
          "
          @click="show = true"
        /> 

      <div class=" 
      flex flex-col 
      lg:grid grid-cols-2 grid-rows-2 
      transition-all duration-500 ease-in-out transform 
        "  @click="show = false"
        :class="show ? 'opacity-100' : 'opacity-0 hidden'">

        <WeatherCard :weather="weather" 
        /> 
        
        <AstroCard :astro="astro" />

        <div class="m-4 p-4 bg-white bg-opacity-20 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col lg:flex-row justify-center
          overflow-hidden col-span-2">
          <!-- slice forecast -->
          <WeatherForecastCard v-for="forecastday in forecast.slice(1, 7)" :forecastday="forecastday"
            :key="forecastday.date" />
        </div>

      </div>
    </template>
    <template v-else> Loading weather... </template>
  </div>
</template>
