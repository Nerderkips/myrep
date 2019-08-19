class Particle{
    constructor(x, y, xs, ys, p){
        this.x = x;
        this.y = y;
        this.d = random(3, 7);
        this.xs = xs;
        this.ys = ys;
        if(p == 1){
            this.p = paddle;
        }else if(p == 3){
            this.p = ball;
        }else{
            this.p = paddle2;
        }
        //this.f = Math.floor(Math.random()*2+1);
        this.f = floor(random(1, 3));
    }
    show(){
        if(this.f == 1){
            console.log("Hello World");
            fill(ball.r, ball.g, ball.b);
            stroke(ball.r, ball.g, ball.b);
        }else if(this.f == 2){
            console.log("yes");
            stroke(this.p.r, this.p.g, this.p.b);
            fill(this.p.r, this.p.g, this.p.b);
        }
        ellipse(this.x, this.y, this.d);
        this.x += this.xs;
        this.y += this.ys;
        if(
            this.y-500 > height
            ||
            this.y+500 < 0
            ||
            this.x-500 > width
            ||
            this.x+500 < 0
        ){
            particles.splice(0, 1);
        }
    }
}