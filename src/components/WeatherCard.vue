<script setup>
import { defineProps } from "vue";
import {
  getWeatherIcon,
  getUvIcon,
  windBeaufortIcon,
  preassureIcon,
} from "../utils/iconSelector";

const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div
          class="items-center justify-center flex flex-col m-4 p-4 bg-white bg-opacity-20 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <img :src="getWeatherIcon(
            weather.current.condition.text,
            weather.current.is_day
          )
            " :alt="weather.current.condition.text" class="w-24 h-24" />
          <h1 class="text-4xl font-bold">{{ weather.current.temp_c }}°C</h1>
          <h4 class="text-xl font-bold">{{ weather.current.condition.text }}</h4>
          <div class="flex flex-row justify-center items-center border-t-2 border-blue-900 w-full mt-4">
            <img :src="getUvIcon(weather.current.uv)" :alt="`UV Index: ${weather.current.uv}`" class="w-16 h-16" />
            <img :src="windBeaufortIcon(weather.current.wind_kph)" :alt="`Wind Beaufort: ${weather.current.wind_kph}`"
              class="w-16 h-16" />
            <img :src="preassureIcon(weather.current.pressure_mb)" :alt="`Preassure: ${weather.current.pressure_mb}`"
              class="w-16 h-16" />
          </div>
          {{ weather.location.name }}
      </div>
</template>
