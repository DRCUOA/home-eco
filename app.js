const express = require('express');
const app = express();
const config = require('./default.json');
const port = process.env.port || 5001;
const debug = require('debug')('app:genDebug');
const morgan = require('morgan');
const { monitorEventLoopDelay } = require('perf_hooks');

app.get('/', function start(req, res) {
  console.log(`index route up`);
  res.send('Hi!')
})

debug('debug running')
app.use(morgan('tiny'));

app.listen(port, () => console.log(`Home Eco Up | App listening on port ${port}`))