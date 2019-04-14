<template>
  <div data-cy="calendar">
    <CalendarMonth :month="formData.startDate" />
    <button
      data-cy="calendar-goback"
      @click="$emit('goBack')"
    >
      Go Back
    </button>
  </div>
</template>

<script>
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
