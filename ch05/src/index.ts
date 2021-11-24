import {split} from './split'
import {join} from './join'

let array: number[] = new Array
array.push(1);

let array1 : string[] = new Array
array1.push('a');

console.log(
  split('hello'),
  split('h_e_l_l_o','_')
)

console.log(
  join([ 'h', 'e', 'l', 'l', 'o' ]),
  join([ 'h', 'e', 'l', 'l', 'o' ],'_')
)

let array2: number[] = [1,2,3,4,5]
let [first,second,third,...rest] = array2
console.log(first,second,third,rest);

let narray: number[] = [1]
let narray1: number[] = [2,3]
let mergeArray: number[] = [...narray,...narray1,4]
console.log(mergeArray)

let obj = {
  one: 1,
  two: 'a',
  three: true
}

let obj1 = {...obj,three:false}
console.log(obj1)

const range = (from:number,to:number) => 
  from < to ? [from,...range(from+1,to)]:[]

let numbers: number[] = range(1,9+1)
console.log(numbers)