<template>
  <div v-if="project" class="mx-auto max-w-4xl px-6 py-16">
    <router-link
      to="/case-studies"
      class="text-sm font-bold uppercase tracking-wide text-ink-soft hover:text-blue-500"
    >
      ← {{ t("caseStudyDetail.back") }}
    </router-link>

    <div class="mt-6 flex flex-wrap items-start justify-between gap-3">
      <h1 class="text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
        {{ localize(project.title, locale) }}
      </h1>
      <StatusBadge :status="project.status" />
    </div>
    <p class="mt-4 max-w-2xl text-lg text-ink-soft">
      {{ localize(project.summary, locale) }}
    </p>

    <div class="mt-8 flex flex-wrap gap-3">
      <CtaButton :href="project.repositoryUrl" variant="outline">{{
        t("caseStudyDetail.repository")
      }}</CtaButton>
      <CtaButton :href="project.demoUrl" variant="outline">{{
        t("caseStudyDetail.demo")
      }}</CtaButton>
    </div>
    <p
      v-if="!project.repositoryUrl || !project.demoUrl"
      class="mt-2 text-sm font-bold uppercase tracking-wide text-ink-faint"
    >
      {{ t("caseStudyDetail.notProvidedYet") }}
    </p>

    <div class="mt-10">
      <CaseStudySection
        :title="t('caseStudyDetail.problem')"
        :content="localize(project.problem, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.context')"
        :content="localize(project.context, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.objectives')"
        :content="localize(project.objectives, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.myRole')"
        :content="localize(project.myRole, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.stakeholders')"
        :content="localize(project.stakeholders, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.architecture')"
        :content="localize(project.architecture, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.milestones')"
        :content="localize(project.milestones, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.dependencies')"
        :content="localize(project.dependencies, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.risks')"
        :content="localize(project.risks, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.technicalDecisions')"
        :content="localize(project.technicalDecisions, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.deliveryStrategy')"
        :content="localize(project.deliveryStrategy, locale)"
        :empty-label="emptyLabel"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.metrics')"
        :content="localize(project.metrics, locale)"
        :empty-label="t('caseStudyDetail.metricsPending')"
      />
      <CaseStudySection
        :title="t('caseStudyDetail.lessonsLearned')"
        :content="localize(project.lessonsLearned, locale)"
        :empty-label="emptyLabel"
      />
    </div>
  </div>

  <div v-else class="mx-auto max-w-2xl px-6 py-24 text-center">
    <h1 class="text-3xl font-extrabold text-ink">
      {{ t("caseStudyDetail.notFoundTitle") }}
    </h1>
    <p class="mt-2 text-ink-soft">{{ t("caseStudyDetail.notFoundBody") }}</p>
    <router-link
      to="/case-studies"
      class="mt-6 inline-block text-sm font-bold uppercase tracking-wide text-ink hover:text-blue-500"
    >
      ← {{ t("caseStudyDetail.back") }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import CtaButton from "@/components/ui/CtaButton.vue";
import StatusBadge from "@/components/ui/StatusBadge.vue";
import CaseStudySection from "@/components/ui/CaseStudySection.vue";
import { getProjectBySlug } from "@/data/projects";
import { localize } from "@/utils/localize";
import { useMeta } from "@/utils/useMeta";

const { t, locale } = useI18n();
const route = useRoute();

const project = computed(() => getProjectBySlug(route.params.slug));
const emptyLabel = computed(() => t("caseStudyDetail.notProvidedYet"));

useMeta(() => ({
  title: project.value
    ? `${localize(project.value.title, locale.value)} | ${t("meta.titleSuffix")}`
    : `${t("caseStudyDetail.notFoundTitle")} | ${t("meta.titleSuffix")}`,
  description: project.value
    ? localize(project.value.summary, locale.value)
    : t("caseStudyDetail.notFoundBody"),
}));
</script>
