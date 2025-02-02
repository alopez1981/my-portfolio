<template>
  <div
    class="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20 px-10"
  >
    <h1 class="text-5xl font-extrabold text-blue-400 mb-8">Mis Proyectos</h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
      >
        <img
          :src="project.image"
          alt="Project Image"
          class="rounded-lg mb-4 w-full h-40 object-cover"
        />
        <h2 class="text-2xl font-bold text-white">{{ project.title }}</h2>
        <p class="text-gray-400 mt-2">{{ project.description }}</p>
        <a
          :href="project.link"
          target="_blank"
          class="mt-4 inline-block text-blue-400 hover:text-blue-300 transition"
        >
          Ver Proyecto →
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Gestión de Divisas",
          description:
            "API en Laravel para manejar conversiones de moneda. Respetando principios SOLID, CQRS y DDD",
          link: "https://github.com/alopez1981/currency.git",
          image: "https://s",
        },
        {
          id: 2,
          title: "Analizador de Datos",
          description:
            "Script en Python para procesamiento de grandes volúmenes de datos.",
          link: "#",
          image: "https://source.unsplash.com/400x300/?data,analysis",
        },
        {
          id: 3,
          title: "Gestión de empleados",
          description: "Aplicación web en PHP para gestión de trabajadores.",
          link: "https://github.com/alopez1981/gestion-empleados.git",
          image: "https://source.unsplash.com/400x300/?invoice,technology",
        },
      ],
    };
  },
};
</script>
