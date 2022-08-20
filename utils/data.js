const names = [
  'Lainey',
  'Nazia',
  'Corbin',
  'Iosif',
  'Dayna',
  'Renesmae',
  'Owain',
  'Herbie',
  'Jakob',
  'Rayyan',
  'Divine',
  'Giacomo',
  'Isabelle',
  'Pooja',
  'Charly',
];

const appMessages = [
  'The rights of every man are diminished when the rights of one man are threatened.',

  'Challenge and adversity are meant to help you know who you are. Storms hit your weakness, but unlock your true strength.',

  'When you do the right thing, you get the feeling of peace and serenity associated with it. Do it again and again.',

  'My happiness grows in direct proportion to my acceptance, and in inverse proportion to my expectations.',
];

const reactions = ['Love', 'Like', 'Haha', 'Wow', 'Sad', 'Angry'];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(appMessages),
      username: getRandomName().split(' ')[0],
    });
  }
  return results;
};

const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomReactions };
