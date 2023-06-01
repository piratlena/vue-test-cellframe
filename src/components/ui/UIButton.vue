<template>
  <button
    v-if="disabled"
    class="flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer bg-[#B0AEB9] mb-[20px]"
    :class="[
      size === 'small' ? 'w-[218px] h-[36px]  text-base' : '',
      size === 'large' ? 'w-[318px] h-[36px]  text-base' : '',
    ]"
  >
    {{ text }}
  </button>

  <button
    v-else
    class="flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-purple-def-1 to-purple-def-2 shadow-buttonShadow hover:bg-gradient-to-r hover:from-purple-hover-1 hover:to-purple-hover-2 focus:bg-gradient-to-r focus:from-purple-pressed-1 focus:to-purple-pressed-2 mb-[20px]"
    :class="[
      size === 'small' ? 'w-[218px] h-[36px]  text-base' : '',
      size === 'large' ? 'w-[318px] h-[36px]  text-base' : '',
    ]"
  >
    {{ text }}
  </button>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  size: {
    type: String as PropType<"small" | "large">,
  },
  text: {
    type: String,
    required: true,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
