import render from "./render"
import update from './update'
import loop from "./loop"


export default function Game(canvas) {
    const context = canvas.getContext("2d")
    const { width, height } = canvas

    this.context = context
    this.width = width
    this.height = height

    this.grid = [
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ],
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
        [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    ]

    return this
}

Game.prototype = {
    start() {
        this.loop = loop(
            update.bind(this),
            render.bind(this),
            10,
        )
    },
    cancel() {
        this.loop()
    }
}