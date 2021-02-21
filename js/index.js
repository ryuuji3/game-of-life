const width = 20
const height = 20

import('../pkg').then(async ({ Grid }) => {
    const { memory } = await import('../pkg/index_bg.wasm')

    const grid = Grid.new(width, height)
    const cells = new Uint8Array(memory.buffer, grid.cells(), width * height)

    console.log(Array.from(cells))
})
