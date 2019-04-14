<template>
  <table class="table">
    <thead>
      <tr>
        <td colspan="7">
          {{ month | moment("MMM YYYY") }}
        </td>
      </tr>
      <tr>
        <td>S</td>
        <td>M</td>
        <td>T</td>
        <td>W</td>
        <td>T</td>
        <td>F</td>
        <td>S</td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="week in weeks"
        :key="week.index"
      >
        <td
          v-for="day in week"
          :key="day.index"
        >
          <div v-if="isInCurrentMonth(day)">
            {{ day | moment("D") }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    month: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      weeks: []
    }
  },

  mounted () {
    this.populateWeeks()
  },

  methods: {
    isInCurrentMonth (date) {
      return date.month() === moment(this.month).month()
    },
    populateWeeks () {
      const startWeek = moment(this.month).startOf('month').week()
      const endWeek = moment(this.month).endOf('month').week()

      this.weeks = []
      for (var week = startWeek; week <= endWeek; week++) {
        this.weeks.push(
          Array(7).fill(0).map((n, i) =>
            moment()
              .week(week)
              .startOf('week')
              .clone()
              .add(n + i, 'day')))
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
