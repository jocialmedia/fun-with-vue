<template>
<div id="button_counter">
<h2>Component ButtonCounter</h2>
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>

</style>
