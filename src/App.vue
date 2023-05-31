<template>
  <main>
    <UIContainer>
      <TheMenu />
      <TheHeader />
      <TableBoard />
    </UIContainer>
  </main>
</template>

<script setup lang="ts">
import UIContainer from "@/components/ui/UIContainer.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMenu from "@/components/the-menu/TheMenu.vue";
import TableBoard from "@/components/TableBoard.vue";
</script>

<style scoped></style>
