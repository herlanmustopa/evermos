<template>
  <div class="justify-between">
    <!-- Time -->
    <div
      style="
        display: flex;
        font-weight: 500;
        display: flex;
        flex-direction: column;
      "
    >
      <h1>
        {{ time }}
      </h1>

      <p class="date">
        {{ Date.now() | date }}{{ `, ${new Date().getFullYear()}` }}
      </p>

      <div>
        <i
          :class="welcomeMsg == 'Good night' ? 'ri-moon-line' : 'ri-sun-line'"
        ></i>
        <h1>{{ welcomeMsg }}, Herlan Mustopa!</h1>
      </div>
    </div>

    <!-- Dark mode -->
    <div>
      <i></i>
      <i></i>

      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
    }
  },
  computed: {
    welcomeMsg() {
      // change welcome message
      const time = new Date().getHours()
      if (time > 3 && time < 12) {
        return 'Good morning'
      } else if (time >= 12 && time < 6) {
        return 'Good afternoon'
      } else {
        return 'Good night'
      }
      //
    },
  },

  created() {
    // get time
    setInterval(() => {
      const d = new Date()
      const hour = d.getHours()
      const minutes = d.getMinutes()
      const format = hour >= 12 ? 'PM' : 'AM'

      this.time = `${hour > 12 ? hour - 12 : hour}:${
        minutes < 10 ? '0' + minutes : minutes
      } ${format}`
    }, 1000)
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  /* padding: 0.75rem; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background-color: aqua; */

  @media (min-width: 768px) {
    padding: 1.25rem;
  }
  @media (min-width: 1024px) {
  }
}
.date {
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
}
</style>
