<template>
  <div class="container">
    <div class="row">
      <h1>This is about Lifecycle Hooks</h1>

      <h2>When are the hooks triggered?</h2>
      <pre>More info in console.<hr>{{hooksdata}}</pre>

      <img src="assets/vuejs_lifecycle.png" class="diagramm">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage',
    props: {
      hooks2: {
        beforeCreate: "",
        created: "",
        beforeMount: "",
        mounted: "",
        beforeUpdate: "",
        updated: "",
        beforeUnmount: "",
        unmounted: ""
      }
    },
    data() {
      return {
        timestamp: "",
        SentenseOfTheDay: "Happyness is everything",
        hooksdata: {
          setup: "",
          beforeCreate: "",
          created: "",
          beforeMount: "",
          mounted: "",
          beforeUpdate: "",
          updated: "",
          beforeUnmount: "",
          unmounted: ""
        }
      }
    },
    components: {},
    methods: {
      getTimestamp: function (name) {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today
          .getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        let result = "fun: " + Date.now() + " " + name + " | " + dateTime;
        console.log(result);
        return result;
      }
    },
    setup() {
      // No data set up yet, no functions available
      localStorage.setItem('fwv_setup', Date.now())
      console.log("log: " + Date.now() + " setup");
    },
    beforeCreate() {
      // No data set up yet, no functions available
      localStorage.setItem('fwv_beforeCreate', Date.now())
      console.log("log: " + Date.now() + " beforeCreate");
    },
    created() {
      this.hooksdata.created = this.getTimestamp("created");
      console.log("log: " + Date.now() + " created");
      this.hooksdata.setup = localStorage.getItem('fwv_setup');
      this.hooksdata.beforeCreate = localStorage.getItem('fwv_beforeCreate');
    },
    beforeMount() {
      this.hooksdata.beforeMount = this.getTimestamp("beforeMount");
      console.log("log: " + Date.now() + " beforeMount");
    },
    mounted() {
      this.hooksdata.mounted = this.getTimestamp("mounted");
      console.log("log: " + Date.now() + " mounted");
    },
    beforeUpdate() {
      this.hooksdata.beforeUpdate = this.getTimestamp("beforeUpdate");
      console.log("log: " + Date.now() + " beforeUpdate");
    },
    updated() {
      this.hooksdata.updated = this.getTimestamp("updated");
      console.log("log: " + Date.now() + " updated");
    },
    beforeUnmount() {
      this.hooksdata.beforeUnmount = this.getTimestamp("beforeUnmount");
      console.log("log: " + Date.now() + " beforeUnmount");
    },
    unmounted() {
      this.hooksdata.unmounted = this.getTimestamp("unmounted");
      console.log("log: " + Date.now() + " unmounted");
    },

  }
</script>

<style>
  .diagramm {
    margin-top: 300px;
    width: 500px !important;
  }
</style>