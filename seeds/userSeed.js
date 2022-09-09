// / Import the Moduels
const { User } = require('../models')

// Preparing the Data
const userData = [
  {
    username: 'Zoki',
    email: 'zoki@mail.com',
    password: '12345'
  },
  {
    username: 'Archie',
    email: 'archie@mail.com',
    password: '12345'
  },
  {
    username: 'Karami',
    email: 'karami@mail.com',
    password: '12345'
  },
  {
    username: 'Matty',
    email: 'Matty@mail.com',
    password: '12345'
  },
  {
    username: 'Rob',
    email: 'Rob@mail.com',
    password: '12345'
  },

];

// Bulk Create Data
const userSeed = async () => {

  await User.bulkCreate(userData, {
    individualHooks: true, // to trigger before save hook
  });
}

// export moduels
module.exports = userSeed