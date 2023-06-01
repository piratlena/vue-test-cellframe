<template>
  <div
    class="ml-[40px] grid col-start-3 col-end-4 row-start-3 row-end-4 mb-[74px]"
  >
    <div class="text-[14px] text-white mb-[24px]">Actions</div>
    <UIButton
      size="large"
      text="Create certificate"
    />
    <UIButton
      size="large"
      text="Create certificate"
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
