<template>
  <div class="marquee">
    <div class="marquee__track">
      <span
        v-for="(item, index) in items"
        :key="`a-${index}`"
        class="marquee__item"
        >{{ item }}</span
      >
      <span
        v-for="(item, index) in items"
        :key="`b-${index}`"
        class="marquee__item"
        aria-hidden="true"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
});
</script>

<style scoped>
.marquee {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 8%,
    black 92%,
    transparent
  );
}

.marquee__track {
  display: flex;
  width: max-content;
  gap: 2.5rem;
  animation: marquee-scroll 22s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__item {
  flex-shrink: 0;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 1.25rem));
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
  }
}
</style>
