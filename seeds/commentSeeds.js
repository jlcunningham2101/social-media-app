const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentSeedData = require('./commentSeedData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const comments = await Comment.bulkCreate(commentSeedData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedAll();




