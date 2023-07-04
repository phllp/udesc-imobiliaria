<template>
  <header class="bg-dark">
    <div class="container align-items-center">
      <nav class="navbar navbar-expand-lg bg-dark justify-content-between" data-bs-theme="dark">
        <a href="/" class="navbar-brand p-0 m-0 d-flex align-items-end">
          <img src="../assets/logo-imobiliaria.png" alt="Imobiliária" class="img-fluid w-25">
          <p class="text-light display-4">PINK AZUL</p>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="/" class="nav-link">Página Inicial</a>
          </li>
          <li class="nav-item">
            <a href="/catalog" class="nav-link">Imóveis</a>
          </li>
          <li class="nav-item">
            <a href="/team" class="nav-link">Nosso Time</a>
          </li>
          <li class="nav-item">
            <a href="/contact" class="nav-link">Entre em contato</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.custom-nav {
  height: 100px;
}
</style>
