<template>
    <header class="mb-1">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/images/header/logo.png" alt="logo" id="logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link textoMenu" to="/personajes">Personajes</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link textoMenu" to="/casas">Casas</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link textoMenu" to="/batallas">Batallas</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link textoMenu" to="/buscador">Buscador</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link textoMenu" to="/episodios">Temporadas y episodios</NuxtLink>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="btn btn-outline-light" id="btnMenu" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
</template>