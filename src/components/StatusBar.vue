<template>
  <div
    class="bg-primary shadow-shadowUp h-[42px] flex md:grid md:col-start-1 md:col-end-4 md:h-[42px] md:w-[1280px]"
  >
    <div
      class="flex m-auto md:flex-row md:justify-between md:w-[941px] md:m-auto"
    >
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
