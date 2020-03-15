module.exports = ({ index, width, heigth }) => {
    const to1dIndex = (r, c) => {
        if (r < 0 || r === heigth || c < 0 || c >= width) return -1;
        return r * heigth + c;
    };

    const row = index / heigth;
    const col = index % width;

    let northWest = -1;
    let north = -1;
    let northEast = -1;
    let west = -1;
    let east = -1;
    let southWest = -1;
    let south = -1;
    let southEast = -1;

    console.log(row);
    console.log(col);

    northWest = to1dIndex(row - 1, col - 1);
    north = to1dIndex(row - 1, col);
    northEast = to1dIndex(row - 1, col + 1);
    west = to1dIndex(row, col - 1);
    east = to1dIndex(row, col + 1);
    southWest = to1dIndex(row + 1, col - 1);
    south = to1dIndex(row + 1, col);
    southEast = to1dIndex(row + 1, col + 1);

    return [
        northWest,
        north,
        northEast,
        west,
        east,
        southWest,
        south,
        southEast
    ].filter(i => i !== -1);
};
