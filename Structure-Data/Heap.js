/*son heaps o monticulos son estructuras de datos especiales que se utilizan para mantener un conjunto de elementos
donde cada elemento tiene asignada una prioridad, su propiedad fundamental es que garantiza que el elemento mayor o menor
prioridad este siempre encima del heap
*/

class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Función para obtener el índice del padre de un nodo
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Función para obtener el índice del hijo izquierdo de un nodo
    getLeftChildIndex(index) {
      return index * 2 + 1;
    }
  
    // Función para obtener el índice del hijo derecho de un nodo
    getRightChildIndex(index) {
      return index * 2 + 2;
    }
  
    // Función para intercambiar dos elementos en el heap
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Función para restaurar la propiedad del heap hacia arriba
    heapifyUp(index) {
      let currentIndex = index;
      let parentIndex = this.getParentIndex(currentIndex);
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.getParentIndex(currentIndex);
      }
    }
  
    // Función para insertar un nuevo elemento en el heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Función para restaurar la propiedad del heap hacia abajo
    heapifyDown(index) {
      let currentIndex = index;
      let leftChildIndex = this.getLeftChildIndex(currentIndex);
      let rightChildIndex = this.getRightChildIndex(currentIndex);
      let maxIndex = currentIndex;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
        maxIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
        maxIndex = rightChildIndex;
      }
  
      if (maxIndex !== currentIndex) {
        this.swap(currentIndex, maxIndex);
        this.heapifyDown(maxIndex);
      }
    }
  
    // Función para eliminar y devolver el máximo elemento del heap
    extractMax() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return max;
    }
  
    // Función para obtener el máximo elemento del heap sin eliminarlo
    peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }
  }
  
  // Ejemplo de uso de heap máximo
  const maxHeap = new MaxHeap();
  maxHeap.insert(10);
  maxHeap.insert(5);
  maxHeap.insert(15);
  maxHeap.insert(20);
  
  console.log(maxHeap.peek()); // Output: 20
  console.log(maxHeap.extractMax()); // Output: 20
  console.log(maxHeap.peek())//output : 15
  