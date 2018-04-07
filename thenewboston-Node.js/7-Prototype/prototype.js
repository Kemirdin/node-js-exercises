function User () {
  this.name = '';
  this.life = 100;
  this.giveLife = function giveLife (targetPlayer) {
    targetPlayer.life += 1;
    console.log (this.name + ' gave 1 life to ' + targetPlayer.name);
  };
}
var Hakan = new User ();
var Erkan = new User ();
Hakan.name = 'Hakan';
Erkan.name = 'Erkan';

Hakan.giveLife (Erkan);
console.log ('Hakan: ' + Hakan.life);
console.log ('Erkan: ' + Erkan.life);

//You can add function to all objects
User.prototype.uppercut = function uppercut (targetPlayer) {
  targetPlayer.life -= 3;
  console.log (this.name + ' just uppercutted ' + targetPlayer.name);
};
Erkan.uppercut (Hakan);
console.log ('Hakan: ' + Hakan.life);
console.log ('Erkan' + Erkan.life);

//You can add properties to all objects
User.prototype.magic = 60;
console.log (Hakan.magic);
console.log (Erkan.magic);
