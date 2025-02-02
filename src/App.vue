<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
    <nav
      class="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-md p-4 flex justify-around z-50"
    >
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link to="/projects" class="nav-link">Proyectos</router-link>
      <router-link to="/about" class="nav-link">Sobre Mí</router-link>
      <router-link to="/contact" class="nav-link">Contacto</router-link>
    </nav>

    <div class="pt-20">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.nav-link {
  @apply text-white text-lg font-semibold tracking-wide hover:text-blue-400 transition duration-300 relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background: #3b82f6;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>
