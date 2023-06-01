<template>
  <div class="h-[200px] grid row-start-2 row-end-3 mt-[30px] ml-[37px]">
    <div class="mb-[7px] text-[14px] font-bold">Filter</div>
    <div
      v-for="(label, ind) in buttonsData"
      class="mb-[5px]"
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
