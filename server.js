// Load all modules
const express = require('express')
const path = require('path')
const session = require('express-session')
const routes = require('./controller/index')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const app = express();

// Import seeds
const setSeeds = require('./seeds');

// import sequelize connection
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)



// Create Sessions
const sess = {
  // Key to Sign the Cookie
  secret: 'this is a secret',
  cookie: { maxAge: 840000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

// Session Middleware
app.use(session(sess))




// Handlebars Engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "/public/img")));



app.use(routes);

setSeeds()
  .then(() => {
    sequelize.sync({ force: false })
      .then(() => {
        app.listen(PORT, () => console.log("Now listening http://localhost:" + PORT))
      })
  })
  .catch(error => console.log(error.message))