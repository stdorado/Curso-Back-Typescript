/* un arbol binario de busqueda o BST es una variante al arbol binario donde se tienen que cumplir ciertas cosas
cada nodo contiene maximo 2 hjos, el nodo izquierdo debe ser menor al valor del nodo
el nodo derecho tiene que se mayor al valor del nodo
*/ 


class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Método para insertar un nuevo nodo en el árbol
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Función auxiliar para insertar un nuevo nodo recursivamente
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Método para buscar un valor en el árbol
    search(value) {
      return this.searchNode(this.root, value);
    }
  
    // Función auxiliar para buscar un valor recursivamente
    searchNode(node, value) {
      if (!node) {
        return false;
      }
  
      if (value === node.value) {
        return true;
      } else if (value < node.value) {
        return this.searchNode(node.left, value);
      } else {
        return this.searchNode(node.right, value);
      }
    }
  }
  
  // Ejemplo de uso del árbol binario de búsqueda
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  
  console.log(bst.search(5)); // Output: true
  console.log(bst.search(12)); // Output: false
  