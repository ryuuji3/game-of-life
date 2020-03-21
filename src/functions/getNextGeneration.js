/**
 * Update cells map and apply game of life logic to kill or revive/create cells
 * @param {Array<number>} currentGeneration
 * @param {number} rowCount
 *
 * @returns {Array<number>} nextGeneration
 */
export default function getNextGeneration(currentGeneration, rowCount) {
    return currentGeneration.map((cell, index) => {
        let alive = cell
        const neighbors = countNeighbors(currentGeneration, index, rowCount)

        if (
            ( alive && neighbors > 1 && neighbors < 4 ) // stays alive
            || (!alive && neighbors === 3) // revived
        ) {
            alive = 1
        } else {
            alive = 0
        }

        return alive
    })
}

/**
 * Count neighboring cells
 *
 * @param cells
 * @param index
 * @param rows
 * @returns {*}
 */
function countNeighbors(cells, index, rows) {
    return cells[index - 1] // left
        + cells[index + 1] // right
        + cells[index - rows] // top
        + cells[index + rows] // bottom
        + cells[index - rows - 1] // top left
        + cells[index - rows + 1] // top right
        + cells[index + rows - 1] // bottom left
        + cells[index + rows + 1] // bottom right
}