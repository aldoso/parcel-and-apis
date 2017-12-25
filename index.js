const jokes = require('./source')

jokes.getOne().then(joke => {
  document.querySelector('main').innerHTML = joke;
})
