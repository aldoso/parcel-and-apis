// old way
// const jokes = require('./source')

// es6 way
import {jokes} from './source'
// console.log('it works')

jokes.getOne().then(joke => {
  document.querySelector('main').innerHTML = joke;
})
