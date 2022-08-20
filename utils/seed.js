const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  getRandomName,
  getRandomThoughts,
  getRandomReactions,
} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  const thoughts = [];

  for (let i = 0; i < 10; i++) {
    const reactions = getRandomReactions();

    const thought = getRandomThoughts(5);

    const username = getRandomName();

    thoughts.push({
      username,
      thought,
      reactions,
    });
  }
  console.log('Thoughts is', thoughts);
  await Thought.collection.insertMany(thoughts);

  console.log('Added thoughts, next is user..');

  await User.collection.insertOne({
    username: 'Itzel',
    email: 'itzel@gmail.com',
    thoughts: [...thoughts],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
