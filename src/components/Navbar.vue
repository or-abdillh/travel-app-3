<style scoped>
   .nav-wrapper {
      @apply fixed left-0 right-0 bottom-0;
      box-shadow: -3px 3px 12px whitesmoke;
   }
   .navbar {
      @apply duration-300 w-full md:w-8/12  lg:w-4/12 mx-auto px-6 py-4 bg-white flex justify-between;
   }
</style>
<template>
   <section class="nav-wrapper">
      <div class="navbar">
         <template v-for="(menu, index) in menus" :key="index">
            <div
            @click="activeMenu = menu.name">
               <i v-if="activeMenu !== menu.name"
               :class="menu.icon"
               class="duration-300 text-gray-500"></i>
               <span class="duration-300 flex justify-center duration-300 flex-wrap" v-else>
                  <p class="text-xxs text-green-400 w-full text-center">{{ menu.name }}</p>
                  <i class="text-xxxxs text-green-400 fa fa-circle"></i>
               </span>
            </div>
         </template>
      </div>
   </section>
</template>

<script setup>
   import { ref } from 'vue'
   
   //List menu
   const menus = ref([
      {
         name: 'Home',
         icon: 'fa fa-home'
      },
      {
         name: 'Search',
         icon: 'fa fa-search'
      },
      {
         name: 'Bookmark',
         icon: 'far fa-bookmark'
      },
      {
         name: 'Profile',
         icon: 'far fa-user'
      }
      ])
      
   //Handler for active menu
   const activeMenu = ref('Home')
</script>
