<template>
  <div class="max-w-[1400px] mx-auto p-4">
    <nav class="mb-12 flex justify-end gap-4 text-xl">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'list-breeds' }">List Breeds</router-link>
    </nav>

    <router-view />
  </div>
</template>
