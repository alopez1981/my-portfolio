<template>
  <section
    class="grid grid-cols-1 gap-4 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr]"
  >
    <h2 class="text-sm font-bold uppercase tracking-wide text-blue-500">
      {{ title }}
    </h2>

    <p v-if="content == null" class="italic text-ink-faint">
      {{ emptyLabel }}
    </p>
    <p v-else-if="typeof content === 'string'" class="max-w-2xl text-ink-soft">
      {{ content }}
    </p>
    <ul v-else class="max-w-2xl list-disc space-y-1.5 pl-5 text-ink-soft">
      <li v-for="(item, index) in content" :key="index">{{ item }}</li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  content: { type: [String, Array], default: null },
  emptyLabel: { type: String, required: true },
});
</script>
