<template>
  <div
    class="bg-secondary rounded-xl shadow-clickShadow mt-[18px] ml-[20px] grid row-start-2 row-end-4 mb-[24px] w-[80vw] md:w-[678px] h-[570px]"
  >
    <div class="w-full h-[42px] pl-[16px] pt-[12px] text-[14px] text-white">
      Certificates
    </div>
    <div
      class="w-full h-[30px] pl-[16px] pt-[10px] text-xs text-white bg-grey-dark-1"
    >
      Public
    </div>
    <template
      v-for="(data, index) in tableData"
      :key="index"
    >
      <div
        class="mr-[16px] h-[50px] ml-[16px] pt-[13px] pb-[13px] text-[16px] text-white border-b-[1px] border-b-grey-dark-1 md:w-[646px]"
        :class="tableData.length - 1 === index ? 'border-none' : ''"
      >
        {{ data }}
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
