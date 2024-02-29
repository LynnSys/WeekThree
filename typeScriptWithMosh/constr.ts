class Dot{
    x: number;
    y: number;

    constructor(x: number,y:number){
        this.x = x;
        this.y = y;
    }


    draw(){
        console.log('X: '+ this.x+',Y: '+this.y);
    }
}
let dot = new Dot(1,2){
    dot.draw();
}