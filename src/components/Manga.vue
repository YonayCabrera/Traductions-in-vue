<template>
<!-- <router-link :to="'/manga/' + data.id" tag="span" style="cursor: pointer" class="mt-4"> -->
<div>
<h3>Fuuka</h3>
<img src="https://vignette.wikia.nocookie.net/fuuka/images/4/45/Fuuka_Akitsuki.jpg/revision/latest?cb=20180320185742&path-prefix=es" class="imageOfManga">
</div>
<!-- </router-link> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["data"]
};
</script>

<style scoped>
    .imageOfManga {
        width: 100px;
        height: 200px;
    }
</style>


