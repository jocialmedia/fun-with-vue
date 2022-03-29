<template>
  <div id="button_counter">
    <h2>This is Storage Component</h2>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Storage</th>
          <th>Content</th>
          <th>Persistence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>props</td>
          <td>{{ StringFromProps }} </td>
          <td>Data passed between components</td>
        </tr>
        <tr>
          <td>data</td>
          <td>{{ StringFromData }} </td>
          <td>Private memory of each component</td>   
        </tr>

        <tr>
          <td>Vuex Store (state management pattern + library)</td>
          <td>{{ store.StringFromStore }} </td>
          <td>Wiped when app is closed</td>
        </tr>
        <tr>
          <td>vuejs-storage</td>
          <td></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import {
    store
  } from '../store/store.js'

  export default {
    name: 'StorageTable',
    props: {
      StringFromProps: String
    },
    data() {
      return {
        store,
          StringFromData: "I am in the StringFromData"
      }
    },
  }
</script>

<style scoped>

</style>