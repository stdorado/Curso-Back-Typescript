//son estructuras de datos bidimensionales que se utilizan para almacenar datos en forma de filas y columnas

// Crear una matriz de 3x3
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Acceder a un elemento específico de la matriz elemento en la segunda fila y tercera columna
  const element = matrix[1][2]; // Output: 6
  
  // Recorrer la matriz e imprimir todos los elementos
  console.log("Elementos de la matriz:");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  
  // Operaciones  básicas
  
  // Suma de matrices
  function addMatrices(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix1[i].length; j++) {
        result[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }
    return result;
  }
  
  const matrixA = [
    [1, 2],
    [3, 4]
  ];
  const matrixB = [
    [5, 6],
    [7, 8]
  ];
  const sumMatrix = addMatrices(matrixA, matrixB);
  console.log("Resultado de la suma de matrices:");
  console.log(sumMatrix); // Output: [[6, 8], [10, 12]]
  
  // Producto de matrices
  function multiplyMatrices(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrix2.length; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }
  
  const matrixC = [
    [1, 2],
    [3, 4]
  ];
  const matrixD = [
    [5, 6],
    [7, 8]
  ];
  const productMatrix = multiplyMatrices(matrixC, matrixD);
  console.log("Resultado del producto de matrices:");
  console.log(productMatrix); // Output: [[19, 22], [43, 50]]
  