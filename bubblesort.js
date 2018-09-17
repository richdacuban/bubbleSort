function bubbleSort(array) {
  let output = [];

  if (array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      let a = array[j - 1];
      let b = array[j];
      if (a > b) {
        swapHelper(array, j - 1, j);
      }
    }
  }
  return array;
}

function swapHelper(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
