const arr = ([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

const max = (...list) => console.log(Math.max(...list.flat()))

max(...arr)