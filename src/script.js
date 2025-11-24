// mobile menu toggle
function expandMenu(e) {
  const menuBar = document.getElementById("menu-bar");
  const menuItems = document.getElementById("menu-items");
  
  if(menuItems.style.display === "" || menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
}
