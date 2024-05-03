//Las colas o queue son estructuras bajo la implementacion FIFO que es el primer dato que entra es el primer dato en salir

// Implementación de una cola (FIFO)

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Método para agregar un elemento al final de la cola
    enqueue(element) {
      this.items.push(element);
    }
  
    // Método para eliminar y devolver el primer elemento de la cola
    dequeue() {
      if (this.isEmpty()) {
        return "La cola está vacía";
      }
      return this.items.shift();
    }
  
    // Método para verificar si la cola está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método para obtener el tamaño de la cola
    size() {
      return this.items.length;
    }
  
    // Método para ver el primer elemento de la cola sin eliminarlo
    front() {
      if (this.isEmpty()) {
        return "La cola está vacía";
      }
      return this.items[0];
    }
  }
  
  // Ejemplo de uso de la cola
  const queue = new Queue();
  queue.enqueue("A");
  queue.enqueue("B");
  queue.enqueue("C");
  
  console.log("Elemento eliminado de la cola:", queue.dequeue()); // Output: A
  console.log("Elemento en la parte frontal de la cola:", queue.front()); // Output: B
  console.log("Tamaño de la cola:", queue.size()); // Output: 2
  