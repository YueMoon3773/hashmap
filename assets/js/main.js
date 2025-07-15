// import LinkedList from './nodeLink.js';
import {
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
} from './nodeLink.js';

const hashCodeGenerate = (key, capacity) => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % capacity;
};

const hashMap = () => {
    let hashMap;
    let mapSize = 0;
    let mapCapacity = 16;
    let loadFactor = 0.86;

    const getMapCapacity = () => mapCapacity;
    const getMapSize = () => mapSize;
    const getHashMap = () => hashMap;

    const increaseMapSize = (increaseVal) => (mapSize += increaseVal);
    const decreaseMapSize = (decreaseVal) => (mapSize -= decreaseVal);
    const resetMapCapacity = () => (mapCapacity = 16);
    const doubleMapCapacity = () => {
        mapCapacity *= 2;
    };

    const createHashMap = (mapCapacity) => {
        hashMap = new Array(mapCapacity).fill(null);
    };

    const validateIndex = (index, hashMap) => {
        if (index < 0 || index >= hashMap.length) {
            throw new Error('Trying to access index out of bounds');
        } else return true;
    };

    const checkPassedMapCapacity = (size, capacity) => {
        return getMapSize() >= getMapCapacity() * loadFactor ? true : false;
    };

    const resizeMap = () => {
        let oldMap = getHashMap();
        mapSize = 0;
        doubleMapCapacity();
        createHashMap(mapCapacity);
        let newMapIndex = 0;

        oldMap.forEach((itemInMap, index) => {
            if (itemInMap) {
                // console.log(itemInMap);
                if (itemInMap.next === null) {
                    getHashMap()[newMapIndex] = itemInMap;
                    newMapIndex += 1;
                } else {
                    let currentMapItem = itemInMap;
                    while (currentMapItem.next) {
                        getHashMap()[newMapIndex] = currentMapItem;
                        currentMapItem = currentMapItem.next;
                        newMapIndex += 1;
                    }
                }
            }
        });
    };

    //  Takes two arguments: the first is a key, and the second is a value that is
    // assigned to this key. If a key already exists, then the old value is overwritten.
    const set = (key, val) => {
        const index = hashCodeGenerate(key, getMapCapacity());

        if (!validateIndex(index, getHashMap())) {
            return;
        }

        if (getHashMap()[index] === null) {
            getHashMap()[index] = NodeInLink(key, val);
            // console.log('hm: ', getHashMap()[index]);
            increaseMapSize(1);
        } else {
            let bucketVal = getHashMap()[index];

            if (!containsKey(bucketVal, key)) {
                append(bucketVal, key, val);
                increaseMapSize(1);
            } else {
                modifyAtKey(bucketVal, key, val);
            }
        }

        if (checkPassedMapCapacity(getMapSize(), getMapCapacity())) {
            console.log('Need resize');

            resizeMap();
        }
    };

    // Takes one argument as a key and returns the value that is assigned to this key.
    // If a key is not found, return null.
    const get = (key) => {
        const index = hashCodeGenerate(key, getMapCapacity());

        if (!validateIndex(index, getHashMap())) {
            return null;
        }

        if (getHashMap()[index] === null) {
            return null;
        } else {
            let bucketVal = getHashMap()[index];
            if (!containsKey(bucketVal, key)) {
                return null;
            } else {
                return findNodeByKey(bucketVal, key);
            }
        }
    };

    // Returns true or false based on whether or not the key is in the hash map.
    const has = (key) => {
        const index = hashCodeGenerate(key, getMapCapacity());

        if (!validateIndex(index, getHashMap())) {
            return false;
        }

        if (getHashMap()[index] === null) {
            return false;
        } else {
            let bucketVal = getHashMap()[index];
            return !containsKey(bucketVal, key) ? false : true;
        }
    };

    // If the given key is in the hash map, remove the entry with that key and return true.
    // Otherwise do nothing, return false.
    const remove = (key) => {
        const index = hashCodeGenerate(key, getMapCapacity());

        if (!validateIndex(index, getHashMap())) {
            return false;
        }

        if (getHashMap()[index] === null) {
            return false;
        } else {
            let bucketVal = getHashMap()[index];
            if (!containsKey(bucketVal, key)) {
                return false;
            } else {
                const nodeIndex = findIndexByKey(bucketVal, key);
                removeAtIndex(bucketVal, nodeIndex);
                decreaseMapSize(1);

                if (checkPassedMapCapacity(getMapSize(), getMapCapacity())) {
                    console.log('Need resize');

                    resizeMap();
                }

                return true;
            }
        }
    };

    // Return the number of stored keys in the hash map.
    const totalNumberKey = () => {
        let ret = 0;

        getHashMap().forEach((item) => {
            if (item) {
                ret += size(item);
            }
        });

        return ret;
    };

    // Removes all entries in the hash map.
    const clearMap = () => {
        getHashMap().forEach((item, index) => {
            if (item) {
                getHashMap()[index] = null;
            }
        });
        mapSize = 0;
    };

    // Returns an array containing all the keys inside the hash map.
    const keys = () => {
        let ret = [];
        getHashMap().forEach((item, index) => {
            if (item) {
                const itemKeys = keysInList(item);
                ret = ret.concat(itemKeys);
            }
        });
        return ret;
    };

    // Returns an array containing all the values inside the hash map.
    const values = () => {
        let ret = [];
        getHashMap().forEach((item, index) => {
            if (item) {
                const itemKeys = valuesInList(item);
                ret = ret.concat(itemKeys);
            }
        });
        return ret;
    };

    // Returns an array containing all pair of keys nad values inside the hash map.
    const entries = () => {
        let ret = [];
        getHashMap().forEach((item, index) => {
            if (item) {
                const itemKeys = keysValuesPairInList(item);
                ret = ret.concat(itemKeys);
            }
        });
        return ret;
    };

    return { createHashMap, getHashMap, set, get, has, remove, totalNumberKey, clearMap, keys, values, entries };
};

const map = hashMap();
map.createHashMap(16);

map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('carrot', 'orange');
map.set('dog', 'brown');
map.set('elephant', 'gray');
map.set('frog', 'green');
map.set('grape', 'purple');
map.set('hat', 'black');
map.set('ice cream', 'white');
map.set('jacket', 'blue');
map.set('kite', 'pink');
map.set('lion', 'golden');

map.set('tempKey', 'tempVal');
map.set('tempKey', 'Val');
map.set('tempkey', 'NONE');

// map.get('tempkey');
console.log(map.getHashMap());
console.log('total stored key: ', map.totalNumberKey());

// console.log(map.get('kite'));
// console.log(map.has('tempkey'));
// map.remove('lion');
// map.clearMap();

console.log('all stored keys: ', map.keys());
console.log('all stored values: ', map.values());
// console.log('all stored key + value pairs: ', map.entries());

console.log('total stored key: ', map.totalNumberKey());
console.log(map.getHashMap());
