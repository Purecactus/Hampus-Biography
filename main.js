



// Read more
const buttonElement = document.getElementById("btn");
const myText = document.getElementById("firewatch-info")
buttonElement.addEventListener("click", clickFunction); 

function clickFunction() {
    myText.style.display = "block";
    console.log("Hello")
}
