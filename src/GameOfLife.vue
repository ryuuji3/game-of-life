<template>
  <div id="game-of-life">
      <game 
        :width="gameWidth" 
        :height="gameHeight"
      />
  </div>
</template>

<script>
import Game from './components/Game'

export default {
    name: "GameOfLife",
    components: {
      Game,  
    },
    props: {
        width: {
            type: Number,
            default: 400,
        },
        height: {
            type: Number,
            default: 400,
        }
    },
    computed: {
        gameWidth() {
            return this.width
        },
        gameHeight() {
            return this.height
        }
    }
}
</script>

<style scoped>
    div#game-of-life {
        width: inherit;
        height: inherit;

        margin: 0;
        padding: 0;
    }
</style>