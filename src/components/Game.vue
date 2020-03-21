<template>
  <canvas 
    ref="game"
    :width="width"
    :height="height"
  >
    Your browser sucks.
  </canvas>
</template>

<script>
import Game from '../functions/Game'

export default {
    name: "Game",
    data() {
        return {
            game: null,
        }
    },
    props: {
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        playing: {
            type: Boolean,
            default: true,
        }
    },
    computed: {
        canvas() {
            return this.$refs.game
        }
    },
    mounted() {
        this.game = new Game(this.canvas)
        this.game.start()
    },
    beforeDestroy () {
        this.game.cancel()
    }
}
</script>

<style scoped>
    canvas {
        border: 1px solid white;
        margin: 0;
        padding: 0;
    }
</style>