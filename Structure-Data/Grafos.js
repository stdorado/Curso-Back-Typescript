/* Los grafos son colecciones de nodos (vertices) y aristas (bordes) y se conectan en pares de nodos
son usados para modelar redes, conexiones y relaciones entre entidades
*/

class Graph{
    constructor(){
        this.adjacencyList = {}
    }
//este metodo agrega un vertice al grafo
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
//este metodo agrega una arista entre 2 vertices
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1) //en caso de que sea un grafo no dirijido
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("A","B")
