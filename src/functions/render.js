/**
 * Render.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {Array<number>} cells
 * @param {number} height
 * @param {number} width
 * @param {number} rows
 * @param {number} columns
 * @param {boolean} grid
 */
export default function render(context, cells, height, width, rows, columns, grid = true) {
    const cellHeight = height / rows;
    const cellWidth = width / columns;

    context.strokeStyle = "#060";
    context.strokeWidth = "1px";

    cells.forEach(( cell, index ) => {
        if (cell) {
            context.fillStyle = "#050"
        } else {
            context.fillStyle = "#000"
        }

        const x = index % rows
        const y = Math.floor(index / rows)

        // Cell
        context.fillRect(
            x * cellWidth,
            y * cellHeight,
            cellWidth,
            cellHeight
        )
        // Grid
        if (grid) {
            context.strokeRect(
            x * cellWidth,
            y * cellHeight,
            cellWidth,
            cellHeight
            )
        }
    })
}