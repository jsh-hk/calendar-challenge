<template>
  <div data-cy="calendar">
    The calendar
    <hr>
    Start date: {{ formData.startDate }}<br>
    Number of days: {{ formData.numberOfDays }}<br>
    Country Code: {{ formData.countryCode }}<br>
    <button
      data-cy="calendar-goback"
      @click="$emit('goBack')"
    >
      Go Back
    </button>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
