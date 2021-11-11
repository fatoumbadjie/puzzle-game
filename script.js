 class Box{
     constructor(x, y){
         this.x = x;
         this.y = y;
     }
   getTopBox(){
       if(this.y=== 0)
       return null;
       return new Box(this.x, this.y - 1);
   }  
 

 getRightBox(){
    if(this.y=== 3)
    return null;
    return new Box(this.x + 1, this.y);
}  

getBottomBox(){
    if(this.y=== 3)
    return null;
    return new Box(this.x, this.y + 1);
}  

getLeftBox(){
    if(this.y=== 0)
    return null;
    return new Box(this.x - 1, this.y);
}
getNextdoorBoxes(){
    return[
     this.getTopBox(),
     this.getButtomBox(),
     this.getRightBox(),
     this.getLeftBox()
    ].filter(box => box != null);

}
 }

 class state{
     constructor(grid, move, time, status){
         
     }
 }