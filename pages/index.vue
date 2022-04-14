<template>
  <div class="flex">
    <Head />

    <div class="grid-container card">
      <Card />
    </div>
  </div>
</template>

<script>
import Head from '~/components/Main_Head'
export default {
  name: 'IndexPage',
  components: {
    Head,
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  margin: 0 0 0px 50px;
  min-width: 768px;
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