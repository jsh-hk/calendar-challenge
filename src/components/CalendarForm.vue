<template>
  <div
    class="calendarform"
    data-cy="calendar-form"
  >
    <label for="startdate">Start date:</label>
    <input
      type="date"
      name="startdate"
      data-cy="calendarform-startdate"
      value="2018-04-01"
    >

    <label for="numberofdays">Number of days:</label>
    <input
      type="number"
      name="numberofdays"
      data-cy="calendarform-numberofdays"
      value="30"
    >

    <label for="start">Country Code:</label>
    <input
      type="text"
      name="countrycode"
      data-cy="calendarform-countrycode"
      value="US"
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
export default {}
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
