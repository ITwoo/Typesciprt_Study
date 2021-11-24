import { range } from "./range";

const array: number[] = range(1,3+1)
const half: number = array.length/2
let forward: number[] = array.filter((val, index) => index < half)
let back: number[] = array.filter((val, index) => index >= half)

console.log(forward)
console.log(back)
console.log(half)

