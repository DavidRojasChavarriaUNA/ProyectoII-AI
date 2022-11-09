<template>
  <main class="container-fluid p-0">
    <HeaderView />
    <div class="bg-image" id="divPersonajes">
      <section class="fondoEspecialGris">
        <div class="row m-0">
          <div class="col-12 offset-md-1 col-md-10 p-5">
            <article class="fondoEspecialBlanco p-3">
              <h1 class="text-center">Personajes</h1>
              <div class="row justify-content-md-center pt-5">
                <div class="col-12 col-md-10">
                  <div class="row m-0 justify-content-md-center">
                    <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-6 col-lg-4 pb-5"
                      v-for="character in characters" :key="character.characterName">
                      <div class="card card-white p-3">
                        <img v-show="character.characterImageFull" :src="character.characterImageFull" class="card-img-top" alt="...">
                        <div class="card-body text-center pb-0">
                          <h4 class="card-title text-center">
                            <NuxtLink :to="`/personajes/${character.characterName}`">{{character.characterName}}</NuxtLink>
                          </h4>
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
  const data = await queryContent('characters').only('characters').findOne()
  const characters = data.characters
  console.log({
    characters
  });
</script>