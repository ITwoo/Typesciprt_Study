import { pureSort } from "./pureSort";

let array: number[] = [3,2,1,4,5]
const array1: number[] = pureSort(array)
array1[0] = 2
console.log(array,array1)