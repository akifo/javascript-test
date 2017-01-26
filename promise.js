function foo () {
  return new Promise((resolve, reject) => {
    console.log('this is foo')
    resolve()
    // reject()
  })
}

function bar () {
  return new Promise((resolve, reject) => {
    console.log('this is bar')
    const isSuccess = Math.random()*10|0;
    (isSuccess) ? resolve() : reject();
  })
}

foo()
  .then(bar)
  .then(bar)
  .then(bar)
  .then(bar)
  .then(bar)
  .then(bar)
  .then(bar)
  .then(bar)
  .then(bar)
  .then(bar)
  .then(foo)
  .then(() => {
    console.log('All success!!');
  }).catch(() => {
    console.log('failed');
  })


