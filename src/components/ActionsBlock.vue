<template>
  <div
    class="h-[318px] ml-[36px] grid col-start-3 col-end-4 row-start-3 row-end-4 translate-y-[-25px]"
  >
    <div class="text-[14px] text-white mb-[22px] font-bold">Actions</div>
    <UIButton
      size="large"
      text="Create certificate"
    />
    <UIButton
      size="large"
      text="Import certificate"
    />

    <UIButton
      disabled
      size="large"
      text="Export private certificate to public"
    />

    <UIButton
      disabled
      size="large"
      text="Export certificate to mempool"
    />

    <UIButton
      disabled
      size="large"
      text="Delete certificate"
    />
  </div>
</template>

<script setup lang="ts">
import UIButton from "@/components/ui/UIButton.vue";
</script>

<style lang="scss" scoped></style>
