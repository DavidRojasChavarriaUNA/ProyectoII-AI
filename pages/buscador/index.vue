<template>
  <main class="container-fluid p-0">
    <HeaderView />
    <div class="bg-image" id="divBuscador">
      <section class="fondoEspecialGris">
        <div class="row m-0">
          <div class="col-1 col-sm-2 col-md-3"></div>
          <div class="col-10 col-sm-8 col-md-6 p-5">
            <form class="fondoEspecialBlanco p-3">
              <h3 class="text-center">Busque en el universo de Game of Thrones</h3>
              <div class="mb-3">
                <label for="txtPersonaje" class="form-label">Personaje</label>
                <input type="text" class="form-control" id="txtPersonaje">
              </div>
              <div class="mb-3">
                <label for="txtCasa" class="form-label">Casa</label>
                <input type="text" class="form-control" id="txtCasa">
              </div>
              <div class="mb-3">
                <label for="txtBatalla" class="form-label">Batalla</label>
                <input type="text" class="form-control" id="txtBatalla">
              </div>
              <div class="mb-3">
                <label for="txtTemporadaCapitulo" class="form-label">Temporada o capitulo</label>
                <input type="text" class="form-control" id="txtTemporadaCapitulo">
              </div>
              <div class="mb-3 text-center">
                <button type="submit" class="btn btn-primary">Buscar</button>
              </div>
            </form>
          </div>
          <div class="col-1 col-sm-2 col-md-3"></div>
        </div>
      </section>
    </div>
    <FooterView />
  </main>
</template>