<template>
  <main class="container-fluid p-0">
    <HeaderView />
    <div class="bg-image" id="divBatallas">
      <section class="fondoEspecialGris">
        <div class="row m-0">
          <div class="col-12 offset-md-1 col-md-10 p-5">
            <article class="fondoEspecialBlanco p-3">
              <h1 class="text-center">Batallas</h1>
              <div class="row justify-content-md-center pt-3">
                <div class="col-12 col-md-10">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Nombre de la batalla</th>
                          <th>Año</th>
                          <th>Region</th>
                          <th>Localización</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="battle in battles" :key="battle.battle_number">
                          <td>
                            <NuxtLink :to="`/batallas/${battle.battle_number}`">{{battle.name}}</NuxtLink>
                          </td>
                          <td>{{battle.year}}</td>
                          <td>{{battle.region}}</td>
                          <td>{{battle.location}}</td>
                        </tr>
                      </tbody>
                    </table>
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
  const data = await queryContent('battles').findOne()
  const battles = data.body
  console.log({
    battles
  });
</script>