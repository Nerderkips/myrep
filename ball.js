class Ball{
    constructor(x, y, d, xs, ys){
        this.x = x;
        this.y = y;
        this.d = d;
        this.xs = xs;
        this.ys = ys;
        this.r = random(200);
        this.g = random(200);
        this.b = random(200);
    }
    show(){
        //stroke(this.r-50, this.g-50, this.b-50);
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.d);
        this.x += this.xs;
        this.y += this.ys;
        if(this.y + this.d/2 >= height){
            alert("Game over. Your score was " + score + ". Retry?");
            level=1;
            setup();
        }
        if(this.y - this.d/2 <= 0){
            this.ys *= -1;
            for(let i = 0;i<5;i++){
                particles.push(new Particle(this.x, this.y, random(-5, 5), random(-5, 5), 3));
            }
        }
        if(this.x + this.d/2 >= width || this.x - this.d/2 <= 0){
            this.xs *= -1;
            o *= -1;
            for(let i = 0;i<5;i++){
            particles.push(new Particle(ball.x, ball.y, random(-5, 5), random(-5, 5), 3));
        }
        } 
    }
}