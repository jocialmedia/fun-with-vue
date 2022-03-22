<template>
  <h2>Component RandomColorBox</h2>
  <div v-on:click="getNewColor" :style="colorBoxStyle" id="random">Click me to change the color
  </div>
</template>

<script>
  export default {
    name: 'RandomColorBox',
    props: {
      msg: String
    },
    data(){
       return{
         colors: ["red", "green", "yellow", "blue"],
         colorBoxStyle:{
            backgroundColor: "#16a085" 
            },
           }
         },
    methods: {
      getNewColor: function () {
        let random = Math.floor(Math.random() * this.colors.length);
        this.colorBoxStyle.backgroundColor = this.colors[random];
      }
    }
  }
</script>

<style scoped>
  #random {
    height: 100px;
    width: auto;
    border: 1px solid #000;
    padding-top: 15px;
    text-align: center;
  }
</style>