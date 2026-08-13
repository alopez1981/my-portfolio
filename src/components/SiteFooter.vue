<template>
  <footer class="bg-ink px-6 py-14 text-white">
    <div class="mx-auto max-w-6xl">
      <p class="text-2xl font-extrabold tracking-tight">
        <SiteLogo />
      </p>

      <nav
        class="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-bold uppercase tracking-wide"
        :aria-label="t('footer.socialLabel')"
      >
        <a
          v-if="linkedinUrl"
          :href="linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >LinkedIn</a
        >
        <span v-else class="text-white/30">{{
          t("contactPage.linkedinPlaceholder")
        }}</span>

        <a
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >GitHub</a
        >
        <span v-else class="text-white/30">{{
          t("contactPage.githubPlaceholder")
        }}</span>

        <a :href="`mailto:${email}`" class="footer-link">{{ email }}</a>
      </nav>

      <p class="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
        &copy; {{ year }} Albert López — {{ t("footer.rights") }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { contactLinks } from "@/data/contact";
import SiteLogo from "@/components/ui/SiteLogo.vue";

const { t } = useI18n();
const { linkedinUrl, githubUrl, email } = contactLinks;

const year = new Date().getFullYear();
</script>

<style scoped>
.footer-link {
  @apply text-white transition hover:text-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500;
}
</style>
