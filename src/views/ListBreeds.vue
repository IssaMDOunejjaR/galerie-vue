<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">List Of Breeds</h1>

    <div
      v-if="!isLoading"
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
    >
      <breed-card
        v-for="(breed, index) in breeds"
        :key="index"
        :data="breed"
      ></breed-card>
    </div>

    <loader-el v-else></loader-el>
  </div>
</template>

<script>
import { api } from "@/services";

export default {
  data() {
    return {
      breeds: [],
      isLoading: true,
    };
  },
  created() {
    this.isLoading = true;
    api.get("/breeds").then((data) => {
      this.breeds = data.data;
      this.isLoading = false;
    });
  },
};
</script>
