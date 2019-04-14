<template>
  <div id="app">
    <CalendarForm
      v-if="showCalendarForm"
      :form-data="formData"
      @submit="renderCalendar"
    />
    <Calendar
      v-else
      :form-data="formData"
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
      showCalendarForm: true,
      formData: {
        startDate: '2019-04-01',
        numberOfDays: 30,
        countryCode: 'US'
      }
    }
  },

  methods: {
    renderCalendar () {
      this.showCalendarForm = false
    },

    goBack () {
      this.showCalendarForm = true
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
