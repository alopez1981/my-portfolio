<template>
  <article
    class="rounded-3xl bg-mist p-6 transition hover:-translate-y-1 hover:shadow-lg"
  >
    <span
      class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white"
    >
      {{ indexLabel }}
    </span>
    <h3 class="mt-4 text-lg font-extrabold text-ink">
      {{ localize(capability.title, locale) }}
    </h3>
    <p class="mt-2 text-sm leading-relaxed text-ink-soft">
      {{ localize(capability.description, locale) }}
    </p>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { localize } from "@/utils/localize";

const props = defineProps({
  capability: { type: Object, required: true },
  index: { type: Number, default: 0 },
});

const { locale } = useI18n();

const indexLabel = computed(() => String(props.index + 1).padStart(2, "0"));
</script>
