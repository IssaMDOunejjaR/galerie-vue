<template>
  <div class="flex">
    <img :src="data?.image.url" class="w-[600px] h-[600px] object-cover" />

    <div class="p-8">
      <h1 class="text-5xl font-bold">{{ data?.name }}</h1>
      <p class="text-gray-500 mb-6">
        {{ data.origin ? data.origin : "No origin" }}
      </p>

      <div class="flex flex-col gap-4 mt-16 text-2xl">
        <p>
          <span class="font-semibold">Life Span:</span> {{ data?.life_span }}
        </p>
        <p>
          <span class="font-semibold">temperament:</span>
          {{ data?.temperament }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/services";

export default {
  props: ["id"],
  data() {
    return {
      data: null,
    };
  },
  created() {
    api.get(`/breeds`).then((data) => {
      this.data = data.data.filter((breed) => breed.id === +this.id)[0];

      console.log(this.data);
    });
  },
};
</script>
