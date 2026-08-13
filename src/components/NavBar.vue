<template>
  <header
    class="fixed inset-x-0 top-0 z-50 overflow-hidden transition-[height] duration-300 ease-in-out"
    :class="isOpen ? 'h-screen bg-blue-500' : 'h-20 bg-ink'"
  >
    <div class="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
      <div class="flex items-center gap-4">
        <LanguageSwitcher />
        <router-link
          to="/"
          class="text-xl font-extrabold tracking-tight text-white"
          @click="closeMenu"
        >
          <SiteLogo />
        </router-link>
      </div>

      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        :class="isOpen ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        :aria-label="isOpen ? t('nav.menuClose') : t('nav.menuOpen')"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          viewBox="0 0 24 24"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7h16M4 12h16M4 17h16"
          />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <nav
      v-show="isOpen"
      class="mx-auto flex h-[calc(100%-5rem)] max-w-6xl flex-col justify-between px-6 pb-10"
      :aria-label="t('nav.mainLabel')"
    >
      <ul
        id="mobile-menu"
        class="mt-4 divide-y divide-white/20 border-t border-white/20"
      >
        <li v-for="link in links" :key="link.to">
          <router-link
            :to="link.to"
            class="block py-4 text-2xl font-bold text-white transition hover:opacity-70"
            @click="closeMenu"
          >
            {{ t(link.labelKey) }}
          </router-link>
        </li>
      </ul>

      <div class="pt-6">
        <router-link
          to="/contact"
          class="inline-block rounded-pill bg-white px-6 py-3 text-sm font-bold text-blue-500 transition hover:bg-mist"
          @click="closeMenu"
        >
          {{ t("hero.ctaContact") }} ↗
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import SiteLogo from "@/components/ui/SiteLogo.vue";

const { t } = useI18n();
const route = useRoute();
const isOpen = ref(false);

const links = [
  { to: "/", labelKey: "nav.home" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/capabilities", labelKey: "nav.capabilities" },
  { to: "/case-studies", labelKey: "nav.caseStudies" },
  { to: "/journey", labelKey: "nav.journey" },
  { to: "/stack", labelKey: "nav.stack" },
  { to: "/contact", labelKey: "nav.contact" },
];

function closeMenu() {
  isOpen.value = false;
}

watch(() => route.path, closeMenu);
</script>
