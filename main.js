function removeDuplicates() {
    return Array.from(new Set(arr));
}

const arr = [1, 2,  2, 3, 3, 4, 1, 2];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);
// remove duplicate numbers form the array