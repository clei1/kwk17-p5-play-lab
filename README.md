# P5 Play Lab
In p5 you may have become used to using the rect or ellipse function to create a shape. However, in p5.play, all of our shapes are sprites. Go to <http://p5play.molleindustria.org/docs/index.html> to view the documentation for this library. On the left side of the main page, click the p5.play link. Take a look at the createSprite() function. 

### Some things to note at this point in time:
1. The createSprite() is used to create any shapes you want to be able to interact with the other shapes being drawn.
2. Sprites are automatically drawn as rectangles, but are drawn from their CENTER, not their corner as before. 
3. The color of these sprites is randomly generated each time you refresh your game (don't worry, we can change this)

### Let's get started:
* Unlike vanilla p5, you won't need to include an xlocation variable and update each time the draw function runs. Instead, you'll use the setVelocity() function. Look in the Sprite category of the documentation for more details on this function. 
    
1. To start, we'll need to create a leftWall and rightWall sprite. These should be very thin rectangles that will line the left and right borders of your canvas.
2. set the immovable property of these walls to true, check out the p5.play examples of games for some examples of how to do this. 
3. create other sprites and obstacles
4. create a prize that lets you win once your sprite reaches it

### Want to keep going?
1. Try controlling your sprite using your mouse keys, you may need to try using the collide function to make sure your sprite can't go off the screen, but doesnt automatically bounce off your walls....
2. Change the properties of your sprites so that they appear as circles
3. use the shapeColor property to set the colors of your sprites
4. Set an image as your prize. 
5. Add other shapes for your sprite to interact with

Done with the intro? Try building out your own brickbreaker game. Be sure to look into using Groups, removing sprites, and the collide() function. 
