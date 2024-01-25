# fullscreen
> Fullscreen API.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/fullscreen
```

## usage
```js
import fullscreen from '@jswork/fullscreen';

// enter fullscreen
fullscreen.request()

// exit fullscreen
fullscreen.exit()

// toggle fullscreen
fullscreen.toggle()

// register event
const res = fullscreen.on((e)=>console.log(e));

// unregister event
res.destroy();

// detect fullscreen status
fullscreen.isFullscreen
```

> in html
```html
<button id="p1">Request Fullscreen</button>
<button id="p2">Exit Fullscreen</button>
<script>
    const el1 = document.getElementById('p1');
    const el2 = document.getElementById('p2');
    el1.addEventListener('click', () => {
      fullscreen.request();
    });

    el2.addEventListener('click', () => {
      fullscreen.exit();
    });
</script>
```

## types
```ts
/// <reference types="@jswork/fullscreen/global.d.ts" />
```

## license
Code released under [the MIT license](https://github.com/afeiship/fullscreen/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/fullscreen
[version-url]: https://npmjs.org/package/@jswork/fullscreen

[license-image]: https://img.shields.io/npm/l/@jswork/fullscreen
[license-url]: https://github.com/afeiship/fullscreen/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/fullscreen
[size-url]: https://github.com/afeiship/fullscreen/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/fullscreen
[download-url]: https://www.npmjs.com/package/@jswork/fullscreen
