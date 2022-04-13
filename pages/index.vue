<template>
  <!-- <Tutorial />
  < -->
  <!-- <Card /> -->

  <div class="flex">
    <Head />
    <!-- <div v-for="pos in posts.splice(0, 5)" :key="pos.id"> -->
    <!-- </div> -->
    <div class="grid-container card">
      <Card />
    </div>
  </div>
  <!-- <div>
    <ul>
      <li v-for="pos in posts.splice(0, 5)" :key="pos.id">
        {{ pos.title }}
      </li>
      <li v-for="pho in listAlmbums" :key="pho.id">
        {{ pho.title }}
      </li>
    </ul>
  </div> -->
  <!-- <Beranda /> -->
</template>

<script>
// import { mapState } from 'vuex'
import Head from '~/components/Main_Head'
export default {
  name: 'IndexPage',
  components: {
    Head,
  },
  computed: {
    // ...mapState(['posts']),
    listAlmbums() {
      return this.$store.state.photos
    },
  },
  // created() {
  //   this.$store.dispatch('fetchIkk', null)
  // },
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  margin: 0 0 0px 50px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
}

/* .card {
  justify-items: start;
  background-color: aquamarine;
} */

/* .grid-container {
  display: grid;
  flex-direction: row;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
} */
</style>