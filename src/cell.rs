#[repr(u8)]
#[derive(Clone, Copy)]
pub enum Cell {
    Dead = 0,
    Alive = 1,
}
