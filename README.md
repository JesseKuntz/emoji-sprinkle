<h1 align="center">
  emoji-sprinkle
</h1>

![](https://img.shields.io/npm/v/emoji-sprinkle)

![](./badges/badge-branches.svg)
![](./badges/badge-functions.svg)
![](./badges/badge-lines.svg)
![](./badges/badge-statements.svg)

I wanted to be able to sprinkle emojis across a web page and then let them fade out "randomly" so I made this package so that everyone can have that simple joy.

### [👉 Test It Out 👈](https://jessekuntz.github.io/emoji-sprinkle.html)

![](./emoji-sprinkle.gif)

## Install

```shell
npm i emoji-sprinkle
```

## Usage

```js
import { sprinkleEmojis } from 'emoji-sprinkle';

...

sprinkleEmojis();
```

## Options

<table>
  <thead>
    <tr>
      <th>
        Option
      </th>
      <th>
        Description
      </th>
      <th>
        Type
      </th>
      <th>
        Default
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>emoji</code>
      </td>
      <td>
        The desired emoji!
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        🧁
      </td>
    </tr>
    <tr>
      <td>
        <code>count</code>
      </td>
      <td>
        The number of emojis that will be sprinkled across the screen.
      </td>
      <td>
        <code>number</code>
      </td>
      <td>
        100
      </td>
    </tr>
    <tr>
      <td>
        <code>fade</code>
      </td>
      <td>
        The max amount of seconds that any one emoji will take to fade from the screen.
      </td>
      <td>
        <code>number</code>
      </td>
      <td>
        2
      </td>
    </tr>
    <tr>
      <td>
        <code>fontSize</code>
      </td>
      <td>
        The <code>font-size</code> of the emoji.
      </td>
      <td>
        <code>number</code>
      </td>
      <td>
        42
      </td>
    </tr>
  </tbody>
</table>

Example using custom options:
```js
sprinkleEmojis({ emoji: '🎉', count: 50, fade: 10, fontSize: 10 });
```

## Additional Customization

If more control over styling is needed, the following classes pertain to each element:
- `emoji-sprinkle-container`: the container holding all of the emojis, which is removed after the max fade duration is met
- `emoji-sprinkle`: each individual emoji

## Additional Usage Instructions

### SSR

If you are using SSR, you'll want to use the `window` version of the package instead. So for instance, if you are using Gatsby, you'll want to put this in your `gatsby-browser.js`:

```js
import 'emoji-sprinkle/window';
```

And then you can use it wherever you need to like this:

```js
window.EmojiSprinkle.sprinkleEmojis();
```

If you are still ending up with errors, it's worth checking if the `window` exists first, like this:

```js
if (typeof window !== 'undefined') {
  window.EmojiSprinkle.sprinkleEmojis();
}
```

### HTML

```html
<script src='https://unpkg.com/emoji-sprinkle@^<MAJOR-VERSION>/dist/window.js'></script>
```

Make sure to replace `<MAJOR-VERSION>` with the desired major version, like `1`.

Then you can use it like this:

```js
window.EmojiSprinkle.sprinkleEmojis();
```
