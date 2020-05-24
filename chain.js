class Chain{
    constructor(body1,body2){
        var options={
            bodyA : body1,
            bodyB : body2,
            length : 12,
            stiffness : 0.5
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
        var a = this.chain.bodyA.position;
        var b = this.chain.bodyB.position;
        line(a.x,a.y,b.x,b.y);
    }
}