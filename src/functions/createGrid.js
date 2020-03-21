/**
 * Create grid.
 *
 * @param {number} rowCount
 * @param {number} columnCount
 * @returns {unknown[]}
 */
export default function createGrid(rowCount, columnCount) {
    const cells = (new Array(rowCount*columnCount)).fill(false)
    // Random number
    const seed = Math.floor(Math.random() * (rowCount * columnCount))
    const multiplier = 5
    const increment = 3

    return cells.map((_, index) => {
        const modulus = rowCount - index
        let numbers = generateRandom(modulus, multiplier, increment, seed)

        // Create a new generator instance every row so every row isnt the same
        if (index !== 0 && index % rowCount === 0) {
            numbers = generateRandom(modulus, multiplier, increment, seed)
        }

        return numbers.next().value % 2 === 0 ? 1 : 0
    })
}

/**
 * Linear congruential generator.
 *
 * @param {number} modulus
 * @param {number} multiplier
 * @param {number} increment
 * @param {number} seed or start value
 * @returns {Generator<number>}
 */
export function* generateRandom(modulus, multiplier = 1, increment = 0, seed = 0) {
    while(true) {
        seed = (multiplier * seed + increment) % modulus

        yield seed
    }
}