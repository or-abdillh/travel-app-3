<style scoped>
   .bottom-sheets {
      @apply p-6 w-full relative rounded-t-xl bg-white;
      animation: bottom-sheets .45s ease-in-out forwards;
      transform: translateY(-10%);
   }
   
   .btn {
      @apply bg-green-600 ring-green-300 w-full rounded mt-8 text-gray-50 text-sm font-medium py-2 duration-300 focus:ring focus:bg-opacity-75;
   }
   
   @keyframes bottom-sheets {
      from {
         transform: translateY(150%) scale(.75);
      } to {
         transform: translateY(-10%) scale(1);
      }
   }
</style>
<template>
	<section class="">
      <!-- Cover image -->
      <div class="relative">
         <img src="../assets/mount.jpeg" class="w-full" alt="" />
         <span class="fixed left-0 right-0 top-0 px-6">
            <div class="w-full md:w-8/12 lg:w-4/12 mx-auto py-4">
               <i
               @click="router.push({ name: 'home' })"
               class="fa fa-chevron-left bg-gray-50 px-2 py-1 text-green-700 z-50 rounded bg-opacity-75"></i>
            </div>
         </span>
      </div>
      <!-- Bottom sheets -->
      <div class="bottom-sheets">
         <!-- Button heart -->
         <span class="absolute right-6 -top-4 bg-white px-2 py-1 rounded-full shadow">
            <i
            @click="isHeartClicked = !isHeartClicked"
            :class="isHeartClicked ? 'fas' : 'far'"
            class="duration-300 text-red-600 fa-heart"></i>
         </span>
         <!-- The title -->
         <div class="flex items-center justify-between">
            <span>
               <strong class="mb-1 w-full flex items-center gap-2">
                  <h1>Mt. Rinjani</h1>
                  <small class="font-light text-xxxs">(376km)</small>
               </strong>
               <p class="text-xs text-gray-400">Lombok, Indonesia</p>
            </span>
            <!-- rating -->
            <span class="text-xxs gap-1 flex items-center">
               <i class="fa fa-star text-xxxs text-yellow-400"></i>
               4.6
            </span>
         </div>
         
         <!-- landscapes -->
         <div class="mt-5 flex gap-3">
            <template v-for="(landscape, index) in landscapes" :key="index">
               <div>
                  <img class="rounded mb-1" src="../assets/mount-square.jpg" />
                  <p class="text-xxs text-center">{{ landscape }}</p>
               </div>
            </template>
         </div>
         <!-- Description -->
         <div class="mt-5">
            <p class="font-medium text-sm">Description</p>
            <p class="text-xs text-gray-500">
               Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor Lorem ipsum sit amet dolor
            </p>
         </div>
         
         <!-- CTA -->
         <button class="btn" type="button">Visit place</button>
      </div>
	</section>
</template>

<script setup>
   import { ref } from 'vue'
   import { useRouter } from 'vue-router'
   
   const router = useRouter()
   const landscapes = ref(['Lake', 'Beach', 'Forest', 'Sunset'])
   const isHeartClicked = ref(false)
</script>
