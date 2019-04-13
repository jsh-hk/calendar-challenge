<template>
  <div
    class="calendarform"
    data-cy="calendar-form"
  >
    <label for="startdate">Start date:</label>
    <input
      v-model="formData.startDate"
      type="date"
      name="startdate"
      data-cy="calendarform-startdate"
    >

    <label for="numberofdays">Number of days:</label>
    <input
      v-model="formData.numberOfDays"
      type="number"
      name="numberofdays"
      data-cy="calendarform-numberofdays"
    >

    <label for="start">Country Code:</label>
    <input
      v-model="formData.countryCode"
      type="text"
      name="countrycode"
      maxlength="2"
      data-cy="calendarform-countrycode"
    >

    <button
      data-cy="calendarform-submit"
      @click="$emit('submit')"
    >
      Submit
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

<style scoped>
.calendarform {
    width: 50%;
    margin: auto;
}
label {
    display: inline-block;
    width: 30%;
}

input {
    margin-bottom: 15px;
    width: 65%;
}
</style>
