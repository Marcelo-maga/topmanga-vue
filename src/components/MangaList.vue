<script setup>
const manga = defineProps(["name", "url_image", "synopsis", "manga_id"]);
</script>

<template>
  <div class="bg-zinc-800 flex flex-col p-2 rounded justify-end">
    <img :src="manga.url_image" alt="manga cover" />

    <div class="py-4 px-2 flex flex-col gap-2 max-h-60">
      <h1 class="text-zinc-100 text-xl font-bold">{{ manga.name }}</h1>
      <p class="truncate text-zinc-100">{{ manga.synopsis }}</p>

      <router-link :to="{ name: 'MangaDetails', params: { id: manga.manga_id } }" class="p-3 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 transition duration-500 font-bold rounded">
        Ver Detalhes
      </router-link>
    </div>

  </div>
</template>

<style></style>