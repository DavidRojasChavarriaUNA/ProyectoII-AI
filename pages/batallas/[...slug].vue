<template>
    <main class="container-fluid p-0">
        <HeaderView />
        <div class="bg-image" id="divBatallas">
            <section class="fondoEspecialGris">
                <div class="row m-0">
                    <div class="col-12 offset-md-1 col-md-10 p-5">
                        <article class="fondoEspecialBlanco p-3">
                            <h1 class="text-center">{{battle.name}}</h1>
                            <div class="row justify-content-md-center pt-5">
                                <div class="col-12 col-md-10 col-lg-8">
                                    <div class="row m-0">
                                        <div class="col-12 col-md-6">
                                            <div class="row">
                                                <div class="col-8 fw-bold">Año</div>
                                                <div class="col-4">{{battle.year}}</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 fw-bold">Reyes atacantes:</div>
                                                <div class="col-12">
                                                    <ul>
                                                        <li v-for="attacker_king in battle.attacker_king" :key="attacker_king">
                                                            <NuxtLink :to="`/personajes/${attacker_king}`">{{attacker_king}}</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 fw-bold">Casas atacantes:</div>
                                                <div class="col-12">
                                                    <ul>
                                                        <li v-show="battle.attacker_1.length > 0"><NuxtLink :to="`/casas/${battle.attacker_1}`">{{battle.attacker_1}}</NuxtLink></li>
                                                        <li v-show="battle.attacker_2.length > 0"><NuxtLink :to="`/casas/${battle.attacker_2}`">{{battle.attacker_2}}</NuxtLink></li>
                                                        <li v-show="battle.attacker_3.length > 0"><NuxtLink :to="`/casas/${battle.attacker_3}`">{{battle.attacker_3}}</NuxtLink></li>
                                                        <li v-show="battle.attacker_4.length > 0"><NuxtLink :to="`/casas/${battle.attacker_4}`">{{battle.attacker_4}}</NuxtLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-8 fw-bold">Resultado del ataque:</div>
                                                <div class="col-4">{{battle.attacker_outcome}}</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-8 fw-bold">Muerte mayor:</div>
                                                <div class="col-4">{{battle.major_death}}</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-8 fw-bold">Tamaño ejercito ataque:</div>
                                                <div class="col-4">{{battle.attacker_size}}</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 fw-bold">Comandantes ataque:</div>
                                                <div class="col-12">
                                                    <ul>
                                                        <li v-for="commander in battle.attacker_commander" :key="commander">
                                                            <NuxtLink :to="`/personajes/${commander}`">{{commander}}</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4 fw-bold">Localización:</div>
                                                <div class="col-8">{{battle.location}}</div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="row">
                                                <div class="col-8 fw-bold">Batalla número:</div>
                                                <div class="col-4">{{battle.battle_number}}</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 fw-bold">Reyes defensores:</div>
                                                <div class="col-12">
                                                    <ul>
                                                        <li v-for="defender_king in battle.defender_king" :key="defender_king">
                                                            <NuxtLink :to="`/personajes/${defender_king}`">{{defender_king}}</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 fw-bold">Casas defensoras:</div>
                                                <div class="col-12">
                                                    <ul>
                                                        <li v-show="battle.defender_1.length > 0"><NuxtLink :to="`/casas/${battle.defender_1}`">{{battle.defender_1}}</NuxtLink></li>
                                                        <li v-show="battle.defender_2.length > 0"><NuxtLink :to="`/casas/${battle.defender_2}`">{{battle.defender_2}}</NuxtLink></li>
                                                        <li v-show="battle.defender_3.length > 0"><NuxtLink :to="`/casas/${battle.defender_3}`">{{battle.defender_3}}</NuxtLink></li>
                                                        <li v-show="battle.defender_4.length > 0"><NuxtLink :to="`/casas/${battle.defender_4}`">{{battle.defender_4}}</NuxtLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-8 fw-bold">Tipo de batalla:</div>
                                                <div class="col-4">{{battle.battle_type}}</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-8 fw-bold">Gran captura:</div>
                                                <div class="col-4">{{battle.major_capture}}</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-8 fw-bold">Tamaño ejercito defensa:</div>
                                                <div class="col-4">{{battle.defender_size}}</div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 fw-bold">Comandantes ataque:</div>
                                                <div class="col-12">
                                                    <ul>
                                                        <li v-for="commander in battle.defender_commander" :key="commander">
                                                            <NuxtLink :to="`/personajes/${commander}`">{{commander}}</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4 fw-bold">Región:</div>
                                                <div class="col-8">{{battle.region}}</div>
                                            </div>
                                        </div>
                                        <h5>Nota:</h5>
                                        <p>{{battle.note}}</p>
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
    const paramHouseName = route.params.slug[0]

    const dataBattles = await queryContent('battles').findOne()
    const battles = dataBattles.body

    const battle = battles.find(battle => battle.battle_number == route.params.slug)

    if(battle){
        battle.attacker_king = battle.attacker_king.split("/");
        if(battle.attacker_king.length>1){
            battle.attacker_king[0] = battle.attacker_king[0] + ' ' + (battle.attacker_king[1].split(" "))[1]
        }
        battle.defender_king = battle.defender_king.split("/");
        if(battle.defender_king.length>1){
            battle.defender_king[0] = battle.defender_king[0] + ' ' + (battle.defender_king[1].split(" "))[1]
        }
        battle.attacker_commander = battle.attacker_commander.split(", ")
        battle.defender_commander = battle.defender_commander.split(", ")
    }

</script>