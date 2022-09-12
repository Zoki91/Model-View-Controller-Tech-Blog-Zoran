// Import all Modules
const sequelize = require('../config/connection');
const postSeed = require('./postSeed');
const userSeed = require('./userSeed');
const commentSeed = require('./commentSeed');

const setSeeds = async () => {
  try {
    await sequelize.sync({ force: true });
    // console.log('\n----- DATABASE SYNCED -----\n');

    await userSeed();
    // console.log('USERS SEEDED');

    await postSeed();
    // console.log('POSTS SEEDED');

    await commentSeed();
    // console.log('COMMENTS SEEDED');

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = setSeeds;