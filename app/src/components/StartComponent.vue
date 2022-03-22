<template>
  <div class="start">
    <ButtonCounter />
    <RandomColorBox />
  </div>
</template>

<script>
import ButtonCounter from './ButtonCounter.vue'
import RandomColorBox from './RandomColorBox.vue'

export default {
  name: 'StartComponent',
  components: {
    ButtonCounter,
    RandomColorBox
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
