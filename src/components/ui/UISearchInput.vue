<template>
  <div class="w-[224px] flex flex-row">
    <IconSearch class="absolute" />
    <input
      type="text"
      placeholder="Search"
      class="w-full bg-transparent border-b-[1px] border-b-grey-light-1 focus:outline-none placeholder-grey-light-1 pl-[33px]"
    />
  </div>
</template>

<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";
</script>

<style lang="scss" scoped></style>
