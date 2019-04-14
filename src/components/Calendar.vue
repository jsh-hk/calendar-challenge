<template>
  <div data-cy="calendar">
    <CalendarMonth
      v-for="month in months"
      :key="month.index"
      :start-date="month.startDate"
      :end-date="month.endDate"
    />
    <button
      data-cy="calendar-goback"
      @click="$emit('goBack')"
    >
      Go Back
    </button>
  </div>
</template>

<script>
import moment from 'moment'

import CalendarMonth from './CalendarMonth.vue'

export default {
  components: {
    CalendarMonth
  },

  props: {
    formData: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      months: []
    }
  },

  mounted () {
    this.populateMonths()
  },

  methods: {
    populateMonths () {
      this.months = []
      let startDate = moment(this.formData.startDate)
      let endDate = moment(this.formData.startDate).add(this.formData.numberOfDays, 'days')
      // eslint-disable-next-line
      while (endDate > startDate) {
        this.months.push({
          startDate: startDate.format('YYYY-MM-DD'),
          endDate: endDate.format('YYYY-MM-DD')
        })
        startDate.add(1, 'month')
        startDate = startDate.startOf('month')
      }
      console.log(this.months)
    }
  }
}
</script>

<style scoped>

.table {
    border: 1px solid #deedee;
    width: 30%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
}
</style>
