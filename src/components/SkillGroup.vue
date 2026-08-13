<template>
  <section class="rounded-3xl bg-mist p-6">
    <h3 class="text-lg font-extrabold text-ink">
      {{ localize(group.title, locale) }}
    </h3>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="item in group.items"
        :key="item.name"
        class="rounded-pill bg-white px-4 py-2 text-sm"
      >
        <span class="font-bold text-ink">{{ item.name }}</span>
        <span class="text-ink-faint"> — {{ localize(item.note, locale) }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { localize } from "@/utils/localize";

defineProps({
  group: { type: Object, required: true },
});

const { locale } = useI18n();
</script>
