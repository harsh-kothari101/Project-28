class Boy {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world,this.body);
        
    }

    display(){
        
        imageMode(CENTER);
        strokeWeight(3);
        image(this.image,200,860,this.width,this.height);
    }
};