/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */

function containDuplicate(nums) {
    const angkaduplikat = new Set(); //deklarasi objek

    //perulangan utk array number
    for (let i = 0; i < nums.length; i++) {
        if (angkaduplikat.has(nums[i])) {
            return true; //output true kalau ada yg sama dan ditambahkan ke objek
        }
        angkaduplikat.add(nums[i]);
    }
    return false;//output false jika gada yg sama
}

console.log(containDuplicate([1, 2, 3, 1]));
console.log(containDuplicate([1, 2, 3, 4])); 
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));