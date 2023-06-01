import { computed, ref } from "vue";

export const useBreakpoints = () => {
  const viewportWidth = ref(window.innerWidth);

  window.addEventListener("resize", () => {
    viewportWidth.value = window.innerWidth;
  });

  return computed(() => ({
    isXs: viewportWidth.value < 640,
    isSm: viewportWidth.value >= 640,
    isMd: viewportWidth.value >= 768,
    isLg: viewportWidth.value >= 1024,
    isXl: viewportWidth.value >= 1280,
  }));
};
