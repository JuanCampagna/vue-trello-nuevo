<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <RouterView class="containter"></RouterView>
  <AppFooter />
</template>

<style scoped>
.containter {
  padding-bottom: 4rem;
}
</style>
