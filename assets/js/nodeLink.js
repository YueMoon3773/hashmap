const NodeInLink = (nodeKey = null, val = null, nextNode = null) => {
    const key = nodeKey;
    const value = val;
    const next = nextNode;

    return {
        key,
        value,
        next,
    };
};

// const LinkedList = () => {
//     // const getList = () => head;

//     return ;
// };
// export default LinkedList;

const initializeList = () => {
    let head = null;
    return head;
};

// Add a new node containing value to the end of the list
const append = (head, key, value) => {
    let newNode = null;
    if (
        (key === undefined || key === '' || key.trim() === '') &&
        (value === undefined || value === '' || value.trim() === '')
    ) {
        return;
    } else {
        newNode = NodeInLink(key, value);
    }

    // If there is no head
    // link the head to the newNode
    if (!head) {
        head = newNode;
        console.log('go');
        console.log(head);
        return;
    }
    // otherwise link the new node to the last element
    else {
        let currentNode = head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    // console.log({ head });
};

// Add a new node containing value to the start of the list
const prepend = (head, key, value) => {
    let newNode = null;
    if (
        (key === undefined || key === '' || key.trim() === '') &&
        (value === undefined || value === '' || value.trim() === '')
    ) {
        return;
    } else {
        newNode = NodeInLink(key, value);
    }

    // If there is no head
    // link the head to the newNode
    if (!head) {
        head = newNode;
        return;
    }
    // otherwise link the new node to the head and link its next to the old first element if the list
    else {
        let oldFirstNode = head;

        head = newNode;
        head.next = oldFirstNode;
    }
};

// Return the total number of nodes in the list
const size = (head) => {
    let nodeNumber = 0;
    // If there is no head (no node in list)
    // return 0
    if (!head) {
        nodeNumber = 0;
    }
    // otherwise go through all the nodes
    // return the total number
    else {
        let currentNode = head;
        nodeNumber = 1;
        while (currentNode.next) {
            nodeNumber += 1;
            currentNode = currentNode.next;
        }
    }

    return nodeNumber;
};

// Return the first node in the list
const headNode = (head) => {
    return head;
};

// Return the last node in the list
const lastNode = (head) => {
    // If there is no head (no node in list)
    // return null
    if (!head) {
        return null;
    }
    // otherwise go through all the nodes
    // return last node
    else {
        let currentNode = head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
};

// Return the node at the given index
const at = (head, index) => {
    if (index === undefined || !Number.isInteger(index)) {
        return null;
    }

    // If there is no head (no node in list)
    // or the input index is bigger than the size of the list
    // return null
    if (!head || index > size(head) || index < -1) {
        return null;
    }
    // otherwise go through all the nodes in list
    // return node at index
    else {
        let currentNode = head;
        let currentIndex = 0;
        while (currentNode.next && currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        return currentNode;
    }
};

// Remove the last element from the list
const pop = (head) => {
    // If there is no head (no node in list)
    // return
    if (!head) {
        return;
    }
    // otherwise go through all the nodes in list
    // remove last node
    else {
        let currentNode = head;
        let previousNode = null;
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        currentNode = null;
        previousNode.next = currentNode;
    }
};

// Return true if the passed in key is in the list and otherwise returns false.
const containsKey = (head, key) => {
    // If there is no head (no node in list)
    // return false
    if (!head || key === undefined || key === '' || key.trim() === '') {
        return false;
    }
    // otherwise go through all the nodes in list
    // return last node
    else {
        let currentNode = head;
        while (currentNode.next && currentNode.key !== key) {
            currentNode = currentNode.next;
        }
        if (currentNode.key === key) {
            return true;
        }
    }
};

// Return true if the passed in value is in the list and otherwise returns false.
const containsValue = (head, value) => {
    // If there is no head (no node in list)
    // return false
    if (!head || value === undefined || value === '' || value.trim() === '') {
        return false;
    }
    // otherwise go through all the nodes in list
    // return last node
    else {
        let currentNode = head;
        while (currentNode.next && currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        if (currentNode.value === value) {
            return true;
        }
    }
};

// Return the index of the node containing key, or null if not found.
const findIndexByKey = (head, key) => {
    // If there is no head (no node in list)
    // return false
    if (!head || key === undefined || key === '' || key.trim() === '') {
        return null;
    }
    // otherwise go through all the new node
    // return index of the node contains that key
    else {
        let currentNode = head;
        let currentIndex = 0;
        while (currentNode.next && currentNode.key !== key) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        if (currentNode.key === key) {
            return currentIndex;
        } else {
            return null;
        }
    }
};

// Return the node containing key, or null if not found.
const findNodeByKey = (head, key) => {
    // If there is no head (no node in list)
    // return false
    if (!head || key === undefined || key === '' || key.trim() === '') {
        return null;
    }
    // otherwise go through all the new node
    // return index of the node contains that key
    else {
        let currentNode = head;
        while (currentNode.next && currentNode.key !== key) {
            currentNode = currentNode.next;
        }

        if (currentNode.key === key) {
            return currentNode;
        } else {
            return null;
        }
    }
};

// Return the index of the node containing value, or null if not found.
const findIndexByValue = (head, value) => {
    // If there is no head (no node in list)
    // return false
    if (!head || value === undefined || value === '' || value.trim() === '') {
        return null;
    }
    // otherwise go through all the new node
    // return index of the node contains that value
    else {
        let currentNode = head;
        let currentIndex = 0;
        while (currentNode.next && currentNode.value !== value) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        if (currentNode.value === value) {
            return currentIndex;
        } else {
            return null;
        }
    }
};

// Inserts a new node with the provided value at the given index.
const insertAtIndex = (head, key, value, index) => {
    let newNode = null;
    if (
        (key === undefined || key === '' || key.trim() === '') &&
        (value === undefined || value === '' || value.trim() === '') &&
        (index === undefined || !Number.isInteger(index))
    ) {
        return;
    } else {
        newNode = NodeInLink(key, value);
    }

    // If there is no head (no node in list)
    // return
    if (!head || index > size(head) || index < 0) {
        return;
    }
    // if the index is 0 use prepend
    else if (index === 0) {
        prepend(key, value);
    }
    // otherwise go through all the new node
    // return add new node into that index
    else {
        let currentNode = head;
        let currentIndex = 0;
        let currentNodeToMove = null;
        let previousNodeNode;
        while (currentNode.next && currentIndex !== index) {
            previousNodeNode = currentNode;
            currentNode = currentNode.next;
            currentNodeToMove = currentNode;
            currentIndex += 1;
        }
        newNode.next = currentNodeToMove;
        previousNodeNode.next = newNode;
    }
};

// Remove the node at the given index.
const removeAtIndex = (head, index) => {
    if (index === undefined || !Number.isInteger(index) || index > size(head) || index < 0) {
        return;
    }
    let nodeAtIndex = at(head, index);
    let nodeToMove = nodeAtIndex.next;

    // If there is no head (no node in list)
    // return
    if (!head) {
        return;
    }
    // if index is 0 give haed to the second node
    else if (index === 0) {
        head = nodeToMove;
    }
    // otherwise go through all the new node
    // return remove the node of that index and pin the previousNode to the remains
    else {
        let currentNode = head;
        let previousNodeNode;
        while (currentNode.next && currentNode !== nodeAtIndex) {
            previousNodeNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNodeNode.next = nodeToMove;
    }
};

// Modify an existed node with the provided value at the given index.
const modifyAtIndex = (head, key, value, index) => {
    if (
        (key === undefined || key === '' || key.trim() === '') &&
        (value === undefined || value === '' || value.trim() === '') &&
        (index === undefined || !Number.isInteger(index))
    ) {
        return;
    }

    // If there is no head (no node in list)
    // return
    if (!head || index > size(head) || index < 0) {
        return;
    }
    // otherwise go through all the new node
    // modify node with new value
    else {
        let currentNode = head;
        let currentIndex = 0;
        while (currentNode.next && currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        currentNode.key = key;
        currentNode.value = value;
    }
};

// Modify an existed node with the provided value at the given index.
const modifyAtKey = (head, key, value) => {
    if (
        (key === undefined || key === '' || key.trim() === '') &&
        (value === undefined || value === '' || value.trim() === '')
    ) {
        return;
    }

    // If there is no head (no node in list)
    // return
    if (!head) {
        return;
    }
    // otherwise go through all the new node
    // modify node with new value
    else {
        let currentNode = head;
        while (currentNode.next && currentNode.key !== key) {
            currentNode = currentNode.next;
        }
        if (currentNode.key === key) {
            currentNode.value = value;
        } else return;
    }
};

// Return an array of keys in Linked list
const keysInList = (head) => {
    // If there is no head (no node in list)
    // return false
    if (!head) {
        return false;
    }
    // otherwise go through all the new node
    else {
        let currentNode = head;
        let ret = [];
        while (currentNode.next) {
            ret.push(currentNode.key);
            currentNode = currentNode.next;
        }
        ret.push(currentNode.key);

        return ret;
    }
};

// Return an array of keys in Linked list
const valuesInList = (head) => {
    // If there is no head (no node in list)
    // return false
    if (!head) {
        return false;
    }
    // otherwise go through all the new node
    else {
        let currentNode = head;
        let ret = [];
        while (currentNode.next) {
            ret.push(currentNode.value);
            currentNode = currentNode.next;
        }
        ret.push(currentNode.value);

        return ret;
    }
};

// Return an array of keys and values in Linked list
const keysValuesPairInList = (head) => {
    // If there is no head (no node in list)
    // return false
    if (!head) {
        return false;
    }
    // otherwise go through all the new node
    else {
        let currentNode = head;
        let ret = [];
        while (currentNode.next) {
            let nodeContent = [];
            nodeContent.push(currentNode.key);
            nodeContent.push(currentNode.value);
            ret.push(nodeContent);
            currentNode = currentNode.next;
        }

        let nodeContent = [];
        nodeContent.push(currentNode.key);
        nodeContent.push(currentNode.value);
        ret.push(nodeContent);

        return ret;
    }
};

// Represent LinkedList objects as strings
const toString = (head) => {
    // If there is no head (no node in list)
    // return false
    if (!head) {
        return 'Empty list';
    }
    // otherwise go through all the new node
    else {
        let currentNode = head;
        let ret = `( ${currentNode.key} ~ ${currentNode.value} )`;
        while (currentNode.next) {
            currentNode = currentNode.next;
            ret += ` -> ( ${currentNode.key} ~ ${currentNode.value} )`;
        }
        ret += ' -> null';
        return ret;
    }
};

export {
    NodeInLink,
    initializeList,
    append,
    prepend,
    size,
    headNode,
    lastNode,
    at,
    pop,
    containsKey,
    containsValue,
    findIndexByValue,
    findIndexByKey,
    findNodeByKey,
    insertAtIndex,
    removeAtIndex,
    modifyAtIndex,
    modifyAtKey,
    keysInList,
    valuesInList,
    keysValuesPairInList,
    toString,
};

// const list = LinkedList();

// list.append('dog', 'DOGS');
// list.append('cat', 'CATS');
// list.append('parrot', 'PARROTS');
// list.prepend('shark', 'SHARKS');
// list.prepend('monkey', 'MONKEYS');

// console.log('full list: ', list.getList());
// // console.log(list.size());
// // console.log(list.at(-2));
// // console.log(list.contains('cat'));
// // console.log(list.find('dog'));
// list.insertAtIndex('bird', 'BIRDS', 0);
// list.insertAtIndex('hamster', 'HAMSTERS', 3);
// list.modifyAtIndex('hamster', 'BOOOOOO', 33);
// // list.modifyAtKey('parrot', "IT'S A BIRDS");
// list.modifyAtKey('sharkSAD', "IT'S A BIRDS");
// // list.removeAtIndex(6);
// // console.log('full list: ', list.getList());
// console.log(list.toString());
