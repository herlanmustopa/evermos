<template>
  <!-- <router-link
    class="event-link"
    :to="{
      name: 'EventDetails',
    }"
  > -->
  <Skeleton
    v-if="!listAlbums"
    :count="7"
    width="200px"
    height="250px"
    class="flex justify-center gap-5 flex-wrap lg:justify-between mt-11"
  />
  <div v-else class="grid-container">
    <div v-for="poh in listAlbums.splice(0, 10)" :key="poh.id">
      <div class="event-card">
        <h4 class="text-truncate">{{ poh.title }}</h4>
        <div class="status">
          <img :src="poh.thumbnailUrl" />
        </div>
      </div>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CardView',
  data() {},
  computed: {
    ...mapState(['posts']),
    listAlbums() {
      return this.$store.getters.listAlbums
    },
  },
}
</script>

<style scoped>
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.grid-container {
  display: grid;
  gap: 30px 50px;
  flex-direction: row;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* background-color: #2196f3; */
  /* padding: 10px; */
}
.event-card {
  width: 200px;
  /* height: auto; */
  min-height: 250px;
  background: rgb(60, 62, 68);
  border-radius: 20px;
  overflow: hidden;
  padding: 10px 15px;
  /* margin-bottom: 24px; */
  margin-right: 50px;
  transition: all 0.2s linear;
  cursor: pointer;
  color: white;
}
.status {
  display: flex;
  justify-content: center;
}
.status-icon-r,
.status-icon-g {
  margin: auto 0;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(214, 61, 46);
  border-radius: 50%;
}
.status-icon-g {
  background: rgb(92 199 12);
}
img {
  margin-top: 5%;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>