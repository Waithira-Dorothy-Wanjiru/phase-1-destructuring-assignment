const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

const { moo, neigh, baa, oink, cluck } = animalSounds;

const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

const { bessie, dolly, babe, little } = animalNames;


const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

const { blackAndWhite, black, pink } = animalColors;


const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;


const [r, o, y, g, b, , v] = rainbowColors;


const [, , , , , indg] = rainbowColors;


const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { muppetName, color, song, job, partner } = muppet;


const muppetInfo = {
  songs: ["Rainbow Connection", "Moving Right Along", "Bein' Green", "I Hope That Something Better Comes Along"],
  kermit: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

const { songs: [, song2, , song4], kermit: { job: nestedJob, partner: nestedPartner } } = muppetInfo;
