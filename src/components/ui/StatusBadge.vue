<template>
  <span
    class="inline-flex items-center rounded-pill px-3 py-1 text-xs font-bold uppercase tracking-wide"
    :class="colorClasses"
  >
    {{ label }}
  </span>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (value) =>
      ["planned", "in_progress", "available"].includes(value),
  },
});

const { t } = useI18n();

const label = computed(() => t(`status.${props.status}`));

const STYLES = {
  planned: "bg-mist text-ink-soft",
  in_progress: "bg-blue-50 text-blue-600",
  available: "bg-blue-500 text-white",
};

const colorClasses = computed(() => STYLES[props.status]);
</script>
