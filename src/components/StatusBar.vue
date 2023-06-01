<template>
  <div
    class="grid col-start-1 col-end-4 bg-primary h-[42px] w-[1280px] shadow-shadowUp"
  >
    <div class="flex flex-cols justify-between w-[941px] m-auto">
      <div
        class="flex flex-cols items-center"
        v-for="(data, index) in dataStatusBar"
        :key="index"
      >
        <div class="mr-[8px] text-xs font-medium">{{ data }}</div>
        <div class="circle rounded-full h-[8px] w-[8px]"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dataStatusBar = ["Cellnet", "Mainnet", "Somenet", "Testnet"];
</script>

<style scoped>
.circle {
  background: radial-gradient(#a9e81c, #8ecc00);
}
</style>
