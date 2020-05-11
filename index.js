const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5001
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express()

app.use(express.static(path.join(__dirname, 'client/dist/client')))
//app.set('views', path.join(__dirname, 'views'))
//app.set('view engine', 'ejs')
//app.get('*', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw({
    type: 'application/octetstream',
    limit: '10mb'
}));
app.use(cookieParser());

app.get('*', function(req, res) {	
  res.status(200).sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});