<style scoped>
   .list {
      @apply mt-3 flex gap-4 md:justify-between;
      animation: list .3s ease-in-out forwards;
   }
   
   @keyframes list {
      from {
         transform: translateY(-50%) scale(.75);
      } to {
         transform: translateY(0) scale(1);
      }
   }
</style>
<template>
   <!-- List card -->
   <div
   @click="router.push({ name: 'view' })"
   class="list">
	   <div class="flex gap-3">
	      <span>
	         <img class="rounded-xl" src="../assets/mount-square.jpg" width="60" />
	      </span>
	      <div>
	         <strong class="text-xs mb-0 w-full">Mt. Rinjani</strong>
	         <p class="text-xxxxs text-gray-400">Lombok, Indonesia</p>
	      </div>
      </div>
      <span class="text-xxxxs gap-1 flex items-center">
         <i class="fa fa-star text-xxxxs text-yellow-400"></i>
         4.6
      </span>
   </div>
</template>

<script setup>
   import { useRouter } from 'vue-router'
   
   const router = useRouter()
</script>
