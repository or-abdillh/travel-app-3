<style scoped>
   .text-xxs {
      font-size: .75rem;
   }
   .text-xxxs {
      font-size: .55rem;
   }
   .category-wrapper, .card-wrapper {
      @apply flex gap-3 overflow-scroll;
   }
   .category {
      @apply bg-gray-100 duration-300 px-3 py-1 rounded-xl text-green-500 text-xs font-medium;
   }
   .active {
      @apply bg-green-400 text-gray-50;
   }
   
</style>

<template>
   <section class="px-6 py-5">
      <!-- Location -->
      <div class="text-gray-400 flex items-center gap-2">
         <i class="fas fa-map-marker-alt text-xxs"></i>
         <span class="text-xxs">Jakarta, Indonesia</span>
      </div>
      <!-- Wellcome notes -->
      <h1 class="text-2xl w-10/12 font-medium mt-5">
         Where do you like to go ? 👏
      </h1>
      
      <!-- Category -->
      <div class="category-wrapper mt-5">
         <template v-for="(category, index) in categories" :key="index">
            <span
            @click="activeBar = category"
            :class="activeBar === category ? 'active' : ''" 
            class="category">
               {{ category }}
            </span>
         </template>
      </div>
      
      <!-- Card -->
      <div class="card-wrapper mt-6">
         <template v-for="card in 4" :key="card">
            <Card></Card>
         </template>
      </div>
      
      <!-- Recomendation for you -->
      <div class="mt-5 mb-20">
         <div class="flex items-center text-gray-600 justify-between">
            <p>Recomendations</p>
            <i class="fa fa-chevron-down"></i>
         </div>
         <template v-for="list in 8" :key="list">
            <List></List>
         </template>
      </div>
   </section>
   <Navbar></Navbar>
</template>

<script setup>
   import { ref } from 'vue'
   import Card from '../components/Card.vue'
   import List from '../components/List.vue'
   import Navbar from '../components/Navbar.vue'
   
   const categories = ref([
         'Beach', 'Culture', 'Mountains', 'Forest'
      ])
   //For active class category
   const activeBar = ref('Beach')   
</script>