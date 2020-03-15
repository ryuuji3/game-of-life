import Vue from 'vue'
import GameOfLife from './GameOfLife.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(GameOfLife),
}).$mount('#game-of-life')
