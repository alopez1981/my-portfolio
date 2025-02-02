<template>
  <div
    class="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-10"
  >
    <h1 class="text-5xl font-extrabold text-blue-400 mb-6 animate-fadeIn">
      Sobre Mí
    </h1>

    <div class="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
      <img
        :src="require('@/assets/img/foto-perfil.jpg')"
        alt="Foto de perfil"
        class="rounded-full shadow-lg w-48 h-48 object-cover"
      />

      <div class="text-center md:text-left max-w-xl">
        <p class="text-xl text-gray-300">
          ¡Hola! Soy <span class="text-blue-400 font-semibold">Albert</span>, un
          apasionado desarrollador backend con experiencia en Laravel, PHP y
          Python. Me encanta la arquitectura de software y la optimización de
          sistemas.
        </p>
        <p class="mt-4 text-lg text-gray-400">
          Actualmente, trabajo en el desarrollo de aplicaciones robustas
          siguiendo principios **SOLID, DDD y CQRS**.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}
</style>
