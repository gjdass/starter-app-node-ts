# starter-app-node-ts
[![Build Status](https://travis-ci.org/gjdass/starter-app-node-ts.svg?branch=master)](https://travis-ci.org/gjdass/starter-app-node-ts)

## The goal

Nothing too complicated. It's always painful to start any new app in Typescript for node since you have to package everything, to install a bunch of new libs and wrap everything together.

Well, this repo's goal is just that. Everything needed is already wrapped, ready-to-go.

## How to

```bash
$ npm install # well ... install everything
$ npm run build # one time build
$ npm run watch # TSC will wait for changes and recompile each time
$ npm start # it uses nodemon to keep running the app over changes
```

## Cool stuff inside

This list is not static. It will move over time if some new lib/new need appears.

* typescript - Because ... Because.
* lodash - To make everything simpler regarding data sort/manipulation.
* config - To handle the annoying job of dedicate a behavior of the app in certain cases etc.
* cross-env - To avoid having trouble with ENV variables on different OS.
* log4js - To log anything we want, in a console or in an ELK stack or whatever.

## Participate

It's really OK if there are some missing important things/libs in here, since I built this for my own usage.

Just make a [PR](https://github.com/gjdass/starter-app-node-ts/pulls) or a [new issue](https://github.com/gjdass/starter-app-node-ts/issues/new) to discuss the missing thing, and why not to integrate it.