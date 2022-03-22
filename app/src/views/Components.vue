<template>
<h1>This is Components</h1>
  <ButtonCounter />
  <RandomColorBox />
</template>

<script>
import ButtonCounter from '@/components/ButtonCounter.vue'
import RandomColorBox from '@/components/RandomColorBox.vue'

export default {
  name: 'HomePage',
  components: {
    ButtonCounter,
    RandomColorBox
  }
}
</script>

<style>
#app {}
</style>
