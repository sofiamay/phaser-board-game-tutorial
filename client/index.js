import * as Phaser from 'phaser';
import Game from './src/scenes/game';


const config = {
  name: 'app',
  type: Phaser.AUTO,
  width: 1200,
  height: 780,
  scene: [Game],
};

window.game = new Phaser.Game(config);
