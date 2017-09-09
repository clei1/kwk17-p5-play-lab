var walls, leftWall, rightWall, topWall, bottomWall
var obstacles, obstacle1, obstacle2, obstacle3
var prize
var won = false

function setup() {
    createCanvas(800, 500)

    //createSprite(centerX, centerY, width, height)
    leftWall = createSprite(0, 250, 20, 500)
    rightWall = createSprite(800, 250, 20, 500)
    topWall = createSprite(400, 0, 800, 20)
    bottomWall = createSprite(400, 500, 800, 20)

    //in order to make sure that our walls don't move
    leftWall.immovable = true
    rightWall.immovable = true
    topWall.immovable = true
    bottomWall.immovable = true

    obstacle1 = createSprite(500, 220, 30, 20)
    //obstacle.setVelocity(x velocity, y velocity)
    obstacle1.setVelocity(8, 7)

    obstacle2 = createSprite(200, 300, 50, 20)
    obstacle2.setVelocity(9, 15)

    obstacle3 = createSprite(342, 45, 12, 65)
    obstacle3.setVelocity(20, 12)

    //sprite.bounce(otherSprite, explosion);
    //we use groups to group together sprites that we want to behave the same way

    walls = new Group()
    walls.add(leftWall)
    walls.add(rightWall)
    walls.add(bottomWall)
    walls.add(topWall)

    obstacles = new Group()
    obstacles.add(obstacle1)
    obstacles.add(obstacle2)
    obstacles.add(obstacle3)

    player = createSprite(30, 250, 20, 20)
    player.draw = function() {
        //this is relative to the position of the sprite
        fill(100, 250, 300, 500)
        ellipse(0, 0, 20, 20)
    }

    //first thing we need to do to use an image is load it
    var image = loadImage('prize.png')
    //second thing we need to do is create a sprite to put our image on
    prize = createSprite(700, 250, 100, 100)
    //last thing we need to do is add our image to our sprite
    prize.addImage(image)
    prize.immovable = true
}

function draw() {

    background(155)
    obstacles.bounce(walls)
    obstacles.bounce(prize)

    drawSprites()

    if (keyDown(LEFT_ARROW)) {
        player.setVelocity(-5, 0)
    }
    else if (keyDown(RIGHT_ARROW)) {
        player.setVelocity(5, 0)
    }
    else if (keyDown(UP_ARROW)) {
        player.setVelocity(0, -5)
    }
    else if (keyDown(DOWN_ARROW)) {
        player.setVelocity(0, 5)
    }
    else {
        player.setVelocity(0, 0)
    }

    player.collide(walls)

    //the second way we can use collide is to call a function that we write when our sprites collide
    player.collide(obstacles, lose)
    
    player.collide(prize, win)
    
    if (won){
        textSize(32);
        text("You won!", 300, 250)
    }

}

function lose() {
    player.position.x = 30
    player.position.y = 250
}

function win() {
    won = true
}

function startover() {
    
}