<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { getWeatherIcon, getUvIcon, windBeaufortIcon, preassureIcon } from '../utils/iconSelector';

const props = defineProps({
  forecastday: {
    type: Object,
    required: true,
  },
});
</script>

<template >
  <div
    class="select-none p-4 m-4 flex flex-col items-center justify-center"
    >
    {{ forecastday.date }}
    <img
        :src="getWeatherIcon(forecastday.day.condition.text, 1 )"
        :alt="forecastday.day.condition.text"
        class="w-24 h-24"/>
      <h1 class="text-4xl font-bold">{{ forecastday.day.avgtemp_c }}°C</h1>
      <h4 class="text-l font-bold">{{ forecastday.day.condition.text }}</h4>
  </div>
</template>
