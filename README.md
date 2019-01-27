# nodejs-unit-testing-in-depth

A focused, in-depth look into Node.js unit testing, from absolute beginner to very advanced

- Repo based on [Udemy course][1]
- Repo author: [Francis Rodrigues][2]

## How to run it ##

Using `mocha` you can run a `tests/` folder or a simply file:

```bash
~$ ./node_modules/.bin/mocha tests/<file>.js
```

We can run instead tests on the entire project folders as below:

```bash
~$ ./node_modules/.bin/mocha './lib/**/*.test.js' --recursive
```

or just run the `npm test` command:

```bash
~$ npm test

> nodejs-unit-testing-in-depth@0.0.1 test
> mocha './lib/**/*.test.js'

  foo test
    ✓ should compare some values
    ✓ should test some other stuff

  nested test
    - this is from the nested file

  2 passing (10ms)
  1 pending
```

You can also run tests using `cross-env` passing environment variables to write tests presenting a special configuration:

```bash
> nodejs-unit-testing-in-depth@0.0.1 test
> cross-env NODE_ENV=development mocha './lib/**/*.test.js'

  foo test
ENV:  development
    ✓ should compare some values
    ✓ should test some other stuff

  nested test
    - this is from the nested file

  2 passing (10ms)
  1 pending
  ```


## License ##

MIT

 [1]: https://www.udemy.com/nodejs-unit-testing-in-depth
 [2]: https://github.com/francisrod01
