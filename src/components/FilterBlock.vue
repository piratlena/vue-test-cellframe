<template>
  <div class="grid row-start-2 row-end-3 mt-[36px] ml-[40px] mb-[8px]">
    <div class="mb-[24px]">Filter</div>
    <div
      v-for="(label, ind) in buttonsData"
      class="mb-32px"
    >
      <UIRadioButton
        :label="label"
        :key="ind"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import UIRadioButton from "@/components/ui/UIRadioButton.vue";

const buttonsData = ["Public certificates", "Private certificates", "Both"];
</script>

<style lang="scss" scoped></style>
