/**
 * Render.
 */
export default function render() {
    const { grid, context } = this;
    const rows = grid.length;
    const columns = grid[0].length;
    const cellHeight = this.height / rows;
    const cellWidth = this.width / columns;

    context.strokeStyle = "#060";
    context.strokeWidth = "1px";

    grid.forEach(( row, rowIndex ) => {
        row.forEach(( cell, cellIndex ) => {
            if (cell) {
                context.fillStyle = "#050"
            } else {
                context.fillStyle = "#000"
            }

            

            context.fillRect(
                cellIndex * cellWidth,
                rowIndex * cellHeight,
                cellWidth,
                cellHeight
            )
            context.strokeRect(
                cellIndex * cellWidth,
                rowIndex * cellHeight,
                cellWidth,
                cellHeight
            )
        })
    })
}