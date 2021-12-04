<style scoped>
   .text-xxxs {
      font-size: .55rem;
   }
   .card {
      min-width: 70%;
      @apply rounded-xl relative overflow-hidden;
   }
   .card-footer {
      @apply absolute bottom-2 left-2 right-2 rounded-xl p-2 bg-gray-50 flex items-start gap-1;
   }
</style>

<template>
   <!-- Card -->
   <div class="card">
      <img src="../assets/mount.jpeg" />
      <div class="card-footer">
         <div class="flex flex-wrap">
            <strong class="text-xxxs mb-0 w-full">Mt. Rinjani</strong>
            <p class="text-xxxs text-gray-400">Semarang, Indonesia</p>
         </div>
         <i
         @click="isHeartClick = !isHeartClick"
         :class="isHeartClick ? 'fas' : 'far'"
         class="fa-heart duration-300 text-xs text-green-500"></i>
      </div>
   </div>
</template>

<script setup>
   import { ref } from 'vue'
   //Handler for Heart icon
   const isHeartClick = ref(false)
</script>