class Launcher{
    constructor(pointA, pointB){
        var options = {
            pointA: pointA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.laucher = Constraint.create(options);
        World.add(world, this.laucher);
    }
    fly(){
        this.laucher.pointA =null;
    }

    display(){
        if(this.laucher.pointA){
            var pointA = this.laucher.pointA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}