import 'p2'
import 'pixi'
import 'phaser'

import phaserLogo from './phaser.png'

window.onload = function() {
  const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {

    preload: function() {
      game.load.image('logo', phaserLogo)
    },

    create: function() {
      const logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo')
      logo.anchor.setTo(0.5, 0.5)
    }

  })
}