<template>
    <main class="container-fluid p-0">
        <HeaderView />
        <div class="bg-image" id="divCasas">
            <section class="fondoEspecialGris">
                <div class="row m-0">
                    <div class="col-12 offset-md-1 col-md-10 p-5">
                        <article class="fondoEspecialBlanco p-3">
                            <h1 class="text-center">{{character.characterName}}</h1>
                            <div class="row justify-content-md-center pt-5">
                                <div class="offset-2 offset-sm-3 offset-md-0 col-8 col-sm-6 col-md-6 col-lg-4 pb-5">
                                    <div class="card card-white p-3" style="min-height: 300px;">
                                        <img :src="character.characterImageFull" class="card-img-top"
                                            :alt="`Imagen de ${character.characterName}`">
                                    </div>
                                </div>
                                <div class="offset-1 offset-sm-2 offset-md-0 col-10 col-sm-8 col-md-6 col-lg-6 pb-5">
                                    <div class="row" v-show="character.houseName">
                                        <div class="col-6 fw-bold">Casa:</div>
                                        <div class="col-6">
                                            <NuxtLink :to="`/casas/${character.houseName}`">{{character.houseName}}
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.actorName">
                                        <div class="col-6 fw-bold">Actor:</div>
                                        <div class="col-6"> {{character.actorName}}</div>
                                    </div>
                                    <div class="row" v-show="character.royal != undefined">
                                        <div class="col-6 fw-bold">Realeza:</div>
                                        <div class="col-6" v-if="character.royal">Si</div>
                                        <div class="col-6" v-else>No</div>
                                    </div>
                                    <div class="row" v-show="character.nickname">
                                        <div class="col-6 fw-bold">Apodo:</div>
                                        <div class="col-6"> {{character.nickname}}</div>
                                    </div>
                                    <div class="row" v-show="character.kingsguard">
                                        <div class="col-6 fw-bold">Guarda real:</div>
                                        <div class="col-6" v-if="character.kingsguard">Si</div>
                                        <div class="col-6" v-else>No</div>
                                    </div>
                                    <div class="row" v-show="character.parents">
                                        <div class="col-12 fw-bold">Padres:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="parent in character.parents" :key="parent">
                                                    <NuxtLink :to="`/personajes/${parent}`">{{parent}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.marriedEngaged">
                                        <div class="col-12 fw-bold">Casado o comprometico con:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="spouse in character.marriedEngaged" :key="spouse">
                                                    <NuxtLink :to="`/personajes/${spouse}`">{{spouse}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.parentOf">
                                        <div class="col-12 fw-bold">Padre de:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="child in character.parentOf" :key="child">
                                                    <NuxtLink :to="`/personajes/${child}`">{{child}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.siblings">
                                        <div class="col-12 fw-bold">Hermanos:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="sibling in character.siblings" :key="sibling">
                                                    <NuxtLink :to="`/personajes/${sibling}`">{{sibling}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.killedBy">
                                        <div class="col-12 fw-bold">Asesinado por:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="killer in character.killedBy" :key="killer">
                                                    <NuxtLink :to="`/personajes/${killer}`">{{killer}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.servedBy">
                                        <div class="col-12 fw-bold">Servido por:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="server in character.servedBy" :key="server">
                                                    <NuxtLink :to="`/personajes/${server}`">{{server}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.killed">
                                        <div class="col-12 fw-bold">Asesinó a:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="killed in character.killed" :key="killed">
                                                    <NuxtLink :to="`/personajes/${killed}`">{{killed}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.serves">
                                        <div class="col-12 fw-bold">Sirve a:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="master in character.serves" :key="master">
                                                    <NuxtLink :to="`/personajes/${master}`">{{master}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.guardedBy">
                                        <div class="col-12 fw-bold">Protegido por:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="guard in character.guardedBy" :key="guard">
                                                    <NuxtLink :to="`/personajes/${guard}`">{{guard}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.guardianOf">
                                        <div class="col-12 fw-bold">Guardian de:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="guarded in character.guardianOf" :key="guarded">
                                                    <NuxtLink :to="`/personajes/${guarded}`">{{guarded}}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row" v-show="character.allies">
                                        <div class="col-12 fw-bold">Aliados:</div>
                                        <div class="col-12">
                                            <ul>
                                                <li v-for="allied in character.allies" :key="allied">
                                                    <NuxtLink :to="`/personajes/${allied}`">{{allied}}</NuxtLink>
                                                </li>
                                            </ul>
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
    const data = await queryContent('characters').only('characters').findOne()
    const characters = data.characters
    const character = characters.find(character => character.characterName == route.params.slug)
</script>