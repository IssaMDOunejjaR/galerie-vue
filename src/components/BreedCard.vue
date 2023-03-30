<template>
  <div class="border border-gray-400 flex flex-col">
    <img :src="data.image.url" class="w-full h-[300px] object-cover" />

    <div class="p-3 flex flex-col flex-1">
      <h2 class="text-xl font-bold">{{ data.name }}</h2>
      <p class="text-sm text-gray-500 mb-6">
        {{ data.origin ? data.origin : "No origin" }}
      </p>

      <router-link
        :to="{ name: 'breed-details', params: { id: data.id } }"
        class="mt-auto bg-green-400 text-white p-3 text-center font-semibold"
        >See More</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
