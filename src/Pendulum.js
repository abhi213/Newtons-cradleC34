class Pendulum{
    constructor(x, y, color) {
        var options = {
            restitution:1,
            friction:0,
            frictionAir:0,
            slop:0,
            inertia:Infinity
        }
        this.r = 40;
        this.x = x;
        this.y = y;
        this.color = color;
        this.body = Bodies.rectangle(x, y, this.r, this.r, options);
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(0, 0, 50, 50);
        pop();
    }
}