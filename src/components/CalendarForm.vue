<template>
  <div data-cy="calendar-form">
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

    <button>Submit</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
label {
    display: inline-block;
    width: 20%;
}

input {
    margin-bottom: 15px;
    width: 75%;
}
</style>
