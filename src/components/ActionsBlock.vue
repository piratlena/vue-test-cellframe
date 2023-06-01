<template>
  <div
    class="flex flex-col items-center md:h-[318px] md:ml-[36px] md:grid col-start-3 col-end-4 row-start-3 row-end-4 translate-y-[-25px]"
  >
    <div class="text-[14px] text-white mb-[22px] font-bold">Actions</div>
    <UIButton
      :size="breakpoints.isXs ? 'small' : 'large'"
      text="Create certificate"
    />
    <UIButton
      :size="breakpoints.isXs ? 'small' : 'large'"
      text="Import certificate"
    />

    <UIButton
      disabled
      :size="breakpoints.isXs ? 'small' : 'large'"
      text="Export private certificate to public"
    />

    <UIButton
      disabled
      :size="breakpoints.isXs ? 'small' : 'large'"
      text="Export certificate to mempool"
    />

    <UIButton
      disabled
      :size="breakpoints.isXs ? 'small' : 'large'"
      text="Delete certificate"
    />
  </div>
</template>

<script setup lang="ts">
import UIButton from "@/components/ui/UIButton.vue";
import { useBreakpoints } from "@/composables/useBreakpoints";

const breakpoints = useBreakpoints();
</script>

<style lang="scss" scoped></style>
