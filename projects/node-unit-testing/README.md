# node-unit-testing #

A node.js project from Udemy course

- Course link: [Node.js Unit Testing In-Depth][1]
- Course Author: [Murtez Alrohani][2]
- Repo Author: [Francis Rodrigues][3]


## Running tests ##

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

## References ##

- [Mocha - simple, flexible, fun javascript test framework for node.js and in the browser][6]
- [Extends Chai with assertions for the Sinon.js mocking framework][4]
- [Chai Assertion Library][5]
- [rewire - Easy monkey-patching for node.js unit tests][7]

## License ##

MIT


  [1]: https://www.udemy.com/nodejs-unit-testing-in-depth
  [2]: https://www.udemy.com/user/murtez-alrohani/
  [3]: https://github.com/francisrod01/
  [4]: https://github.com/domenic/sinon-chai
  [5]: https://www.chaijs.com/plugins/
  [6]: https://github.com/mochajs/mocha
  [7]: https://github.com/jhnns/rewire
