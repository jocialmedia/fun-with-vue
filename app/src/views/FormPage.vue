<template>
  <div class="container">
    <div class="row">
      <h1>This is Form</h1>
      <h3>The content of this field is synchronized with a get param</h3>
      <form>
        <div class="form-group"><input type="text" v-model="input_field" class="form-control" id="name"
            placeholder="Your name"></div>
      </form><br><br>
      <table class="table table-bordered">
        <tr>
          <td>input_field: {{ input_field }}</td>
        </tr>
        <tr>
          <td>input_param: {{ input_param }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  export default {

    name: 'FormPage',
    data() {
      return {
        input_field: "",
        input_param: ""
      }
    },
    components: {},
    methods: {
      onClick() {
        console.log("Clicked");
        this.writeGetParamToData();
      },
      onChange() {
        console.log("On change in input field");
        this.writeGetParamToData("change_in_field");
      },
      onEnterKey() {
        console.log("On keyup");
        this.writeGetParamToData();
      },
      writeGetParamToData(who_dominates) {
        console.log("triggered function writeGetParamToData");

        if (who_dominates === undefined) {
          who_dominates = "unknown";
        }

        if (this.$route.query.name == undefined) {
          this.$router.push({
            query: {
              name: this.input_field
            }
          });
        } else if (this.$route.query.name.length === 0) {
          this.$router.push({
            query: {
              name: this.input_field
            }
          });

        } else if (who_dominates === "change_in_field") {
          this.input_param = this.input_field;
          this.$router.push({
            query: {
              name: this.input_field
            }
          });
        } else if (this.$route.query.name.length > 0 && who_dominates === "unknown" && this.$route.query.name.length >
          this.input_field.length) {
          this.input_param = this.$route.query.name;
          this.input_field = this.input_param;
        } else if (this.$route.query.name.length > 0 && this.$route.query.name.length < this.input_field.length) {
          this.input_param = this.input_field;
          this.$router.push({
            query: {
              name: this.input_field
            }
          });
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.onClick);
      document.getElementById("name").addEventListener('input', this.onChange);
    },
  }
</script>
<style>
  #app {}
</style>