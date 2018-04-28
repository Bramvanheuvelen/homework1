// Variables
var hero = {
  name:"Bram",
  heroic: new Boolean(),
  inventory: [],
  health:new Number(),
  weapon : { type: new String(), damage: new Number()},
};

// Game logic
function rest(creature) {
  creature.health = 10;
  return creature;
}

function pickUpItem(creature, item) {
  inventory.push(item);
  return creature;
}

// UI
