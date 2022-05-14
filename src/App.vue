<template>
  <div id="app">
    <ArrayItem/>
  </div>
</template>

<script>
import ArrayItem from './components/ArrayItem'

export default {
  name: 'app',
  components: {
    ArrayItem
  }
}
</script>

<style scoped>
@import '../src/assets/css/styles.scss';
</style>

