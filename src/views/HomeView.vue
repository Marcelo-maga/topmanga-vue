<script setup>
import { onMounted, reactive, ref } from 'vue';
import MangaList from '@/components/MangaList.vue'

let mangas = reactive(ref());

onMounted(() => {
  fetch('https://api.jikan.moe/v4/top/manga?limit=24')
    .then((response) => response.json())
    .then(response => {
      mangas.value = response.data
    })
}) 
</script>

<template>
  <div class="bg-zinc-900">

    <div class="container mx-auto p-4 relative">
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-20">
        <MangaList v-for="manga in mangas" :manga_id="manga.mal_id" :key="manga.mal_id" :name="manga.title" :url_image="manga.images.jpg.image_url" :synopsis="manga.synopsis" />
      </section>
    </div>

    <!-- <div class="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t-2 border-zinc-700 py-4 px-8 flex justify-center">

      <button @click="loadPage('prev')" :disabled="currentPage === 1" class="bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-semibold px-4 py-2 rounded-md">
        Anterior
      </button>

      <button @click="loadPage('next')" :disabled="currentPage === totalPages" class="bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-semibold px-4 py-2 rounded-md ml-4">
        Próximo
      </button>

    </div> -->
  </div>
</template>