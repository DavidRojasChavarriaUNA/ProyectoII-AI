<template>
  <main class="container-fluid p-0">
    <HeaderView />
    <div class="bg-image" id="divCasas">
      <section class="fondoEspecialGris">
        <div class="row m-0">
          <div class="col-12 offset-md-1 col-md-10 p-5">
            <article class="fondoEspecialBlanco p-3">
              <h1 class="text-center">Casas</h1>
              <div class="row justify-content-md-center pt-3">
                <div class="col-12 col-md-10">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Nombre de la casa</th>
                          <th>Región</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="house in houses" :key="house.House_name">
                          <td>
                            <NuxtLink :to="`/casas/${house.House_name}`">{{house.House_name}}</NuxtLink>
                          </td>
                          <td>{{house.Region}}</td>
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
  const data = await queryContent('houses_v1').findOne()
  const houses = data.body
  console.log({
    houses
  });
</script>