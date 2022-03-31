<template>
  <div class="container">
    <div class="row">
      <h1>This is Form</h1>
      <h3>The content of this field is synchronized with a get param</h3>
      <form>
        <div class="form-group"><input type="text" v-model="input" class="form-control" id="name"
            placeholder="Your name"></div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {

    name: 'FormPage',
    data() {
      return {
        input: this.$route.query.input
      }
    },
    watch: {
      input(newVal) {
        this.$router.push({
          query: {
            ...this.$route.query,
            input: newVal
          }
        });
      },
      '$route.query.foo': function (val) {
        this.foo = val;
      }
    },
    components: {},
    methods: {},
    mounted() {
    },
  }
</script>
<style>
  #app {}
</style>