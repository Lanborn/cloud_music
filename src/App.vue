<template>
  <div id="app">
    <top />
    <index />
  </div>
</template>
<script>
import top from './views/top.vue'
import index from './views/index.vue'
export default {
  name: 'app',
  components:{
    top,
    index
  }
};
</script>

<style>

</style>
