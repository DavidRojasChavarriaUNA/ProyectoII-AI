<template>
    <main class="container-fluid p-0">
        <HeaderView />
        <div class="bg-image" id="divEpisodios">
            <section class="fondoEspecialGris">
                <div class="row m-0">
                    <div class="col-12 offset-md-1 col-md-10 p-5">
                        <article class="fondoEspecialBlanco p-3">
                            <h1 class="text-center">{{episode.episodeTitle}}</h1>
                            <div class="row justify-content-md-center pt-5">
                                <div class="col-12 text-center">
                                    <span class="fw-bold">Temporada: </span>{{episode.seasonNum}}
                                    <span class="fw-bold">Capítulo: </span>{{episode.episodeNum}}
                                </div>
                            </div>
                            <div class="row justify-content-center p-2">
                                <div class="col-12 col-sm-11 col-lg-9">
                                    <div class="row pt-2 pb-2" v-for="(text, index) in episode.text" :key="text.name">
                                        <div v-if="index % 2 == 0" class="col-12 box">
                                            <NuxtLink :to="`/personajes/${text.name}`">{{text.name}}:</NuxtLink>
                                            <p class="pe-5">{{text.text}}</p>
                                        </div>
                                        <div v-else class="col-12 box text-end">
                                            <NuxtLink :to="`/personajes/${text.name}`">{{text.name}}:</NuxtLink>
                                            <p class="ps-5">{{text.text}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-end">
                                <NuxtLink @click="$router.back()" to="#">Regresar</NuxtLink>
                            </div>
                        </article>
                    </div>
                    <div class="col-1"></div>
                </div>
            </section>
        </div>
        <FooterView />
    </main>
</template>
<script setup>
    const route = useRoute()
    const data = await queryContent('script-bag-of-words').findOne()
    const episodes = data.body

    const episode = episodes.find(episode => episode.episodeAlt == route.params.slug)
</script>