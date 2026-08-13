<template>
  <div class="mx-auto max-w-4xl px-6 py-16">
    <p class="text-sm font-bold uppercase tracking-wide text-blue-500">
      {{ t("journeyPage.title") }}
    </p>
    <h1
      class="mt-2 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl"
    >
      {{ t("journeyPage.intro") }}
    </h1>

    <ol class="mt-6">
      <TimelineItem v-for="entry in timeline" :key="entry.id" :entry="entry" />
    </ol>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import TimelineItem from "@/components/TimelineItem.vue";
import { timeline } from "@/data/timeline";
import { useMeta } from "@/utils/useMeta";

const { t } = useI18n();

useMeta(() => ({
  title: `${t("journeyPage.title")} | ${t("meta.titleSuffix")}`,
  description: t("journeyPage.intro"),
}));
</script>
