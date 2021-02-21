extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

use crate::cell::Cell;

#[wasm_bindgen]
pub struct Grid {
    width: u32,
    height: u32,
    cells: Vec<Cell>,
}

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

    pub fn cells(&self) -> *const Cell {
        self.cells.as_ptr()
    }
}
