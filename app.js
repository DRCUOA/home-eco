const express = require('express');
const app = express();
const config = require('./config/default.json');
const port = process.env.port || 5001;
const debug = require('debug')('app:genDebug');
const morgan = require('morgan');
const { monitorEventLoopDelay } = require('perf_hooks');
const exphbs = require('express-handlebars');
const path = require("path");

//serve static files to client side
app.use(express.static(path.join(__dirname, "public")));


//set-up view engine
const hbs = exphbs.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', function start(req, res) {
  console.log(`index route up`);
  res.render('index')
})

debug('debug running')
app.use(morgan('tiny'));

app.listen(port, () => console.log(`Home Eco Up | App listening on port ${port}`))