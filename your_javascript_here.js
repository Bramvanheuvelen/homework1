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
  var newHealth = defender.health - attacker.weapon.damage
defender.health = newHealth;
  return defender;
}

function equipWeapon (creature, index) {
index = [i];
var weapon = creature.inventory.indexOf(index);
console.log(test2)
creature.weapon = weapon;
console.log(test2)

return creature
}

function doBattle (heroicCreature, creature) {
  var heroicCreature
  var heroic

  if (heroicCreature != heroic) {
    return null;
  }

while (heroicCreature.health > 0 && creature.health > 0) {
  dealDamage(heroicCreature, creature);
  return creature.health;
  if (creature.health > 0) {
    dealDamage(creature, heroicCreature);
    return heroicCreature.health
  }
  else if (heroicCreature.health > 0) {
    return heroicCreature.health
  }
    else {
      window.prompt('Your hero is DEAD!!!!!');
    }
  }
}



//- `doBattle` is a function that takes two creatures, the first of which is a hero, which deal damage to each other until one of them dies.
//  1. `doBattle` should have two parameters `heroicCreature` and `creature`. You can assume that both have the same structure as your `hero` object.
//  2. make a guard clause which checks if `heroicCreature` is `heroic`. If `heroicCreature` is not `heroic` return `null` from this function.
//  3. while `heroicCreature` and `creature` have health above zero they take turns dealingDamage to eachother: `heroicCreature` deals damage to `creature` first. If `creature` survives it deals damage to `heroicCreature`.
//  4. at the end of `doBattle` check if `heroicCreature` has health above zero; if so return it from the function. Otherwise give the user feedback about the death of their hero with a popup.


// UI
var image = document.getElementById('onclick-image2');
image.onclick = rest(event) {
    console.log('I was resting');
  }
