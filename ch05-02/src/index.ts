import { range } from './range'
import { fold } from './fold'
import { filter } from './fillter'
import { map } from './map'

let numbers: number[] = range(1,10+1)
let result = fold(numbers, (result, value) => result + value, 0)
console.log(result)

const isEven = (n: number): boolean => n % 2 == 0
const isOdd = (n: number): boolean => n % 2 != 0
let result2 = fold(filter(numbers, isEven), (result, value) => result + value, 0)
let result3 = fold(filter(numbers, isOdd), (result, value) => result + value, 0)
console.log(result2)
console.log(result3)

let result4 = fold(map(numbers, value => value * value), (result, value) => result + value, 0)
console.log(result4)


