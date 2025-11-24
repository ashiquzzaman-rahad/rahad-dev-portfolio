function expandMenu(e) {
  const menuBar = document.getElementById("menu-bar");
  const menuItems = document.getElementById("menu-items");
  
  if(menuItems.style.display === "" || menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
}

const typeText = document.querySelector(".typing-text");

const texts = ["MERN Stack Developer", "Python Developer", "Data Analyst"];
let index = 1;
let textIndex = 0;
let forward = true;

function typingEffect() {
  let text = texts[textIndex];
  let newText = text.slice(0,index);
  typeText.innerText = newText;
  setTimeout(()=> typingEffect(), 250);

  if(forward && index < text.length){
    index++;
  } else if(forward && index >= text.length){
    index--;
    forward = false;
  } else if(!forward && index > 0){
    index--;
  } else {
    textIndex++;
    if(textIndex >= texts.length){
      textIndex = 0;
    }
    forward = true;
    index = 0;
  }
}

typingEffect();