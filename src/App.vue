<template>
  <PageHeader/>
  <router-view path="$router.key" />
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
@import '/css/main.min.css';
</style>
