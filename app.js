const filterOutOdd2 = (...nums) => {
    return nums.filter(val => val % 2 === 0);
}

const findMin = (...nums) => {
    return Math.min(...nums);
}

const mergeObjects = (object1, object2) => {
    return ({...object1, ...object2});
}

const doubleAndReturnArgs = (arr, ...nums) => {
    return [...arr, ...nums.map(val => val * 2)];
}

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}