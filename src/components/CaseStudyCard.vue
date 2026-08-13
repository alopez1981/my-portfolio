<template>
  <router-link
    :to="`/case-studies/${project.slug}`"
    class="group flex flex-col justify-between rounded-3xl bg-ink p-8 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
  >
    <div>
      <StatusBadge :status="project.status" />
      <h3 class="mt-4 text-2xl font-extrabold text-white">
        {{ localize(project.title, locale) }}
      </h3>
      <p class="mt-3 text-sm leading-relaxed text-white/60">
        {{ localize(project.summary, locale) }}
      </p>
    </div>

    <span
      class="mt-8 inline-flex items-center gap-1 text-sm font-bold text-white transition group-hover:text-blue-500"
    >
      {{ t("caseStudiesPage.viewCaseStudy") }}
      <span aria-hidden="true">→</span>
    </span>
  </router-link>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { localize } from "@/utils/localize";
import StatusBadge from "@/components/ui/StatusBadge.vue";

defineProps({
  project: { type: Object, required: true },
});

const { t, locale } = useI18n();
</script>
