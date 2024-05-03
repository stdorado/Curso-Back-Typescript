//Las pilas o Stacks estan bajo la implementacion de LIFO que es Ultimo en entrar primero en salir
// Implementación de una pila (LIFO)

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Método para agregar un elemento al final de la pila
    push(element) {
      this.items.push(element);
    }
  
    // Método para eliminar y devolver el último elemento de la pila
    pop() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items.pop();
    }
  
    // Método para verificar si la pila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método para obtener el tamaño de la pila
    size() {
      return this.items.length;
    }
  
    // Método para ver el último elemento de la pila sin eliminarlo
    peek() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items[this.items.length - 1];
    }
  }
  
  // Ejemplo de uso de la pila
  const stack = new Stack();
  stack.push("A");
  stack.push("B");
  stack.push("C");
  
  console.log("Elemento eliminado de la pila:", stack.pop()); // Output: C
  console.log("Último elemento de la pila:", stack.peek()); // Output: B
  console.log("Tamaño de la pila:", stack.size()); // Output: 2
  