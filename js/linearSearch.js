const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);//test
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        const currentIndex = arrayToSearchThrough[i];
        if (valueToFind === currentIndex) {
            return i;
        }
    }
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let arrayOfIndexes = new Array;
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        const currentIndex = arrayToSearchThrough[i];
        if (valueToFind === currentIndex) {
            arrayOfIndexes.push(i);
        }
    }
    return arrayOfIndexes;
}
