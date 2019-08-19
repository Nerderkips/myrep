alert("Random colours!");
alert("Changes: Added levels, tried to remove bugs, made the game faster, added background styling ")

let ball;
let paddle;
let score = 0;
let score2 = 0;
let fps;
let particles = [];
let blocks = [];
let o;
let level = 1;

function setup(){
    blocks = [];
    createCanvas(windowWidth, windowHeight);
    ball = new Ball(width/3, height/3*2, 20, 3.87, 3.9);
    paddle = new Paddle(width/2, height-50, width/4, 5);
    score = 0;
    score2 = 0;
    for(let i = 0;i<(height/3*2)/map(level, 0, 3, 10, 3);i++){
        blocks.push(new Block(map(i%((width-30)/30), 0, width/30, 0, width), ceil(i/10)*20));
        
    }
    for(let i = 0;i<(height/3*2)/map(level, 0, 3, 5, 3);i++){
        blocks.splice(random((height/3*2)/2.5), 1)
    }
    o = ball.xs;
}
function draw(){
    if(blocks.length == 0){
        level += 1;
        $("#lvl").html("Level "+level);
        $("#lvl").fadeIn();
        noLoop();
        setTimeout(function(){
            $("#lvl").fadeOut();
            setup();
            ball.xs += level/10*5;
            ball.ys += level/10*5;
            loop();
        }, 2000)
    }
    noStroke();
    background(50, 50);
    //stroke(255);
    fill(255);
    fps = "fps: " + floor(frameRate());
    textSize(16);
    text(fps, 10, 20);
    text("level: " + level, 70, 20);
    textSize(20);
    text(floor(score)+"/"+blocks.length, width/2, height/3*2);
    text("lvl: " + level, width/2, height/3*2+50, 20);
    ball.show();
    for(let i = 0;i<particles.length;i++){
        particles[i].show();
    }
    paddle.show();
    if(collideRectCircle(paddle.x, paddle.y, paddle.w, paddle.h, ball.x, ball.y, ball.d)){
        ball.ys *= -1;
        let p;
        if(ball.x > paddle.x + paddle.w /2){
            p = map(ball.x, paddle.x+paddle.w/2, paddle.x + paddle.w, 5, 0.6);
        }else{
            p = map(ball.x, paddle.x, paddle.x+paddle.w/2, 0.6, 5);
        }
        ball.xs = o;
        
        //ball.ys = 3.9;
        /*if(p == 0){
           ball.xs = o;
        }/*else{
            if(p < 0){
                p *= -1;
            }
        }*/
        ball.xs /= p;
        //ball.ys /= p;
        if (ball.x < paddle.x) {
            ball.xs = -1;
        }
        if(ball.x > (paddle.x + paddle.w)){
            ball.xs = 1;
        }
        for(let i = 0;i<5;i++){
            particles.push(new Particle(ball.x, ball.y, random(-5, 5), random(-5, 5), 1));
        }
        
    }
    for(let i = 0;i<blocks.length;i++){
        blocks[i].show();
        if(collideRectCircle(blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height, ball.x, ball.y, ball.d)){
            ball.ys *= -1;
            
            score += 1;
            if (ball.x < blocks[i].x && !ball.y<blocks[i].y && !ball.y>blocks[i].y+blocks[i].height) {
                 ball.xs *= -1;
                 ball.ys *= -1;
                 o *= -1;
            }
            blocks.splice(i, 1);

        }
    }
}