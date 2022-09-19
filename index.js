let navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').addEventListener("click",function(){
  navbar.classList.toggle('active');
});
let shoppingCart=document.querySelector('.cart-items-container');
document.querySelector('#btn-shopping-cart').addEventListener("click",function(){
  shoppingCart.classList.toggle('active');
});
let searchBox=document.querySelector('.search-form');
document.querySelector('#btn-search').addEventListener("click",function(){
  searchBox.classList.toggle('active');
});
