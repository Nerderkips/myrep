class Block{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 10;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }
    show(){
        noStroke();
        stroke(255);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.width, this.height);
    }
}