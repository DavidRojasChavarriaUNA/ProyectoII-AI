<template>
  <main class="container-fluid p-0">
    <HeaderView />
    <div class="bg-image" id="divIndex">
      <section class="fondoEspecialGris">
        <div class="row m-0 justify-content-md-center">
          <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-5 col-lg-3 pt-5 pb-5">
            <div class="card p-3">
              <h4 class="card-title text-center">Personajes</h4>
              <img src="/public/images/index/personajes.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center pb-0">
                <a href="/personajes" class="btn btn-primary">Ver</a>
              </div>
            </div>
          </div>
          <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-5 col-lg-3 pt-5 pb-5">
            <div class="card p-3">
              <h4 class="card-title text-center">Casas</h4>
              <img src="/public/images/index/casas.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center pb-0">
                <a href="/casas" class="btn btn-primary">Ver</a>
              </div>
            </div>
          </div>
          <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-5 col-lg-3 pt-5 pb-5">
            <div class="card p-3">
              <h4 class="card-title text-center">Batallas</h4>
              <img src="/public/images/index/batallas.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center pb-0">
                <a href="/batallas" class="btn btn-primary">Ver</a>
              </div>
            </div>
          </div>
          </div>
        <div class="row m-0 justify-content-md-center">
          <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-5 col-lg-3 pt-5 pb-5">
            <div class="card p-3">
              <h4 class="card-title text-center">Temporadas y episodios</h4>
              <img src="/public/images/index/episodios.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center pb-0">
                <a href="/episodios" class="btn btn-primary">Ver</a>
              </div>
            </div>
          </div>
          <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-5 col-lg-3 pt-5 pb-5">
            <div class="card p-3">
              <h4 class="card-title text-center">Personajes por genero</h4>
              <img src="/public/images/index/personajesGenero.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center pb-0">
                <a href="/genero" class="btn btn-primary">Ver</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterView />
  </main>
</template>