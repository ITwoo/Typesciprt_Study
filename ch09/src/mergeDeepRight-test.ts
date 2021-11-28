import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'
import { ILocation, makeRandomILocation } from './model/location'
import { ICoordinates, makeRandomICoordinates } from './model/coordinates'

const person: IPerson = makeRandomIPerson()
const location: ILocation = makeRandomILocation()
const coordinates: ICoordinates = makeRandomICoordinates()

// const newLocation = R.mergeRight(location, {coordinates})
const newPerson = R.mergeRight(person, {location: location})
const newPerson1 = R.mergeDeepRight(person, {location: location})

console.log('newPerson:',newPerson)
console.log('person:', newPerson1)