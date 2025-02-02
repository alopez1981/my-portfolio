<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10"
  >
    <h1
      class="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
    >
      ¡Bienvenido a mi Portafolio!
    </h1>
    <p class="text-xl text-center mt-4 max-w-2xl">
      Aquí encontrarás algunos de mis proyectos más recientes en:
    </p>
    <router-link
      to="/projects"
      class="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition"
    >
      Explorar Proyectos
    </router-link>
  </div>
</template>
