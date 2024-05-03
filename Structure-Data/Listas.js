class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Método para agregar un nuevo nodo al final de la lista
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Método para imprimir los elementos de la lista
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    // Otros métodos de lista enlazada (como eliminar, insertar, etc.) pueden ser implementados según sea necesario
  }
  
  // Ejemplo de uso de lista enlazada
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  
  linkedList.print(); // Output: 1, 2, 3
  