class Paddle{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }
    show(){
        fill(this.r, this.g, this.b);
        stroke(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.h);
        this.x = mouseX-this.w/2;
    }
}