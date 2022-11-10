<template>
  <main class="container-fluid p-0">
    <HeaderView />
    <div class="bg-image" id="divGenero">
      <section class="fondoEspecialGris">
        <div class="row m-0">
          <div class="col-12 offset-md-1 col-md-10 p-5">
            <article class="fondoEspecialBlanco p-3">
              <h1 class="text-center">Personajes por genero</h1>
              <div class="row justify-content-md-center pt-5">
                <div class="col-12 col-md-10">
                  <div class="row m-0 justify-content-center">
                    <div class="col-12 col-sm-11 col-md-10 col-lg-6 pb-5" v-for="gender in genders" :key="gender">
                      <div class="card card-white p-3">
                        <div class="card-body pb-0">
                          <h3 class="card-title text-center mb-3">
                            {{gender}}
                          </h3>
                          <ol v-for="characterList in characters.filter(e => e.gender === gender)" :key="characterList.gender">
                            <li v-for="character in characterList.characters" :key="character">
                              <NuxtLink :to="`/personajes/${character}`">{{character}}</NuxtLink>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
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
  const data = await queryContent('characters-gender').only("gender").findOne()
  const characters = data.gender
  const genders = characters.filter((gender, index, array) => {
    return index === array.findIndex((e) => e.gender === gender.gender)
  }).map(episode => episode.gender)
</script>