<template>
  <div class="stage">
    <li class="scene">
      <div class="game"></div>
      <div class="info"></div>
    </li>
    <li class="scene">
      <div class="game"></div>
      <div class="info"></div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Stage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /*background: black;*/
  margin-top: 3rem;
  width: 65rem;
  height: 100%;
}@media (max-width: 65rem) {
  .stage {
    width: 100%;
  }
}

</style>
