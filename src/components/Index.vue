<template>
  <div>
    <p>{{ 'Hello' | translate }}</p>
    <!-- <p>{{this.funciona}}</p> -->
  </div>
</template>


<script>
const axios = require("axios");
export default {
  data() {
    return {
      // funciona: "aa"
    };
  },
  created() {
    console.log("es este")
    // axios.get("http://localhost:8085/").then(response => {
      // console.log("esto es back ",response)
      // funciona = response
    // }
    // )
  }
};