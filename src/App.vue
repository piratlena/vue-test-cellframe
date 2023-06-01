<template>
  <main>
    <UIContainer>
      <TheMenu />
      <TheHeader />
      <TableBoard />
      <FilterBlock />
      <ActionsBlock />
      <StatusBar />
    </UIContainer>
  </main>
</template>

<script setup lang="ts">
import UIContainer from "@/components/ui/UIContainer.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMenu from "@/components/the-menu/TheMenu.vue";
import TableBoard from "@/components/TableBoard.vue";
import FilterBlock from "@/components/FilterBlock.vue";
import ActionsBlock from "@/components/ActionsBlock.vue";
import StatusBar from "@/components/StatusBar.vue";
</script>

<style scoped></style>
