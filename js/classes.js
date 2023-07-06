class Sprite{
    constructor({position,imagesrc,scale=1,framesMax=1,offset={x:0,y:0}}){
        this.position=position;
        this.width=50;
        this.height=150;
        this.image=new Image()
        this.image.src=imagesrc
        this.scale=scale
        this.framesMax=framesMax
        this.frameCurrent=0
        this.frameElapsed=0
        this.frameHold=20
        this.offset=offset
        this.flipX=false
    }
    draw() {
        c.save(); 
        if (this.flipX) {
            c.scale(-1, 1);
        }
        
        const imageWidth = this.image.width / this.framesMax;

        
        c.drawImage(
            this.image,
            this.frameCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            (this.flipX ? -1 : 1) * (this.position.x - this.offset.x), 
            this.position.y - this.offset.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
        );

        c.restore(); 
    }

    animateFrame()
    {
        this.frameElapsed++

        if(this.frameElapsed%this.frameHold===0){
            if(this.frameCurrent<this.framesMax-1){
                this.frameCurrent++
            }
            else{
                this.frameCurrent=0
            }
        }
    }

    update(){
        this.draw();
        this.animateFrame()          
    }
}
class Fighter extends Sprite{
    constructor({position, velocity, color='red',imagesrc,scale=1,framesMax=1,offset={x:0,y:0},sprites,attackBox={offset:{},width:undefined,height:undefined}}){
        super({position,imagesrc,scale,framesMax,offset})
        this.velocity=velocity;
        this.width=50;
        this.height=150;
        this.lastkey;
        this.attackBox={
            position:{
                x:this.position.x,
                y:this.position.y,
            },
            offset: attackBox.offset,
            width:attackBox.width,
            height:attackBox.height,
        }
        this.color=color;
        this.isAttacking=false;
        this.health=100;
        this.frameCurrent=0
        this.frameElapsed=0
        this.frameHold=20
        this.sprites=sprites
        this.dead=false
        this.flipX=false
        

        for(const sprite in this.sprites){
            sprites[sprite].image=new Image()
            sprites[sprite].image.src=sprites[sprite].imagesrc
        }
    }

    update(){
        this.draw();
        if(!this.dead){
            this.animateFrame();
        }
        this.attackBox.position.x=this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y=this.position.y + this.attackBox.offset.y;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.y+this.height+this.velocity.y >= canvas.height-96){
            this.velocity.y = 0;
            this.position.y=330
        } else this.velocity.y += gravity;
    }

    attack(){
        this.switchsprite('attack1')
        this.isAttacking=true;
        setTimeout(() => {
            this.isAttacking=false;
        }, 1000);
    }

    takehit(){
        this.health-=10;
        if (this.health<=0)
        {
            this.switchsprite('death')
        } else{
            this.switchsprite('takehit')
        }
    }
        

    switchsprite(sprite){
        if(this.image===this.sprites.death.image) {
            if(this.frameCurrent===this.sprites.death.framesMax-1) 
                this.dead=true
            return
        }
        if(this.image===this.sprites.attack1.image && this.frameCurrent<this.sprites.attack1.framesMax-1) return
        if(this.image===this.sprites.takehit.image&&this.frameCurrent<this.sprites.takehit.framesMax-1) return
        switch (sprite){
            case 'idle':
                if(this.image!==this.sprites.idle.image){
                    this.image=this.sprites.idle.image;
                    this.framesMax=this.sprites.idle.framesMax
                    this.frameCurrent=0
                }
                break
            case 'run':
                if(this.image!==this.sprites.run.image)
                {
                    this.image=this.sprites.run.image;
                    this.framesMax=this.sprites.run.framesMax
                    this.frameCurrent=0
                }
                break
            case 'jump':
                if (this.image!==this.sprites.jump.image){
                    this.image=this.sprites.jump.image;
                    this.framesMax=this.sprites.jump.framesMax
                    this.frameCurrent=0
                }
                break
            case 'fall':
                if (this.image!==this.sprites.fall.image){
                    this.image=this.sprites.fall.image;
                    this.framesMax=this.sprites.fall.framesMax
                    this.frameCurrent=0
                }
                break
            case 'attack1':
                if (this.image!==this.sprites.attack1.image){
                    this.image=this.sprites.attack1.image;
                    this.framesMax=this.sprites.attack1.framesMax
                    this.frameCurrent=0
                }
                break
            case 'takehit':
                if (this.image!==this.sprites.takehit.image){
                    this.image=this.sprites.takehit.image;
                    this.framesMax=this.sprites.takehit.framesMax
                    this.frameCurrent=0
                }
                break
            case 'death':
                if (this.image!==this.sprites.death.image){
                    this.image=this.sprites.death.image;
                    this.framesMax=this.sprites.death.framesMax
                    this.frameCurrent=0
                }
                break
        }
    }
}