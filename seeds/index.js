// Import all Modules
require('dotenv').config();
const sequelize = require('../config/connection');
const postSeed = require('./postSeed');
const userSeed = require('./userSeed');
const commentSeed = require('./commentSeed');


const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await userSeed();
    console.log('USERS SEEDED');
  
  await postSeed();
    console.log('POSTS SEEDED');

  await commentSeed();
    console.log('COMMENTS SEEDED');

  process.exit(0);
};

seedAll();