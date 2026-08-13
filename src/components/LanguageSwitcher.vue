<template>
  <div
    class="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide"
    role="group"
    :aria-label="t('language.label')"
  >
    <template v-for="(code, index) in SUPPORTED_LOCALES" :key="code">
      <span v-if="index > 0" class="text-white/40" aria-hidden="true">/</span>
      <button
        type="button"
        class="px-0.5 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        :class="
          code === locale ? 'text-white' : 'text-white/50 hover:text-white'
        "
        :aria-label="t(`language.${code}`)"
        :aria-pressed="code === locale"
        @click="setLocale(code)"
      >
        {{ code }}
      </button>
    </template>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { SUPPORTED_LOCALES, setLocale } from "@/i18n";

const { t, locale } = useI18n();
</script>
