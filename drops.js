class Drops {
    constructor(x, y) {
        var options = {
            'restitution': 0.6,
            'friction': 0.1,
            'density': 0.6
        }
        this.rain = Bodies.circle(x, y, 5, options);
    }
    display() {
        elipse(this.body.x, this.body.y, 5);
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
}