const elementButton = document.getElementById("button");
const elementText = document.getElementById("container-credits")
const elementText2 = document.getElementById("text");
const titleScam = document.getElementById("scam-title");

let value = 0;

function changeColor() {
    value = value + 1;

    if(value === 1) {
        document.body.style.backgroundColor = "cyan";
        elementButton.style.backgroundColor = "red";
        elementButton.innerText = "GET HACKED. sending missile to address 1375º 209º 74";
    } else if(value === 2) {
        document.body.style.backgroundColor = "lime";
        elementButton.style.backgroundColor = "yellow";
        elementButton.innerText = "I LIKE CHILD PORN";
    } else if(value === 3) {
        document.body.style.backgroundColor = "purple";
        elementButton.style.backgroundColor = "brown";
        elementButton.innerText = "EPSTEIN FUCK NIGGERS";
        value = 0;
    }

    elementText.innerText = "";
    elementText2.innerText = "";
    titleScam.innerText = "GET SCAMMED NIGGA";
}

function startLoop() {
    // Run changeColor every 1000 milliseconds (1 second)
    setInterval(changeColor, 1000);
}

const imageContainer = document.getElementById("imageContainer");

function addImage() {
    // 1. Create a brand new <img> element in memory
    const newImage = document.createElement("img");

    // 2. Set the image link (src) and optional styling
    newImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsNn0M0Ot6Rq15XbB3J4nQX9Wv75XZpw9Ro2UTqgJCQ&s=10"; // Sample image URL
    newImage.style.width = "200px";
    newImage.style.borderRadius = "10px";

    // 3. Put the new image inside our HTML container
    imageContainer.appendChild(newImage);
}


elementButton.onclick = startLoop, addImage;