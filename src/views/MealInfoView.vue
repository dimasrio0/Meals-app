<template>
  <div class="max-w-screen-xl mx-auto" v-for="info in getMealInfo" :key="info">
    <div class="w-full min-h-screen bg-slate-50 px-4 py-5 space-y-3">
      <img class="rounded-t-lg w-2/3 mx-auto max-h-[400px]" :src="info.strMealThumb" />
      <div class="space-y-2">
        <h1 class="text-xl font-bold">Information :</h1>
        <div class="flex flex-col space-y-1">
          <span>Meal Name : {{ info.strMeal }}</span>
          <span>Meal Category : {{ info.strCategory }}</span>
          <span>Meal From : {{ info.strArea }}</span>
        </div>
      </div>
      <div>
        <h1 class="text-xl font-bold">Intsturctions :</h1>
        <span>
          {{ info.strInstructions }}
        </span>
      </div>
      <div>
        <h1 class="text-xl font-bold">Ingredients & Measure :</h1>
        <ul class="list-disc pl-5" v-for="i in 20" :key="i">
          <li
            v-if="info[`strIngredient${i}`].trim() !== '' && info[`strMeasure${i}`].trim() !== ''"
          >
            {{ info[`strIngredient${i}`] }} - {{ info[`strMeasure${i}`] }}
          </li>
        </ul>
      </div>
      <div>
        <h1 class="text-xl font-bold">Tutorial :</h1>
        <iframe
          v-if="info.strYoutube"
          width="100%"
          height="500"
          :src="info.strYoutube.replace('watch?v=', 'embed/')"
          frameborder="5"
          allowfullscreen
        ></iframe>
        <span v-else class="text-gray-500">Tutorial Doesn't Exist</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps(['id'])
const store = useStore()

const getMealInfo = computed(() => {
  return store.getters.getMealInfo.meals
})

onMounted(() => {
  store.dispatch('fetchMealInfo', props.id)
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
