<template>
  <div
    class="hidden md:w-[180px] h-[673px] shadow-innerLightShadow pt-[5px] rounded-br-3xl bg-primary md:grid row-start-1 row-end-4 items-center"
  >
    <a
      href="/"
      class="ml-[10px]"
      ><IconLogo class="translate-y-[-9px]"
    /></a>

    <nav class="translate-y-[-26px]">
      <ul class="flex flex-col items-start text-white text-[13px] font-normal">
        <li
          v-for="item in menuItems"
          :key="item.id"
          class=""
        >
          <a
            class="flex cursor-pointer w-[170px] h-[52px] pt-[16px] pb-[16px] items-center pl-[24px] focus:rounded-r-lg focus:shadow-clickShadow"
            :href="item.href"
            ><component
              :is="item.icon"
              class="mr-[16px]"
            /><span>{{ item.title }}</span></a
          >
        </li>
      </ul>
    </nav>
  </div>

  <Transition name="menu">
    <div
      v-if="open"
      ref="mobileNav"
      class="w-[180px] h-[673px] fixed z-20 shadow-innerLightShadow pt-[5px] rounded-br-3xl bg-primary grid row-start-1 row-end-4 items-center"
    >
      <div
        class="relative h-4 w-4 flex flex-col justify-between cursor-pointer bg-transparent ml-[10px] md:hidden"
        @click="open = !open"
      >
        <span
          class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%+4px)] bg-white transition-transform"
          :class="open ? 'translate-y-0 rotate-45' : ''"
        ></span>
        <span
          class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-white transition-transform"
          :class="open ? 'scale-x-0' : ''"
        ></span>
        <span
          class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%-4px)] bg-white transition-transform"
          :class="open ? 'translate-y-0 -rotate-45' : ''"
        ></span>
      </div>
      <a
        href="/"
        class="ml-[10px]"
        ><IconLogo class="translate-y-[-9px]"
      /></a>

      <nav class="translate-y-[-26px]">
        <ul
          class="flex flex-col items-start text-white text-[13px] font-normal"
        >
          <li
            v-for="item in menuItems"
            :key="item.id"
            class=""
          >
            <a
              class="flex cursor-pointer w-[170px] h-[52px] pt-[16px] pb-[16px] items-center pl-[24px] focus:rounded-r-lg focus:shadow-clickShadow"
              :href="item.href"
              ><component
                :is="item.icon"
                class="mr-[16px]"
              /><span>{{ item.title }}</span></a
            >
          </li>
        </ul>
      </nav>
    </div>
  </Transition>

  <div
    ref="mobileNavBtn"
    class="relative mt-[20px] ml-[20px] h-4 w-8 flex flex-col justify-between cursor-pointer bg-transparent md:hidden"
    @click="open = !open"
  >
    <span
      class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%+4px)] bg-white transition-transform"
      :class="open ? '-translate-y-0 rotate-45' : ''"
    ></span>
    <span
      class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-white transition-transform"
      :class="open ? 'scale-x-0' : ''"
    ></span>
    <span
      class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-[calc(50%-4px)] bg-white transition-transform"
      :class="open ? '-translate-y-0 -rotate-45' : ''"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useBreakpoints } from "@/composables/useBreakpoints";
import IconLogo from "@/components/icons/IconLogo.vue";
import { menuItems } from "@/data/menuItems";

const open = ref(false);
const mobileNavBtn = ref<HTMLElement | null>(null);
const mobileNav = ref<HTMLElement | null>(null);

onMounted(() => {
  const handleClickOutside = (event: Event) => {
    if (!mobileNav.value || !mobileNavBtn.value) return;

    const includesMobileNav = event.composedPath().includes(mobileNav.value);
    const includesMobileNavBtn = event.composedPath().includes(mobileNav.value);

    if (open.value && !includesMobileNav && includesMobileNavBtn) {
      open.value = false;
    }
  };
  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
});

const breakpoints = useBreakpoints();

watch([open, breakpoints], ([open, breakpoints]) => {
  if (open && !breakpoints.isMd) {
    return (document.body.style.overflow = "hidden");
  }
  document.body.style.overflow = "auto";
});
</script>

<style scoped>
.menu-item {
  display: inline-block;
  margin-right: 10px;
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.4s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(-130px);
}
.menu-move {
  transition: transform 0.4s ease;
}
</style>
