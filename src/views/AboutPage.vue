<template>
  <div class="mx-auto max-w-6xl px-6 py-16">
    <p class="text-sm font-bold uppercase tracking-wide text-blue-500">
      {{ t("about.title") }}
    </p>
    <h1
      class="mt-2 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl"
    >
      {{ t("about.intro") }}
    </h1>

    <div class="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
      <img
        src="@/assets/img/foto-perfil.jpg"
        :alt="t('about.photoAlt')"
        class="aspect-[4/5] w-full max-w-xs rounded-3xl object-cover lg:col-span-4"
      />

      <div class="space-y-5 text-ink-soft lg:col-span-7 lg:col-start-6">
        <p>{{ t("about.paragraph1") }}</p>
        <p>{{ t("about.paragraph2") }}</p>
        <p>{{ t("about.paragraph3") }}</p>
        <p>{{ t("about.paragraph4") }}</p>
      </div>
    </div>

    <div class="mt-12 rounded-3xl bg-periwinkle p-8">
      <p class="text-sm font-bold uppercase tracking-wide text-blue-600">
        {{ t("about.positioningLabel") }}
      </p>
      <p class="mt-2 text-2xl font-extrabold text-ink">
        {{ t("about.positioningText") }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useMeta } from "@/utils/useMeta";

const { t } = useI18n();

useMeta(() => ({
  title: `${t("about.title")} | ${t("meta.titleSuffix")}`,
  description: t("about.intro"),
}));
</script>
