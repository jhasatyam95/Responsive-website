
var search = document.getElementById("searchBar");
var cart = document.getElementById("cart");
var menu = document.getElementById("menu");

function searchFunction() {
    
    if (search.style.display === "none") {
      search.style.display = "block";
      cart.style.display = "none";
      menu.style.display = "none";
    } 
    else if(search.style.display === "block"){
      search.style.display = "none";
    }
    else{
        search.style.display = "block";
        cart.style.display = "none";
        menu.style.display = "none";
    }
  }

function cartFunction() {

if (cart.style.display === "none") {
    cart.style.display = "block";
    search.style.display = "none";
    menu.style.display = "none";
} 
else if(cart.style.display === "block"){
    cart.style.display = "none";
}
else{
    cart.style.display = "block";
    search.style.display = "none";
    menu.style.display = "none";
}
}

function menuFunction(){
  if (menu.style.display === "none") {
    menu.style.display = "block";
    search.style.display = "none";
    cart.style.display = "none";
} 
else if(menu.style.display === "block"){
    menu.style.display = "none";
}
else{
    menu.style.display = "block";
    search.style.display = "none";
    cart.style.display = "none";
}
}

