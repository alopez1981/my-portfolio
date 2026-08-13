<template>
  <div class="mx-auto max-w-5xl px-6 py-16">
    <p class="text-sm font-bold uppercase tracking-wide text-blue-500">
      {{ t("stackPage.title") }}
    </p>
    <h1
      class="mt-2 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl"
    >
      {{ t("stackPage.intro") }}
    </h1>

    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <SkillGroup
        v-for="group in techStackGroups"
        :key="group.id"
        :group="group"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import SkillGroup from "@/components/SkillGroup.vue";
import { techStackGroups } from "@/data/techStack";
import { useMeta } from "@/utils/useMeta";

const { t } = useI18n();

useMeta(() => ({
  title: `${t("stackPage.title")} | ${t("meta.titleSuffix")}`,
  description: t("stackPage.intro"),
}));
</script>
