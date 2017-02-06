# YION PUGJS PLUGIN

A [Pugjs](https://pugjs.org) plugin for framework [Yion](https://www.npmjs.com/package/yion)

## Install

```
$ npm install --save yion-pug
```

## Usage

```javascript
const { createServer, createApp } = require('yion');
const pugRender = require('yion-pug');

const app = createApp();
const server = createServer(app, [pugRender]);

app.get('/', (req, res) => {
    res.render('home.pug', { name: 'John' });
});
```

## API reference

Response render method :

* `render(filepath, options = {}, status = 200)`: render file template with Pugjs 

