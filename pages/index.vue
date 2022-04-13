<template>
  <!-- <Tutorial />
  < -->
  <!-- <Card /> -->

  <div class="flex">
    <Head />

    <Card />
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
import Head from '~/components/Main_Head'
// import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  components: {
    Head,
  },
  computed: {
    // mapState(['posts']),
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
  /* background-color: blue; */

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
}
</style>