<template>
  <component
    :is="tag"
    v-bind="linkProps"
    class="inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    :class="[variantClasses, { 'cursor-not-allowed opacity-40': isDisabled }]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  to: { type: String, default: null },
  href: { type: String, default: null },
  variant: { type: String, default: "primary" },
});

const isDisabled = computed(() => !props.to && !props.href);
const tag = computed(() =>
  props.to ? RouterLink : props.href ? "a" : "button",
);

const linkProps = computed(() => {
  if (props.to) return { to: props.to };
  if (props.href)
    return { href: props.href, target: "_blank", rel: "noopener noreferrer" };
  return { type: "button", disabled: true, "aria-disabled": "true" };
});

const VARIANTS = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  light: "bg-white text-ink hover:bg-mist",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
};

const variantClasses = computed(
  () => VARIANTS[props.variant] ?? VARIANTS.primary,
);
</script>
