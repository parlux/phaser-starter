import 'p2'
import 'pixi'
import 'phaser'

import './style.scss'
import phaserLogoImage from './phaser.png'

window.onload = function() {
  const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create })

  function preload () {
    game.load.image('logo', phaserLogoImage)
  }

  function create () {
    const logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo')
    logo.anchor.setTo(0.5, 0.5)
  }
}