extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

use crate::cell::Cell;

#[wasm_bindgen]
pub struct Grid {
    width: u32,
    height: u32,
    cells: Vec<Cell>,
}

impl Grid {
    fn generate_cells(width: u32, height: u32) -> Vec<Cell> {
        let grid_size: usize = (width * height) as usize;
        let mut cells = Vec::<Cell>::with_capacity(grid_size);

        for _ in 0..grid_size {
            cells.push(if rand::random() {
                Cell::Alive
            } else {
                Cell::Dead
            });
        }

        cells
    }

    fn count_live_neighbors(&self, index: usize) -> u8 {
        let rows = self.height as usize;

        self.cells[index - 1] as u8  // left
            + self.cells[index + 1] as u8 // right
            + self.cells[index - rows] as u8 // top
            + self.cells[index + rows] as u8 // bottom
            + self.cells[index - rows - 1] as u8 // top left
            + self.cells[index - rows + 1] as u8 // top right
            + self.cells[index + rows - 1] as u8 // bottom left
            + self.cells[index + rows + 1] as u8 // bottom right
    }
}

// Exported to JS
#[wasm_bindgen]
impl Grid {
    pub fn new(width: u32, height: u32) -> Grid {
        let cells = Grid::generate_cells(width, height);

        Grid {
            width,
            height,
            cells,
        }
    }

    pub fn tick(&mut self) {
        let mut next_generation = self.cells.clone();

        for (index, cell) in self.cells.iter().enumerate() {
            next_generation[index] = match (cell, self.count_live_neighbors(index)) {
                // Live cell with less than 2 neighbors dies
                (Cell::Alive, neighbors) if neighbors < 2 => Cell::Dead,
                // Live cell with 2 OR 3 neighbors lives
                (Cell::Alive, 2) | (Cell::Alive, 3) => Cell::Alive,
                // Live cell with more than 3 neighbors dies
                (Cell::Alive, neighbors) if neighbors > 3 => Cell::Dead,
                // Dead cell with 3 neighbors comes to life
                (Cell::Dead, 3) => Cell::Alive,
                (cell, _) => *cell,
            }
        }

        self.cells = next_generation
    }

    pub fn cells(&self) -> *const Cell {
        self.cells.as_ptr()
    }

    pub fn width(&self) -> u32 {
        self.width
    }

    pub fn height(&self) -> u32 {
        self.height
    }
}
