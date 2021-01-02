function setup()
{
    createCanvas(600, 600);
    strokeWeight(.5);
    frameRate(10);
    background(0);
}
  
function draw() 
{
    for (let i = 0; i < 1000; i+=10) 
    {
        let r = random(i+10);
        stroke(i+5,100,r);
        line(r, i, i, height);
        stroke(0,10,r);
        line(i, 0, 0, width);
        line(r, r, i, r);
        stroke(0,10,r);
        line(r, i, i, height);
    }

}