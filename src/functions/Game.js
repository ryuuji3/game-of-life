import render from './render'
import getNextGeneration from './getNextGeneration'
import createGrid from './createGrid'
import loop from './loop'


export default class Game {
    constructor(
        canvas,
        {
            rows = 50,
            columns = 50,
            fps = 30,
            grid = true,
        } = {},
        playing = true
    ) {
        const context = canvas.getContext("2d")
        const { width, height } = canvas

        this.context = context
        this.width = width
        this.height = height
        this.playing = playing
        this.grid = grid

        this.rows = rows
        this.columns = columns
        this.fps = fps
        this.cells = createGrid(this.rows, this.columns)
    }

    start = () => {
        this.loop = loop(
            this.update,
            this.render,
            this.fps,
            30
        )
    }

    update = () => {
        this.cells = getNextGeneration(this.cells, this.rows)
    }

    render = () => {
        render(
            this.context,
            this.cells,
            this.height,
            this.width,
            this.rows,
            this.columns,
            this.grid
        )
    }

    cancel = () => {
        this.loop()
    }
}