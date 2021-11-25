const getAllResolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

getAllResolvedResult<any>([Promise.resolve(true), Promise.resolve('hello')])
.then(result => console.log(result))

getAllResolvedResult<any>([Promise.resolve(true), Promise.reject(new Error('error'))])
.then(result => console.log(result)).catch(error => console.log(error.message))

const test1 = async () => {

  let value = await Promise.resolve(Promise.resolve(1));
  console.log(value);
}
test1()
console.log('last')