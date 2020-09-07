<template>
  <div class="visitor-view">
    <div class="intro-card" :style="{background: this.$parent.darkThemeColor}">
      <div class="avatar" role="img"></div>
      <div class="text">

      </div>
    </div>
    <stage></stage>
  </div>
</template>

<script>
import Stage from './Stage.vue'

export default {
  name: 'VisitorView',
  components: {Stage}
}
</script>

<style scoped>
.visitor-view {
}
.intro-card {
}

</style>
