//Las listas enlazadas son estructuras donde un nodo tiene acceso al siguiente de la lista

class node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    //este metodo agrega un elemento al final de la lista
    append(data){
        let newNode = new node(data)
        if(!this.head){
            this.head = newNode
            return;
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode;
    }
}

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
