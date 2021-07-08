
var keyA, keyD, keyS, keyW, keyJ, keyL, turret, hull, tank;

class SceneA extends Phaser.Scene {
    constructor() {
        super({key: 'SceneA', active: true});
    }

    preload() {
        this.load.image('t1', 'assets/t1.png');
    }

    create() {
        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

        var bodies = Phaser.Physics.Matter.Matter.Bodies;

        hull = bodies.rectangle(0, 0, 200, 150);
        turret = bodies.rectangle(50, 25, 75, 50);

        tank = Phaser.Physics.Matter.Matter.Body.create({
            parts: [hull, turret]
        });

        var cosito = this.matter.add.image(100,100, 't1');
        cosito.setExistingBody(tank);
       /* this.matter.world.setBounds().disableGravity();
        hull = this.matter.add.rectangle(100, 100, 100, 70, 0x99AA99);
      
        turret = this.matter.add.image(100,100, 't1');
        turret.setBody({
            type: 'rectangle',
            width: 128,
            height: 128
        });*/

       // rect.setVelocity(6, 3);
       // rect.setAngularVelocity(0.01);
       // rect.setBounce(1);
       // rect.setFriction(0, 0, 0);
      /* turret.setFixedRotation();
       turret.setMass(300);
       turret.setFrictionAir(0.1);*/
    }

    update() {
        if(keyA.isDown){
            console.log('A');
        }
        if(keyW.isDown){
            turret.thrust(0.055);
            console.log('W');
        }
        if(keyD.isDown){
            turret.thrustBack(0.055);
            console.log('S');
        }
        if(keyS.isDown){
            console.log('D');
        }
        if(keyJ.isDown){
            turret.setAngularVelocity(-0.01);
            console.log('J');
        }
        if(keyL.isDown){
            turret.setAngularVelocity(0.01);
            console.log('L');
        }
    }
}
/*
class SceneB extends Phaser.Scene {
    constructor() {
        super({key: 'SceneB', active: true});
    }
    create() {
        

        let graphics = this.add.graphics();
        graphics.fillStyle(0xff9933, 1);
        graphics.fillRect(50, 200, 600, 100);
    }
}*/

let config = {
    type: Phaser.Auto,
    width: 800,
    height: 600,
    backgroundColor: '#392542',
    parent: 'mainGame',
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
    scene: [SceneA]
}

let game = new Phaser.Game(config);