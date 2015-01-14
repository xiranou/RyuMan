var State = {};
var music={};

State.preload = function(){
  game.load.tilemap('level1', 'assets/levels/level_one.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('background', 'assets/imgs/background_level1.png');
  game.load.atlasJSONHash('ryuRun', 'assets/ryu/ryu.json', 'assets/ryu/ryu.png');
  game.load.audio('theme', ['assets/audio/dp_pacmania_stage2.mp3']);
  Ryu.preload();

};
State.create = function(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.tileSprite(0, 0, 4060, 224, 'background');
  game.world.setBounds(0, 0, 4060, 224);
  Ryu.create();
  map = game.add.tilemap('level1');
  map.addTilesetImage('background_level1', 'background');
  map.setCollisionBetween(1, 100000, true, 'Collision');
  // 'ryuman_level1' is the name used in Tiled Map Editor
  // 'Background' is the name of the layer in the tiled file
  // this.backgroundLayer = this.map.createLayer('Background');
  // this.blockedLayer = this.createLayer('Collision');
  //collision on blockedLayer
  //resizes the game world
  //this.backgroundLayer.resizeWorld();

  music = game.add.audio('theme',1,true);
  music.override = true;
  music.addMarker('map', 0, 1, true);
  music.play('map');
  // music.play();
};
State.update = function(){
  Ryu.update();
};
State.render = function() {
  Ryu.render();
  // game.debug.soundInfo(music,0,100);
};

var game = game || new Phaser.Game(800,224,Phaser.AUTO,'ryuman',State);
