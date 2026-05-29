const path = require('path');

const tsRule = {
  test: /\.ts$/,
  use: { loader: 'ts-loader', options: { transpileOnly: true } },
  exclude: /node_modules/,
};

module.exports = [
  {
    entry: './index.ts',
    module: { rules: [tsRule] },
    resolve: { extensions: ['.ts', '.js'] },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'emojiSprinkle',
      libraryTarget: 'umd',
    },
  },
  {
    entry: './index.ts',
    module: { rules: [tsRule] },
    resolve: { extensions: ['.ts', '.js'] },
    output: {
      filename: 'window.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'EmojiSprinkle',
      libraryTarget: 'window',
    },
  },
];
