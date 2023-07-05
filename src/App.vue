<template>
  <PageHeader/>
  <router-view path="$router.key" />
  <PageFooter/>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue';
import './styles/styles.css'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
@import '/css/main.min.css';
</style>
