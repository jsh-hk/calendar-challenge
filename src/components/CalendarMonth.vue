<template>
  <table
    class="table"
    :data-cy="simpleMonthString"
  >
    <thead>
      <tr>
        <td
          colspan="7"
          class="table-header"
        >
          {{ startDate | moment("MMM YYYY") }}
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
          :class="dateClass(day)"
          :data-cy="simpleDateString(day)"
        >
          <div v-if="isInRange(day)">
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
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      weeks: []
    }
  },

  computed: {
    simpleMonthString () {
      return moment(this.startDate).format('YYYY-MM')
    }
  },

  mounted () {
    this.populateWeeks()
  },

  methods: {
    isInRange (date) {
      return this.isInCurrentMonth(date) &&
        this.isAfterStartDate(date) &&
        this.isBeforeEndDate(date)
    },

    isInCurrentMonth (date) {
      return date.month() === moment(this.startDate).month()
    },

    isAfterStartDate (date) {
      return moment(this.startDate).isSameOrBefore(date)
    },

    isBeforeEndDate (date) {
      return moment(date).isSameOrBefore(this.endDate)
    },

    dateClass (date) {
      return this.isInRange(date)
        ? date.day() === 0 || date.day() === 6
          ? 'weekend-day'
          : 'weekday-day'
        : 'out-of-range-day'
    },

    simpleDateString (date) {
      return date.format('YYYY-MM-DD')
    },

    populateWeeks () {
      let theStartdate = moment(this.startDate)
      const startWeek = theStartdate.startOf('month').week()
      const endWeek = theStartdate.endOf('month').week()

      this.weeks = []
      for (var week = startWeek; week <= endWeek; week++) {
        this.weeks.push(
          Array(7).fill(0).map((n, i) =>
            moment()
              .week(week)
              .year(theStartdate.year())
              .startOf('week')
              .clone()
              .add(n + i, 'day')))
      }
    }
  }

}
</script>

<style scoped>
.table-header {
  background-color: lightgreen;
}
.weekend-day {
  background-color: yellow;
}
.weekday-day {
  background-color: lightgreen;
}
.out-of-range-day {
  background-color: gray;
}

</style>
