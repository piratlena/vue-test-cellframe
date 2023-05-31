<template>
  <div
    class="w-[180px] h-[673px] shadow-innerLightShadow pt-[15px] rounded-br-2xl bg-primary grid row-start-1 row-end-4"
  >
    <a href="/"><IconLogo class="translate-x-[-10px] pl-[24px]" /></a>

    <nav class="pt-[20px]">
      <ul class="flex flex-col items-start text-white text-[13px] font-normal">
        <li
          v-for="item in menuItems"
          :key="item.id"
          class="cursor-pointer w-[170px] h-[52px] pt-[16px] hover:rounded-r-lg hover:shadow-clickShadow"
        >
          <a
            class="flex w-full items-center pl-[24px]"
            href=""
            ><component
              :is="item.icon"
              class="mr-[16px]"
            /><span>{{ item.title }}</span></a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import IconLogo from "@/components/icons/IconLogo.vue";
import IconWallet from "@/components/icons/menu/IconWallet.vue";
import IconDex from "@/components/icons/menu/IconDex.vue";
import IconClock from "@/components/icons/menu/IconClock.vue";
import { menuItems } from "@/data/menuItems";
</script>

<style lang="scss" scoped></style>
