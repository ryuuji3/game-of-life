export default function update() {
    const updates = this.grid.map((row, rowIndex) => 
        row.map((cell, cellIndex) => {
            let alive = cell
            const neighbors = countNeighbors(this.grid, rowIndex, cellIndex)

            if (
                ( alive && neighbors > 1 && neighbors < 4 ) // stays alive
                || (!alive && neighbors === 3) // revived
            ) {
                alive = true
            } else {
                alive = false
            }

            return alive
        })
    )

    this.grid = updates;
}

export function countNeighbors(grid, row, column) {
    const positions = {
        TOP_LEFT: [row - 1, column - 1],
        TOP: [ row - 1, column ],
        TOP_RIGHT: [ row - 1, column + 1],
        LEFT: [ row, column - 1],
        RIGHT: [ row, column + 1],
        BOTTOM_LEFT: [ row + 1, column - 1],
        BOTTOM: [ row + 1, column ],
        BOTTOM_RIGHT: [ row + 1, column + 1],
    }

    return Object.values(positions).reduce(( neighbors, coordinates ) => {
        const [ x, y ] = coordinates

        if (x in grid && y in grid[x] && grid[x][y] === true) {
            neighbors++
        }

        return neighbors;
    }, 0)
}