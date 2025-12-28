// linked_list.js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.value + " -> ";
      current = current.next;
    }
    return result + "null";
  }

  removeLast() {
    if (this.head === null) return;
    if (this.head.next === null) {
      this.head = null;
      this.length--;
      return;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    this.length--;
  }
}