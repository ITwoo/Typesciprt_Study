const f = (callback: () => void): void => callback()

const fu = function(){
  console.log('fu')
  return 1;
}

const re = f(fu)
console.log(re)