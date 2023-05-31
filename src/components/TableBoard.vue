<template>
  <div
    class="w-[678px] h-[570px] bg-secondary rounded-lg shadow-clickShadow mt-[24px] ml-[24px]"
  >
    <div class="w-full h-[42px] pl-[16px] pt-[12px] text-[14px] text-white">
      Certificates
    </div>
    <div
      class="w-full h-[30px] pl-[16px] pt-[8px] text-[12px] text-white bg-grey-dark-1"
    >
      Public
    </div>
    <template
      v-for="(data, index) in tableData"
      :key="index"
    >
      <div class="">
        <div
          class="w-[646px] mr-[16px] ml-[16px] pt-[13px] pb-[13px] text-[14px] text-white border-b-[1px] border-b-grey-dark-1"
        >
          {{ data }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  "core-t.0",
  "core-t.1",
  "core-t.2",
  "test.test.1",
  "test.test.2",
  "test.test.3",
  "test.test.4",
  "test.test.5",
  "test.test.6",
  "test.test.7",
];
</script>

<style lang="scss" scoped></style>
