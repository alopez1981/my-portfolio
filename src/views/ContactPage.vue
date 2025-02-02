<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10"
  >
    <h1 class="text-5xl font-bold mb-6 text-blue-400 animate-fadeIn">
      Contacto
    </h1>
    <p class="text-xl text-center mb-4">Puedes contactarme en:</p>
    <a
      href="albertlopezsimon@gmail.com"
      class="text-xl text-blue-500 hover:text-blue-300 transition"
    >
      albertlopezsimon@gmail.com
    </a>
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
