
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) return [];
    result = [];
    matrix.forEach((row, index) => {
        if (index % 2 === 0) {
            result.push(...row);
        }
        else {
            result.push(...(row.reverse()));
        }
    });
    return result;
}
