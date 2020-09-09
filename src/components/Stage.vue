<template>
  <div class="stage">
    <div class="scene" v-for="game in sharedState.gameList" :key="game.name">
      <div class="game">
        <div class="poster" role="img" :style="{backgroundImage: game.coverURL !== '' ? 'url(' + game.coverURL + ')' : null}"></div>
        <div class="info">
          <header role="banner" :style="{backgroundImage: game.infoImgURL !== '' ? 'url(' + game.infoImgURL + ')' : null}">
            <h1>{{game.name}}</h1>
            <span class="year">{{game.year}}</span>
            <span class="rating">{{game.rating}}</span>
            <span class="duration">{{game.duration}}</span>
          </header>
          <p>{{game.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from '../store/store'

export default {
  name: 'Stage',
  data () {
    return {
      sharedState: store.state
    }
  },
  mounted () {
    if (Object.keys(this.sharedState.gameList).length === 0) {
      this.sharedState.gameList = this.sharedState.defaultGame // 显示默认信息
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  width: 65rem;
  height: 100%;
}
@media (max-width: 65rem) {
  .stage {
    width: 100%;
  }
}
.scene {
  width: 16rem;
  height: 25rem;
  margin: 2rem;
  perspective: 1000px;
  list-style-type:none;
}
.game {
  width: 16.3rem;
  height: 25rem;
  transform-style: preserve-3d;
  transform: translateZ(-130px);
  transition: transform 350ms;
}
.game:hover {
  transform: rotateY(-78deg) translateZ(20px);
}
.poster {
  background-image: url("../assets/default-cover.jpg");
}
header {
  background-image: url("../assets/default-info-page.jpg");
}
/*************************************
Transform and style the two planes
**************************************/

.game .poster,
.game .info {
  position: absolute;
  width: 260px;
  height: 400px;
  background-color: #fff;
  backface-visibility: hidden;
}
.game .poster  {
  transform: translateZ(130px);
  background-size: cover;
  background-repeat: no-repeat;
}
.game .info {
  transform: rotateY(90deg) translateZ(130px);
  border: 1px solid #B8B5B5;
  font-size: 0.75em;
}

/*************************************
Shadow beneath the 3D object
**************************************/

.cssTransforms3d .game::after {
  content: '';
  width: 260px;
  height: 260px;
  position: absolute;
  bottom: 0;
  box-shadow: 0 30px 50px rgba(0,0,0,0.3);
  transform-origin: 100% 100%;
  transform: rotateX(90deg) translateY(130px);
  transition: box-shadow 350ms;
}
.cssTransforms3d .game:hover::after {
  box-shadow: 20px -5px 50px rgba(0,0,0,0.3);
}

/*************************************
Game information
**************************************/

.info header {
  color: #FFF;
  padding: 7px 10px;
  font-weight: bold;
  height: 195px;
  background-size: contain;
  background-repeat: no-repeat;
  text-shadow: 0 3px 10px rgba(0,0,0,1);
}
.info header h1 {
  margin: 0 0 2px;
  font-size: 1.4em;
}
.info header .rating {
  border: 1px solid #FFF;
  padding: 0 3px;
}
.info p {
  padding: 1.2em 1.4em;
  margin: 2px 0 0;
  font-weight: 700;
  color: #666;
  line-height: 1.4em;
  border-top: 10px solid #c93322;
}

/*************************************
Generate "lighting" using box shadows
**************************************/

.game .poster,
.game .info,
.game .info header {
  transition: box-shadow 350ms;
}
.cssTransforms3d .game .poster {
  box-shadow: inset 0 0 40px rgba(255,255,255,0);
}
.cssTransforms3d .game:hover .poster {
  box-shadow: inset 300px 0 40px rgba(255,255,255,0.8);
}
.cssTransforms3d .game .info,
.cssTransforms3d .game .info header {
  box-shadow: inset -300px 0 40px rgba(0,0,0,0.5);
}
.cssTransforms3d .game:hover .info,
.cssTransforms3d .game:hover .info header {
  box-shadow: inset 0 0 40px rgba(0,0,0,0);
}

</style>
