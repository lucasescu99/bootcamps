require('dotenv').config();
const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
const session = require('express-session');
var path = require('path');
var morgan = require('morgan');
const db = require('./config/db');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db });
const PORT = process.env.PORT || 8080;

app.use(cookieParser());
app.use(
  session({
    secret: 'passport',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
);

// ESTRATEGIAS DE LOGIN

const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize()); /* esta linea es de configuracion y cuidado con el orden, poner antes de las rutas */
app.use(passport.session()); /* esta idem */
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

sessionStore.sync()
  .then(() => {
    db.sync({ force: true }).then((con) => {
      console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`);
      app.listen(PORT, () => console.log('SERVER LISTENING AT PORT', PORT));
    });
  });
