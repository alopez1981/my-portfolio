<template>
  <div>
    <section
      class="-mt-20 bg-gradient-to-br from-ink to-blue-700 px-6 pb-28 pt-32 text-center text-white"
    >
      <p class="text-sm font-bold uppercase tracking-wide text-white/70">
        {{ t("contactPage.title") }}
      </p>
      <h1
        class="mx-auto mt-2 max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl"
      >
        {{ t("contactPage.intro") }}
      </h1>
    </section>

    <section class="mx-auto -mt-16 max-w-xl px-6 pb-16">
      <dl class="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-line">
        <div class="border-b border-line pb-5">
          <dt class="text-xs font-bold uppercase tracking-wide text-ink-faint">
            {{ t("contactPage.email") }}
          </dt>
          <dd class="mt-1">
            <a
              :href="`mailto:${contactLinks.email}`"
              class="text-lg font-bold text-ink hover:text-blue-500"
              >{{ contactLinks.email }}</a
            >
          </dd>
        </div>

        <div class="border-b border-line py-5">
          <dt class="text-xs font-bold uppercase tracking-wide text-ink-faint">
            {{ t("contactPage.linkedin") }}
          </dt>
          <dd class="mt-1">
            <a
              v-if="contactLinks.linkedinUrl"
              :href="contactLinks.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-lg font-bold text-ink hover:text-blue-500"
            >
              {{ contactLinks.linkedinUrl }}
            </a>
            <span v-else class="italic text-ink-faint">{{
              t("contactPage.linkedinPlaceholder")
            }}</span>
          </dd>
        </div>

        <div class="pt-5">
          <dt class="text-xs font-bold uppercase tracking-wide text-ink-faint">
            {{ t("contactPage.github") }}
          </dt>
          <dd class="mt-1">
            <a
              v-if="contactLinks.githubUrl"
              :href="contactLinks.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-lg font-bold text-ink hover:text-blue-500"
            >
              {{ contactLinks.githubUrl }}
            </a>
            <span v-else class="italic text-ink-faint">{{
              t("contactPage.githubPlaceholder")
            }}</span>
          </dd>
        </div>
      </dl>

      <p class="mt-6 text-center text-sm text-ink-faint">
        {{ t("contactPage.formNote") }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { contactLinks } from "@/data/contact";
import { useMeta } from "@/utils/useMeta";

const { t } = useI18n();

useMeta(() => ({
  title: `${t("contactPage.title")} | ${t("meta.titleSuffix")}`,
  description: t("contactPage.intro"),
}));
</script>
