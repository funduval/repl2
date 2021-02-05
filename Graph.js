class Graph{

    constructor(){
        this.adjacencyList=[];

    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];

        }
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);

    }

    removeEdge(v1,v2){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex=>vertex!==v2);
            this.adjacencyList[v2] = this.adjacencyList[v1].filter(vertex=>vertex!==v1)

    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            let anyAdjacentVertexStored = adjacencyList[vertex].pop();
            this.removeEdge(anyAdjacentVertexStored, vertex);

        }
        delete this.adjacencyList[vertex];

    }
}

