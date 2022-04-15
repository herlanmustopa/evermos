<template>
  <!-- <router-link
    class="event-link"
    :to="{
      name: 'EventDetails',
    }"
  > -->
  <!-- <Skeleton
    v-if="!listAlbums"
    :count="7"
    width="200px"
    height="250px"
    class="flex justify-center gap-5 flex-wrap lg:justify-between mt-11"
  /> -->
  <!-- <router-link
    class="event-link"
    :to="{
      name: 'EventDetails',
    }"
  > -->
  <div class="grid-container">
    <div v-for="poh in posts.splice(0, 10)" :key="poh.id">
      <div class="event-card">
        <h4 class="text-truncate">{{ poh.title }}</h4>
        <div class="status">
          <img :src="poh.thumbnailUrl" class="round" />
        </div>
        <div class="status">
          <button class="status button-52" @click="$emit('open-modal')">
            Detail
          </button>
        </div>
      </div>
    </div>
    <!-- </router-link> -->
    <!-- <div v-for="poh in listTodosData" :key="poh.id">
      <div class="event-card">
        <h4 class="text-truncate">{{ poh.title }}</h4>
        <div class="status">
          <img :src="poh.title" />
        </div>
      </div>
    </div> -->
  </div>
  <!-- </router-link> -->
</template>

<script>
import { mapState } from 'vuex'

// const modulesTodos = 'modules/todos/'
export default {
  name: 'CardView',
  data() {
    return {
      showModal: true,
      // listAlbums: [],
      // listTodos: [],
    }
  },
  computed: mapState({
    posts: (state) => state.posts,
  }),
  // computed: {
  //   ...mapState(['posts']),

  //   listAlbumsData() {
  //     return this.$store.getters.listAlbums
  //   },
  //   listTodosData() {
  //     return this.$store.getters.listTodos
  //   },
  //   listTodosData() {
  //     return this.$store.getters[modulesTodos + 'listTodos']
  //   },
  // },
  created() {
    // this.$store.dispatch(modulesTodos + 'fetchTodo', null)
    // this.$store.dispatch('getProfile', null)
  },
}
</script>

<style scoped>
/* CSS */
.button-52 {
  font-size: 16px;
  font-weight: 200;
  color: #fff;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid white;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-52:after {
  content: '';
  background-color: blue;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
  color: black;
}

.button-52:hover:after {
  top: 0px;
  left: 0px;
  color: black;
}

@media (min-width: 768px) {
  .button-52 {
    padding: 13px 50px 13px;
  }
}
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.grid-container {
  display: grid;
  gap: 30px 50px;
  flex-direction: row;
  margin-right: 50px;
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
  margin-bottom: 15px;
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
  border-radius: 50%;
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