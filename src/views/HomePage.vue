<template>
  <div>
    <section
      class="relative -mt-20 flex min-h-[38rem] flex-col items-center justify-center px-6 pt-20 text-center"
    >
      <div class="aurora-bg"></div>

      <div class="relative z-10 mx-auto max-w-3xl py-24">
        <span
          class="inline-block rounded-pill border border-white/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
        >
          {{ t("hero.subtitle") }}
        </span>

        <h1
          class="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl"
        >
          {{ titleLead }} <span class="text-blue-500">{{ titleEmphasis }}</span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg">
          {{ t("hero.valueProp") }}
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaButton to="/case-studies" variant="primary">{{
            t("hero.ctaCaseStudies")
          }}</CtaButton>
          <CtaButton to="/contact" variant="light">{{
            t("hero.ctaContact")
          }}</CtaButton>
        </div>
      </div>
    </section>

    <section
      class="bg-blue-500 py-6 text-sm font-bold uppercase tracking-wide text-white"
    >
      <MarqueeStrip :items="stackHighlights" />
    </section>

    <section class="mx-auto max-w-6xl px-6 py-20">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div class="lg:col-span-6">
          <h2
            class="text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
          >
            {{ t("about.positioningText") }}
          </h2>
          <p class="mt-4 max-w-md text-ink-soft">{{ t("hero.valueProp") }}</p>
          <div class="mt-4 h-1 w-16 rounded-pill bg-blue-500"></div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
          <div class="rounded-3xl bg-mist p-6">
            <p class="text-3xl font-extrabold text-blue-500">
              {{ capabilities.length }}
            </p>
            <p class="mt-1 text-sm font-bold text-ink-soft">
              {{ t("stats.capabilities") }}
            </p>
          </div>
          <div class="rounded-3xl bg-mist p-6">
            <p class="text-3xl font-extrabold text-blue-500">
              {{ projects.length }}
            </p>
            <p class="mt-1 text-sm font-bold text-ink-soft">
              {{ t("stats.caseStudies") }}
            </p>
          </div>
          <div class="rounded-3xl bg-mist p-6">
            <p class="text-3xl font-extrabold text-blue-500">
              {{ timeline.length }}
            </p>
            <p class="mt-1 text-sm font-bold text-ink-soft">
              {{ t("stats.journeyStops") }}
            </p>
          </div>
          <div class="rounded-3xl bg-periwinkle p-6">
            <p class="text-3xl font-extrabold text-blue-600">10+</p>
            <p class="mt-1 text-sm font-bold text-ink-soft">
              {{ t("stats.years") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="01"
        :cta="{ to: '/capabilities', label: t('home.capabilitiesCta') }"
      >
        {{ t("home.capabilitiesTitle") }}
      </SectionHeading>
      <p class="mt-4 max-w-xl text-ink-soft">
        {{ t("home.capabilitiesIntro") }}
      </p>
      <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CapabilityCard
          v-for="(capability, index) in capabilities"
          :key="capability.id"
          :capability="capability"
          :index="index"
        />
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading eyebrow="02">
        {{ t("home.caseStudiesTitle") }}
      </SectionHeading>
      <p class="mt-4 max-w-xl text-ink-soft">
        {{ t("home.caseStudiesIntro") }}
      </p>
      <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <CaseStudyCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="03"
        :cta="{ to: '/journey', label: t('home.journeyCta') }"
      >
        {{ t("home.journeyTitle") }}
      </SectionHeading>
      <p class="mt-4 max-w-xl text-ink-soft">{{ t("home.journeyIntro") }}</p>
      <ol class="mt-2">
        <TimelineItem
          v-for="entry in recentTimeline"
          :key="entry.id"
          :entry="entry"
        />
      </ol>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="04"
        :cta="{ to: '/stack', label: t('home.stackCta') }"
      >
        {{ t("home.stackTitle") }}
      </SectionHeading>
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="group in techStackGroups"
          :key="group.id"
          class="rounded-pill bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600"
        >
          {{ localize(group.title, locale) }}
        </span>
      </div>
    </section>

    <section class="halftone-bg px-6 py-24 text-center">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        {{ t("home.contactTitle") }}
      </h2>
      <p class="mx-auto mt-4 max-w-lg text-white/80">
        {{ t("home.contactIntro") }}
      </p>
      <div class="mt-8">
        <CtaButton to="/contact" variant="light">{{
          t("hero.ctaContact")
        }}</CtaButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import CtaButton from "@/components/ui/CtaButton.vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import MarqueeStrip from "@/components/ui/MarqueeStrip.vue";
import CapabilityCard from "@/components/CapabilityCard.vue";
import CaseStudyCard from "@/components/CaseStudyCard.vue";
import TimelineItem from "@/components/TimelineItem.vue";
import { capabilities } from "@/data/capabilities";
import { projects } from "@/data/projects";
import { timeline } from "@/data/timeline";
import { techStackGroups, stackHighlights } from "@/data/techStack";
import { localize } from "@/utils/localize";
import { useMeta } from "@/utils/useMeta";

const { t, locale } = useI18n();

const recentTimeline = computed(() => timeline.slice(-3));

const titleWords = computed(() => t("hero.title").split(" "));
const titleLead = computed(() => titleWords.value.slice(0, -1).join(" "));
const titleEmphasis = computed(() => titleWords.value.slice(-1).join(" "));

useMeta(() => ({
  title: t("meta.titleSuffix"),
  description: t("hero.valueProp"),
}));
</script>
