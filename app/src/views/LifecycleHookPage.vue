<template>
  <div class="container">
    <div class="row">
      <h1>This is about Lifecycle Hooks</h1>

      <div class="content">{{ SentenseOfTheDay }}</div>

      <img src="assets/vuejs_lifecycle.png" class="diagramm">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage',
    props: {},
    data() {
      return {
        SentenseOfTheDay: "Happyness is everything"
      }
    },
    components: {},
    methods: {

    },
    beforeCreate() {
      console.log("beforeCreate");
    },
    created() {
      console.log("created");
    },
    beforeMount() {
      console.log("beforeMount");
    },
    mounted() {
      console.log("mounted");
    },
    beforeUpdate(){
      console.log("beforeUpdate");
    },
    updated(){
      console.log("updated");
    },
    beforeUnmount(){
      console.log("beforeUnmount");
    },
    unmounted(){
      console.log("unmounted");
    }
  }
</script>

<style>
  .diagramm {
    margin-top: 300px;
    width: 500px !important;
  }
</style>