<template>
  <a href="#main-content" class="skip-link">{{ t("nav.skipToContent") }}</a>

  <div class="flex min-h-screen flex-col bg-white font-sans text-ink">
    <NavBar />

    <main id="main-content" tabindex="-1" class="flex-1 pt-20">
      <router-view />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import NavBar from "@/components/NavBar.vue";
import SiteFooter from "@/components/SiteFooter.vue";

const { t } = useI18n();
</script>

<style>
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  background: #0052ff;
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  font-size: 0.9rem;
}

.skip-link:focus {
  left: 0;
}

:focus-visible {
  outline: 2px solid #0052ff;
  outline-offset: 2px;
}
</style>
