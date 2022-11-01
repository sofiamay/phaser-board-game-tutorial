import Card from '../helpers/card';
import Zone from '../helpers/zone';

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        this.load.image('cyanCardFront', 'src/static/CyanCardFront.png');
        this.load.image('cyanCardBack', 'src/static/CyanCardBack.png');
        this.load.image('magentaCardFront', 'src/static/MagentaCardFront.png');
        this.load.image('magentaCardBack', 'src/static/MagentaCardBack.png');
    }

    create() {
        this.zone = new Zone(this);
        this.dropZone = this.zone.renderZone();
        this.outline = this.zone.renderOutline(this.dropZone);
        
        this.dealText = this.add.text(75, 350, ['DEAL CARDS'])
        	.setFontSize(18).setFontFamily('Trebuchet MS')
        	.setColor('#00ffff')
        	.setInteractive();

        let self = this;

        this.dealCards = () => {
        	for (let i = 0; i < 5; i++) {
                let playerCard = new Card(this);
                playerCard.render(475 + (i * 100), 650, 'cyanCardFront');
            }
        }

        this.dealText.on('pointerdown', function () {
            self.dealCards();
        })

        this.dealText.on('pointerover', function () {
            self.dealText.setColor('#ff69b4');
        })

        this.dealText.on('pointerout', function () {
            self.dealText.setColor('#00ffff');
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })


    }
    
    update() {
    
    }
}