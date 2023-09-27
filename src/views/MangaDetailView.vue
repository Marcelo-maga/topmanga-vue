<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let manga = reactive(ref({
  title: "",
  images: {
    jpg: {
      image_url: ""
    }
  },
  score: 0,
  synopsis: ""
}));

onMounted(() => {
    fetch(`https://api.jikan.moe/v4/manga/${route.params.id}`)
        .then((response) => response.json())
        .then(response => {
            manga.value = response.data
            console.log(manga.value)
    })
})
</script>


<template>
    <div class="">
        <div class="container p-4">
            <div class="bg-zinc-800 rounded p-4 flex gap-4">
                <img v-if="manga.images && manga.images.jpg" :src="manga.images.jpg.image_url" alt="Manga Cover" class="rounded-lg mb-4">
                <div>
                    <h1 class="text-3xl text-zinc-100 font-bold mb-2">{{ manga.title }}</h1>
    
                    <div class="mb-4">
                        <span class="text-zinc-100">Classificação: {{ manga.score }}</span>
                    </div>
    
                    <p class="text-zinc-100 mb-4">{{ manga.synopsis }}</p>
                </div>
            </div>
        </div>
    </div>
</template>