canvas = document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

mars_images_array=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
random_number=Math.floor(Math.random()*5);

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_image=mars_images_array[random_number];
rover_image="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

 rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=='38')
    {
        up();
        console.log("up");
}
if(keypressed=='40')
{
    down();
    console.log("down");
}
if(keypressed=='37')
{
   left();
    console.log("left");
}
if(keypressed=='39')
{
    right();
    console.log("right");
}

}

function up(){
if(rover_y>=0){
    rover_y=rover_y-10;
console.log("when up arrow is pressed, x= "+ rover_x + "y=" +rover_y);

uploadBackground();
uploadrover();
}

}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x=" + rover_x + "y=" +rover_y);

        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x="+ rover_x + "y=" +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x=" + rover_x + "y=" +rover_y);

        uploadBackground();
        uploadrover();
    }
}

