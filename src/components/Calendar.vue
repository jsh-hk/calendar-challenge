<template>
  <div data-cy="calendar">
    The calendar

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

}
</script>

<style lang="scss" scoped>

</style>
