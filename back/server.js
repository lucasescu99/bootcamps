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
const apiRoutes = require('./routes');
const { Usuario } = require('./models/Usuario');
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
app.use('/api', apiRoutes);
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

passport.serializeUser(function (user, done) {
  done(null, user.id);
}); /* esta funcion esta serializando el usuario=> como guardo el usuario */

passport.deserializeUser(function (id, done) {
  Usuario.findById(id)
    .then(user => done(null, user));
}); /* esta funcion esta deserializando el usuario => como veo el usuario */

// ESTRATEGIAS DE AUTORIZACION

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function (username, password, done) {
    console.log('passport CL', username, password);
    Usuario.findOne({ where: { email: username } })
      .then(function (user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
      .catch(done);
  }
));

passport.use(new FacebookStrategy(
  {
    clientID: 534343110422200,
    clientSecret: '74332d39f7be9566a75186136ebc6c43',
    callbackURL: 'http://localhost:8080/',
    profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
  },
  function (accessToken, refreshToken, profile, done) {
    var values = {
      nombre: profile._json.first_name,
      apellido: profile._json.last_name,
      email: profile._json.email,
      domicilio: profile._json.email,
      password: profile._json.id,
      isAdmin: false
    };
    console.log('VALUES DEL CREATE', values);
    var selector = { where: { email: profile._json.email } };

    Usuario.findOne(selector)
      .then(usuario => {
        if (!usuario) {
          Usuario.create(values)
            .then(user => done(user))
            .catch(err => done(err));
        } else {
          return done(usuario);
        }
      });
  }
));

passport.use(new GoogleStrategy(
  {
    clientID: '575356366611-oe9hvokav8cl63iah1ae1babo8fap8se.apps.googleusercontent.com',
    clientSecret: 'KXgQzcANwnz73Z5dnZvO5Ffj',
    callbackURL: 'http://localhost:8080/'
  },
  function (accessToken, refreshToken, profile, done) {
    console.log('PROFILE DE GOOGLE', profile);

    var values = {
      nombre: profile.given_name,
      apellido: profile.family_name,
      email: profile.email,
      domicilio: profile.family_name,
      password: profile.sub,
      isAdmin: false
    };

    console.log('VALUES DEL CREATE', values);

    var selector = { where: { email: profile.email } };

    Usuario.findOne(selector)
      .then(usuario => {
        if (!usuario) {
          Usuario.create(values)
            .then(user => done(user))
            .catch(err => done(err));
        } else {
          return done(usuario);
        }
      });
  }
));

sessionStore.sync()
  .then(() => {
    db.sync({ force: false }).then((con) => {
      console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`);
      app.listen(PORT, () => console.log('SERVER LISTENING AT PORT', PORT));
    });
  });
