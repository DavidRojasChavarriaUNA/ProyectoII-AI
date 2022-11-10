<template>
    <main class="container-fluid p-0">
        <HeaderView />
        <div class="bg-image" id="divCasas">
            <section class="fondoEspecialGris">
                <div class="row m-0">
                    <div class="col-12 offset-md-1 col-md-10 p-5">
                        <article class="fondoEspecialBlanco p-3">
                            <h1 class="text-center">Casa: {{house.House_name}}</h1>
                            <h2 class="text-center pt-3">Región: {{house.Region}}</h2>
                            <h3 class="text-center">Miembros:</h3>
                            <div class="row justify-content-md-center pt-5">
                                <div class="col-12 col-md-10">
                                    <div v-if="hayMiembros" class="row m-0 justify-content-md-center" >
                                        <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-6 col-lg-4 pb-5"
                                            v-for="character in houseCharacters" :key="character.characterName">
                                            <div class="card card-white p-3">
                                                <img v-show="character.characterImageFull"
                                                    :src="character.characterImageFull" class="card-img-top" alt="...">
                                                <div class="card-body text-center pb-0">
                                                    <h4 class="card-title text-center">
                                                        <NuxtLink :to="`/personajes/${character.characterName}`">
                                                            {{character.characterName}}</NuxtLink>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="row m-0 justify-content-md-center">
                                        <p class="text-center">No se encontraron miembros en nuestros registros</p>
                                    </div>
                                </div>
                            </div>
                            <div class="text-end">
                                <NuxtLink :to="`/casas`">Regresar</NuxtLink>
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
    const paramHouseName = route.params.slug[0]
    const dataHouses = await queryContent('houses_v1').findOne()
    const houses = dataHouses.body
    const house = houses.find(house => house.House_name == route.params.slug)

    const dataCharacters = await queryContent('characters').only('characters').findOne()
    const allCharacters = dataCharacters.characters

    const houseCharacters = allCharacters.filter(character => {
        if(character.houseName == undefined)
            return false
        if(Array.isArray(character.houseName)){
            let incluir = false;
            character.houseName.forEach((houseName) => {
                if(houseName == paramHouseName || houseName.includes(paramHouseName) || paramHouseName.includes(houseName))
                    incluir = true;
            });
            return incluir;
        }
        else if(character.houseName == paramHouseName || character.houseName.includes(paramHouseName) || paramHouseName.includes(character.houseName))
            return true
        return false
    });

    const hayMiembros = (houseCharacters)? houseCharacters.length>0 : false
    
</script>