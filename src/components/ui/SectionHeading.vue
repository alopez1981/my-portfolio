<template>
  <div class="flex flex-wrap items-end justify-between gap-4">
    <div>
      <p class="text-sm font-bold uppercase tracking-wide text-blue-500">
        {{ eyebrow }}
      </p>
      <h2
        class="mt-1 text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
      >
        <slot />
        <span v-if="$slots.accent" class="block text-blue-500"
          ><slot name="accent"
        /></span>
      </h2>
    </div>
    <router-link
      v-if="cta"
      :to="cta.to"
      class="text-sm font-bold uppercase tracking-wide text-ink transition hover:text-blue-500"
    >
      {{ cta.label }} →
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: [String, Number], required: true },
  cta: { type: Object, default: null },
});
</script>
