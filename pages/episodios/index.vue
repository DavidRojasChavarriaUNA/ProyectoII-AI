<template>
  <main class="container-fluid p-0">
    <HeaderView />
    <div class="bg-image" id="divEpisodios">
      <section class="fondoEspecialGris">
        <div class="row m-0">
          <div class="col-12 offset-md-1 col-md-10 p-5">
            <article class="fondoEspecialBlanco p-3">
              <h1 class="text-center">Temporadas y episodios</h1>
              <div class="row justify-content-md-center pt-5">
                <div class="col-12 col-md-10">
                  <div class="row m-0 justify-content-center">
                    <div class="col-12 col-sm-11 col-md-10 col-lg-6 pb-5" v-for="season in seasons" :key="season">
                      <div class="card card-white p-3">
                        <div class="card-body pb-0">
                          <h3 class="card-title text-center mb-3">
                            Temporada - {{season}}
                          </h3>
                          <ol>
                            <li v-for="episode in episodes.filter(e => e.seasonNum === season)" :key="episode.episodeAlt">
                              <NuxtLink :to="`/episodios/${episode.episodeAlt}`">{{episode.episodeTitle}}</NuxtLink>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-6 col-lg-4 pb-5"
                      v-for="episode in episodes" :key="episode.episodeAlt">
                      <div class="card card-white p-3">
                        <div class="card-body text-center pb-0">
                          <h4 class="card-title text-center">
                            <NuxtLink :to="`/espisodios/${episode.episodeAlt}`">{{episode.episodeNum}} - {{episode.episodeTitle}}</NuxtLink>
                          </h4>
                        </div>
                      </div>
                    </div> -->

                  </div>
                </div>
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
  const data = await queryContent('script-bag-of-words').findOne()
  const episodes = data.body

  const seasons = episodes.filter((episode, index, array) => {
    return index === array.findIndex((e) => e.seasonNum === episode.seasonNum)
  }).map(episode => episode.seasonNum)
</script>