import * as R from 'ramda'

const array: number[] = R.range(1, 10)
R.tap(n=> console.log(n))(array)
