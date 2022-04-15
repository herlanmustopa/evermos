<template>
  <div class="flex">
    <Head />

    <div class="grid-container card">
      <!-- <Card /> -->
      <div v-for="poh in posts.splice(0, 10)" :key="poh.id">
        <div class="event-card">
          <h4 class="text-truncate">{{ poh.name }}</h4>git
          <p>{{ poh.email }}</p>
          <div class="status">
            <img src="https://random.imagecdn.app/500/150" class="round" />
          </div>
          <div class="status">
            <button
              class="status button-52"
              @click="(event) => warn('Form cannot be submitted yet.', event)"
            >
              {{ poh.username }}
            </button>
          </div>
        </div>
      </div>
      <ModalView v-show="showModal" @close-modal="showModal = false" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Head from '~/components/Main_Head'
import ModalView from '~/components/Modal'
export default {
  name: 'IndexPage',
  components: {
    Head,
    ModalView,
  },
  data() {
    return {
      showModal: false,
    }
  },
  computed: mapState({
    posts: (state) => state.posts,
  }),
  methods: {
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    closeModal() {
      this.showModal = true
      // eslint-disable-next-line no-console
      console.log('closeModal')
    },
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
  /* cursor: pointer; */
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