<template>
  <div class="mx-auto max-w-6xl px-6 py-16">
    <p class="text-sm font-bold uppercase tracking-wide text-blue-500">
      {{ t("capabilitiesPage.title") }}
    </p>
    <h1
      class="mt-2 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl"
    >
      {{ t("capabilitiesPage.intro") }}
    </h1>

    <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <CapabilityCard
        v-for="(capability, index) in capabilities"
        :key="capability.id"
        :capability="capability"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import CapabilityCard from "@/components/CapabilityCard.vue";
import { capabilities } from "@/data/capabilities";
import { useMeta } from "@/utils/useMeta";

const { t } = useI18n();

useMeta(() => ({
  title: `${t("capabilitiesPage.title")} | ${t("meta.titleSuffix")}`,
  description: t("capabilitiesPage.intro"),
}));
</script>
