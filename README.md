# cra-envs
> An env-cmd helper for cra.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -D env-cmd
npm install -S @jswork/cra-envs
```

## usage
- https://js.work/works/bd65bc9da65c5

```js
// ---------- .env-cmdrc.js
const CraEnvs = require('@jswork/cra-envs').default;

module.exports = CraEnvs.set({
  "local": {
    "API_URL": "http://localhost:3000",
    "BUILD_ENV": 'local-api.github.com/users/afeiship',
  },
  "beta": {
    "API_URL": "http://beta.api.com",
    "BUILD_ENV": 'beta-api.github.com/users/afeiship',
  },
  "production": {
    "API_URL": "http://api.com",
    "BUILD_ENV": 'api.github.com/users/afeiship',
  },
});

// ---------- app.tsx
// get 'BUILD_ENV'
const buildEnv = CraEnvs.get('BUILD_ENV');
// get all
const envs = CraEnvs.get();
```

## license
Code released under [the MIT license](https://github.com/afeiship/cra-envs/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/cra-envs
[version-url]: https://npmjs.org/package/@jswork/cra-envs

[license-image]: https://img.shields.io/npm/l/@jswork/cra-envs
[license-url]: https://github.com/afeiship/cra-envs/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/cra-envs
[size-url]: https://github.com/afeiship/cra-envs/blob/master/dist/cra-envs.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/cra-envs
[download-url]: https://www.npmjs.com/package/@jswork/cra-envs
