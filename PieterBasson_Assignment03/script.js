var PressAboutMe = false;
var PressReadMe = false;


//Grabs the ID of a word from the index.html, allowing me to change, add, or decorate certain things.
window.onload = function()
{
    FirstFunction();
    SecondFunction();
}

function SecondFunction() 
{
    document.getElementById("Expand").innerHTML;
    document.getElementById("Expand2").innerHTML;
}

function FirstFunction() 
{
    document.getElementById("button").addEventListener("click", OpenAboutMe);
    document.getElementById("button2").addEventListener("click", Open);
}


//This is the code that allows me to expand and show the text written to pop up if I press on the button created in the html.index.
function OpenAboutMe()
{
    if (PressAboutMe)
    {
        PressAboutMe = false;
        document.getElementById("button").style.backgroundColor = "darkslategray";
        document.getElementById("Expand").innerHTML = " ";
    }
    else
    {
        PressAboutMe = true;
        document.getElementById("button").style.backgroundColor = "rgb(110, 110, 110)";
        document.getElementById("Expand").innerHTML = "My name is Pieter. I am a second year student studying Game Design. I've always had a passion for playing video games so I felt becoming a designer would fullfill that passion.<br>From here, you'll see some of the work I've done, what I am learning, and what I plan on learning to further improve myself when trying to design games.";
    }
}

//This is the code that allows me to expand and show the text written to pop up if I press on the button created in the html.index.
function Open()
{
    if (PressReadMe)
    {
        PressReadMe = false;
        document.getElementById("button2").style.backgroundColor = "darkslategray";
        document.getElementById("Expand2").innerHTML = " ";
    }
    else
    {
        PressReadMe = true;
        document.getElementById("button2").style.backgroundColor = "rgb(110, 110, 110)";
        document.getElementById("Expand2").innerHTML = "So far, most of my experience is from using Unity and C# and I have done a few projects using 2D and 3D URP. I have a little experience working with animating for my games and plan on improving that skill by learning Blender.<br><br>Here is some images of my work I have done in Unity 3D URP using assets I bought from the Unity store.<br>I also have some experience with pixel art and animations as I started doing pixel art before choosing game design as a career choice";
    }
}
