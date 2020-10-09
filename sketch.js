var hipnoticball,database,position;
var ball;

function setup(){
    database=firebase.database()
    console.log(database);
    createCanvas(500,500);
    hipnoticball = createSprite(250,250,10,10);
    hipnoticball.shapeColor = "red";
    var hipnoticballposition=database.ref('ball/positionx')
    hipnoticballposition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position=data.val()
    console.log(position.x)
    hipnoticball.x=position.x
    hipnoticball.y=position.y
}
function writePosition(x,y){
    database.ref('ball./positionx').set({
'x':position.x+x,'y':position.y+y
})
    
    
}