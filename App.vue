<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
    <router-link class="nav-link" to="/">Каталог</router-link> 
        </li>
        <li class="nav-item">
    <router-link class="nav-link" to="/about">О нас</router-link> 
        </li>
        <li class="nav-item">
    <router-link class="nav-link" to="/basket">Корзина</router-link> 
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style>

</style>
