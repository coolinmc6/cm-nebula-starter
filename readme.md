# Webpack Starter Repo

This is a starter for any new webpack project with the main loaders / plugins that I would want. This starter comes with the following:
- Sass
- React (including Babel)
- Webpack Dev Server
- HtmlWebpackPlugin (for changes to your `index.html` file in `/src`)
- Material UI

To get started, clone the repo and type `npm i` in the terminal. Use `npm run build` to build your project and `npm run dev` to develop. See your code at `localhost:9000`. 

## Scripts and Config Files:

### Scripts

```sh
# Webpack and Webpack CLI
npm i webpack webpack-cli --save-dev

# Babel-loader plus necessary presets and babel-core
npm i babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev

# React
npm i react react-dom --save

# Style (CSS & SCSS) and Image Loaders
npm i style-loader css-loader sass-loader node-sass url-loader --save-dev

# Webpack Dev Server
npm i webpack-dev-server --save-dev

# HtmlWebpackPlugin
npm i --save-dev html-webpack-plugin
```

### Webpack Config

```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|bmp|gif)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            }
        ]
    }
    
}
```

### Babel Config

```js
// .babelrc
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## Webpack Step-by-Step Setup

### 1. Webpack Installation

- After initializing `package.json` using `npm init`, do the following:

```sh
npm i webpack webpack-cli --save-dev
```
- Do `touch webpack.config.js` in your Terminal (to create the file) and then enter the following:

```js
const path = require("path");

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    }
}
```
- this is the basic setup

### 2. Babel Loader, Presets, and Config

- In the terminal:

```sh
npm i babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
```
- update the `webpack.config.js` file:

```js
const path = require("path");

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
    // New Code (below)
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    } 
}
```
- create the `.babelrc` (Babel config) file

```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### 3. React (and React DOM)

```sh
npm i react react-dom --save
```

### 4. Style (CSS & SCSS) and Image Loaders

- Install the necessary loaders:

```sh
npm i style-loader css-loader sass-loader node-sass url-loader --save-dev
```
- update the `webpack.config.js` file with these additional rules:

```js
{
    test: /\.(scss|css)$/,
    use: [
        { loader: 'style-loader'},
        { loader: 'css-loader' },
        { loader: 'sass-loader' }
    ]
},
{
    test: /\.(png|jpg|jpeg|bmp|gif)$/,
    use: [
        { loader: 'url-loader' }
    ]
}
```

- **Note**: the order of the loaders for the CSS and SCSS is **not** arbitrary. Notice that you can use both - you really don't need to look for a CSS file if you won't have one but I included it here just in case there's a CSS file.

### 5. Webpack Dev Server

- Install the `webpack-dev-server` (more info here: [https://webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/))

```sh
npm i webpack-dev-server --save-dev
```
- Update your `webpack.config.js` file with this property:

```js
devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
},
```

- Finally, add a script to your `package.json` to allow automatic updates:

```js
"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
},
```

### 6. HtmlWebpackPlugin

- install the HtmlWebpackPlugin plugin:

```sh
npm i --save-dev html-webpack-plugin
```
- Update the webpack config file

```js
const path = require("path"); // old code
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.export = {
    // code
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
}
```


