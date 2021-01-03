const path = require('path');

module.exports = [
  {
    entry: './index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'emojiSprinkle',
      libraryTarget: 'umd',
    },
  },
  {
    entry: './index.js',
    output: {
      filename: 'window.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'EmojiSprinkle',
      libraryTarget: 'window',
    },
  },
];
