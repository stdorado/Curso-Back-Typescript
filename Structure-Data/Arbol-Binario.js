/*
en un arbol binario el primer nodo se denomina nodo raiz, los nodos que no tienen hijos se llaman nodos hoja o
nodos externos, recordemos que en los arboles contamos con maximo 2 hijos por nodo, izquierdo y derecho*/

class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Método para insertar un nuevo nodo en el árbol
    insert(data) {
      const newNode = new TreeNode(data);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Función auxiliar para insertar un nuevo nodo recursivamente
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
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
  
    // Método para recorrer el árbol en orden (in-order traversal)
    inOrderTraversal(node = this.root) {
      if (node) {
        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
      }
    }
  
    // Método para recorrer el árbol en preorden (pre-order traversal)
    preOrderTraversal(node = this.root) {
      if (node) {
        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    // Método para recorrer el árbol en postorden (post-order traversal)
    postOrderTraversal(node = this.root) {
      if (node) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
      }
    }
  }
  
  // Ejemplo de uso de árbol binario
  const binaryTree = new BinaryTree();
  binaryTree.insert(10);
  binaryTree.insert(5);
  binaryTree.insert(15);
  binaryTree.insert(3);
  binaryTree.insert(7);
  
  console.log("In-Order Traversal:");
  binaryTree.inOrderTraversal(); // Output: 3, 5, 7, 10, 15
  
  console.log("Pre-Order Traversal:");
  binaryTree.preOrderTraversal(); // Output: 10, 5, 3, 7, 15
  
  console.log("Post-Order Traversal:");
  binaryTree.postOrderTraversal(); // Output: 3, 7, 5, 15, 10
  