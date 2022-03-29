<template>
  <div class="container">
    <div class="row">
      <h1>This is about Storage</h1>

      <StorageTable StringFromProps="I am in the StringFromProps" />

    </div>
  </div>
</template>

<script>
  import StorageTable from '@/components/StorageTable.vue'

  export default {
    name: 'AboutPage',
    components: {
      StorageTable
    }
  }
</script>

<style>
  #app {}
</style>