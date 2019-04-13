<template>
  <div id="app">
    <CalendarForm
      v-if="!showCalendar"
      @submit="renderCalendar"
    />
    <Calendar
      v-else
      @goBack="goBack"
    />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import CalendarForm from './components/CalendarForm.vue'

export default {
  name: 'App',
  components: {
    Calendar,
    CalendarForm
  },
  data () {
    return {
      showCalendar: false,
      startDate: '2018-04-01',
      numberOfDays: '30',
      countryCode: 'US'
    }
  },

  methods: {
    renderCalendar () {
      this.showCalendar = true
    },

    goBack () {
      this.showCalendar = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
