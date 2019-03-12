# node-unit-testing #

A node.js project from Udemy course

- Course link: [Node.js Unit Testing In-Depth][1]
- Course Author: [Murtez Alrohani][2]
- Repo Author: [Francis Rodrigues][3]


## Running tests using Mocha ##

First you need to install npm dependencies running `npm install`.

After that `mocha` is capable to run your first test.

```bash
$ ./node_modules/.bin/mocha lib/demo.test.js


  demo test
    add
      ✓ should add two numbers
    callback add
      ✓ should test the callback


  2 passing (8ms)
```

## Running test coverage using Istanbul nyc ##

```bash
~$ cross-env NODE_ENV=development nyc --reporter=text npm test
```

Istanbul will wait for all existing tests to run and then present the coverage report on the console.

```bash
~$ cross-env NODE_ENV=development mocha './lib/**/*.test.js' --exit

  app
    GET /
      ✓ should get /
    POST /user
      ✓ should call user.create
      ✓ should call handleError on error
    GET /user/:id
      ✓ should get a user by your own id
      ✓ should call handleError on error
    DELETE /user/:id
      ✓ should call auth check function and users.delete on success
    handleError
      ✓ should check error instance and format message
      ✓ should return object without changing it if not instance of error

  demo test
    add
      ✓ should add two numbers
    callback add
      ✓ should test the callback
    test promise
      ✓ should add with a promise cb
      ✓ should test a promise with return
      ✓ should test promise with async / await
      ✓ should test promise with chai as promised
...

  52 passing (500ms)

---------------|----------|----------|----------|----------|-------------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Lines   |
---------------|----------|----------|----------|----------|-------------------|
All files      |     87.5 |    89.19 |       74 |    87.42 |                   |
 TDD           |      100 |      100 |      100 |      100 |                   |
  user.js      |      100 |      100 |      100 |      100 |                   |
 config        |       75 |       50 |      100 |       75 |                   |
  database.js  |       75 |       50 |      100 |       75 |                 3 |
 lib           |    87.25 |    90.91 |    72.92 |    87.16 |                   |
  app.js       |    96.43 |      100 |    90.91 |    96.43 |                42 |
  auth.js      |       25 |        0 |        0 |       25 |             2,3,6 |
  config.js    |       50 |      100 |        0 |       50 |                 3 |
  demo.js      |       56 |      100 |    41.67 |       56 |... 45,47,48,49,50 |
  invisible.js |      100 |      100 |      100 |      100 |                   |
  mailer.js    |      100 |      100 |      100 |      100 |                   |
  order.js     |     96.3 |       50 |      100 |     96.3 |                20 |
  users.js     |      100 |      100 |      100 |      100 |                   |
  utils.js     |    81.82 |      100 |       25 |       80 |             20,22 |
 lib/models    |      100 |      100 |      100 |      100 |                   |
  user.js      |      100 |      100 |      100 |      100 |                   |
---------------|----------|----------|----------|----------|-------------------|
```

## References ##

- [Mocha - simple, flexible, fun javascript test framework for node.js and in the browser][6]
- [Extends Chai with assertions for the Sinon.js mocking framework][4]
- [Chai Assertion Library][5]
- [rewire - Easy monkey-patching for node.js unit tests][7]
- [JavaScript test coverage made simple][8]

## License ##

MIT


  [1]: https://www.udemy.com/nodejs-unit-testing-in-depth
  [2]: https://www.udemy.com/user/murtez-alrohani/
  [3]: https://github.com/francisrod01/
  [4]: https://github.com/domenic/sinon-chai
  [5]: https://www.chaijs.com/plugins/
  [6]: https://github.com/mochajs/mocha
  [7]: https://github.com/jhnns/rewire
  [8]: https://istanbul.js.org/
