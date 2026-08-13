<template>
  <div class="mx-auto max-w-6xl px-6 py-16">
    <p class="text-sm font-bold uppercase tracking-wide text-blue-500">
      {{ t("caseStudiesPage.title") }}
    </p>
    <h1
      class="mt-2 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl"
    >
      {{ t("caseStudiesPage.intro") }}
    </h1>

    <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <CaseStudyCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import CaseStudyCard from "@/components/CaseStudyCard.vue";
import { projects } from "@/data/projects";
import { useMeta } from "@/utils/useMeta";

const { t } = useI18n();

useMeta(() => ({
  title: `${t("caseStudiesPage.title")} | ${t("meta.titleSuffix")}`,
  description: t("caseStudiesPage.intro"),
}));
</script>
