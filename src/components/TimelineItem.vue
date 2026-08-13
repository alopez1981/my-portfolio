<template>
  <li
    class="grid grid-cols-1 gap-4 border-t border-line py-8 sm:grid-cols-[8rem_1fr]"
  >
    <p class="text-sm font-bold uppercase tracking-wide text-blue-500">
      {{ entry.period }}
    </p>

    <div class="max-w-2xl">
      <h3 class="text-2xl font-extrabold text-ink">
        {{ localize(entry.officialTitle, locale) }}
      </h3>

      <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
        <li
          v-for="(item, index) in localize(entry.responsibilities, locale)"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>

      <p class="mt-4 rounded-2xl bg-periwinkle p-4 text-sm text-ink-soft">
        <span class="text-xs font-bold uppercase tracking-wide text-blue-600">
          {{ t("journeyPage.positioningLabel") }}
        </span>
        <br />
        {{ localize(entry.positioningNote, locale) }}
      </p>
    </div>
  </li>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { localize } from "@/utils/localize";

defineProps({
  entry: { type: Object, required: true },
});

const { t, locale } = useI18n();
</script>
