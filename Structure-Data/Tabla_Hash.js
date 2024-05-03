/*Las tablas HASH son estructuras en la cual se utilizan para almacenar claves-valor
estan diseñadas para un acceso rapido a los datos asociados a claves especificas
se utiliza un funcion para calcular una ubicacion o indice de la tabla
*/

class HashTable{
    constructor(size = 20){
        this.size = size
        this.table = new Array(size)
    }

    hash(key){
        let hash = 0
        for(let i = 0; i< key.lenght; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size
    }

//este metodo va a agregar un par clave-valor a la tabla hash
    set(key,value){
        const index = this.hash(key)
        if(!this.table[index]){
            return undefined
        }
        for(let pair of this.table[index]){
            if(pair[0]=== key){
                return pair[1]
            }
        }
        return undefined
    }
//este metodo lo que va a hacer es buscar el valor asociado con una clave en la tabla hash
    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
          return undefined;
        }
        for (let pair of this.table[index]) {
          if (pair[0] === key) {
            return pair[1];
          }
        }
        return undefined;
      }

      //este metodo lo que hace es eliminar una clave-valor de la tabla hash
    remove(key){
        const index = this.hash(key)
        if(!this.table[index]){
            return
        }
        this.table[index] = this.table[index].filter(pair => pair[0] !== key)
    }
}
// Ejemplo de uso de la tabla hash
const myHashTable = new HashTable();

myHashTable.set('a', 1);
myHashTable.set('b', 2);
myHashTable.set('c', 3);

console.log(myHashTable.get('a')); // Output: 1
console.log(myHashTable.get('b')); // Output: 2
console.log(myHashTable.get('c')); // Output: 3

myHashTable.remove('b');
console.log(myHashTable.get('b')); // Output: undefined