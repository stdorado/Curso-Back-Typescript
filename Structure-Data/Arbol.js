/*Los arboles son estructuras de datos donde los nodos se manejan o estructuran de 
manera jerarquica, es decir un nodo tiene valor y 0 o mas hijos */

class TreeNode{
    constructor(data){
        this.data = data
        this.children = []
    }
    addChild(data){
        this.children.push(new TreeNode(data))
    }
}

const tree = new TreeNode(1)
tree.addChild(2)
tree.addChild(3)
tree.addChild(4)
tree.children[0].addChild(5);
