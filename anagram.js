function sortPlease(arr) {
    for (let i = 0; i < (arr.length - 1); i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function getResults(arr) {
    let group = [];
    let newArr = [];
    let newArrGrouped = new Array(arr.length).fill(false);

    for (let i = 0; i < arr.length; i++) {
        if (newArrGrouped[i]) continue;

        group.push(arr[i]);
        newArrGrouped[i] = true;

        let firstSortedWord = sortPlease(arr[i].split("")).join("");

        for (let j = i + 1; j < arr.length; j++) {
            if (newArrGrouped[j]) continue;

            let secondSortedWord = sortPlease(arr[j].split("")).join("");

            let isSame = true;

            if (firstSortedWord.length === secondSortedWord.length) {
                for (let k = 0; k < firstSortedWord.length; k++) {
                    if (firstSortedWord[k] !== secondSortedWord[k]) {
                        isSame = false;
                        break;
                    }
                }
            } else {
                isSame = false;
            }

            if (isSame) {
                group.push(arr[j]);
                newArrGrouped[j] = true;
            }
        }

        newArr.push(group);
        group = [];
    }

    return newArr;
}

const arr = ["cook", "save", "taste", "aves", "vase", "state", "map"];

let results = getResults(arr);

console.log(results);