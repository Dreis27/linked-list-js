class Node {
    constructor(value = null){
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value){
        const newNode = new Node(value);

        if(!this.listHead){
            this.listHead = newNode;
        } else {
            let current = this.listHead;
            while (current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.listHead;
        this.listHead = newNode;
    }

    size(){
        let tmp = this.listHead;
        let counter = 0;
        while(tmp){
            tmp = tmp.nextNode;
            counter++;
        }
        return counter;
    }

    head(){
        return this.listHead;
    }

    tail(){
        if(!this.listHead) return null;
        let tmp = this.listHead;
        while(tmp.nextNode){
            tmp = tmp.nextNode;
        }
        return tmp
    }

    at(index){
        if(index >= this.size()) return undefined;
        let current = this.listHead;
        let counter = 0;
        while(counter < index){
            current = current.nextNode;
            counter++;
        }
        return current;
    }

    pop(){
        if(!this.listHead) return;
        else if (!this.listHead.newNode){
            const removed = this.listHead;
            this.listHead = null;
            return removed;
        } else {
            let current = this.listHead;
            while(current.nextNode.nextNode){
                current = current.nextNode;
            }
            const removed = current.nextNode;
            current.nextNode = null;
            return removed;
        }
    }

    contains(val){
        let current = this.listHead;
        while(current){
            if(current.value == val) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(val) {
        let current = this.listHead;
        let index = 0;
        while(current){
            if(current.value == val) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString(){
        let current = this.listHead;
        let result = '';
        while(current){
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }
        result += 'null';
        return result;
    }

    insertAt(val, index){
        if(index < 0 || index > this.size()) throw new Error('Invalid index');
        else if(index==0) {
            this.prepend(val);
        } 
        else if (index == this.size()){
            this.append(val);
        } else {
            let current = this.listHead;
            
            for(let i = 0; i<index-1; i++){
                current = current.nextNode;
            }
            const newNode = new Node(val);
            newNode.nextNode = current.nextNode;
            current.nextNode = newNode;
        }
    }

    removeAt(index){
        if(index < 0 || index >= this.size()) throw new Error('Invalid index');
        else if(index==0) {
            this.listHead = this.listHead.nextNode;
        } else {
            let current = this.listHead;
            for(let i = 0; i<index-1; i++){
                current = current.nextNode;
            }
            current.nextNode = current.nextNode.nextNode;
        }
    }
}