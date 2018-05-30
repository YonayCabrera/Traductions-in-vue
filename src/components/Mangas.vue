<template>
  <div>
    <!-- <div v-for="manga in mangas" > -->
      <manga/>
    <!-- </div>  -->
    <p>
      Esto son mangas
    </p>
  </div>
</template>

<script>
import Manga from "./Manga";
const axios = require("axios");
export default {
  data() {
    return {
      route: window.location.hash,
      title: "",
      mangas: []
    };
  },
  created() {
    mangas.push("hola");
  },
  methods: {
    findManga
  },
  components: {
    Manga
  },
  watch: {
    // "$route.query.search": function(search) {
    //   this.title = search;
    //   this.findManga();
    // }
  }
};

function findManga() {
  // axios
  //   .get(
  //     `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${
  //       this.title
  //     }&apikey=fa0046ab7a255338beec45010af54127`
  //   )
  //   .then(response => {
  //     this.mangas = response.data.data.results;
  //     this.$router.push({ path: "/", query: { search: this.title } });
  //   })
  //   .catch(err => console.log(err));
}
</script>
