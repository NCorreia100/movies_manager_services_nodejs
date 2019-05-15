

var sorter = function (array) {
    let newArray = [array.shift()];

    while (array.length > 0) {
        newArray.forEach((elem, i) => {
            if (array[0] > newArray[newArray.length - 1]) {
                newArray.push(array.shift());
                return;
            }
            if (array[0] <= elem) newArray.splice(i, 0, array.shift());
        });
    }
    return newArray;
}
console.log(sorter([10, 9, 8, 7, 6, 5, 21, 35, -4]));
