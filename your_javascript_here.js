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
  // var item = {};
  // creature.inventory = [];
  creature.inventory.push(item);
  return creature;
}

function dealDamage(attacker, defender) {
  var health == defender.health;
  var damage == attacker.weapon.damage;

  var newHealth = health - damage;
  defender.health.push(newHealth);
  return defender;
}



// UI
