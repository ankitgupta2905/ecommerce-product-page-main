// mobile-slider
const slides = document.querySelectorAll('.slider');
const prev_btn = document.querySelector('prev');
const next_btn = document.querySelector('next');
// desktop slider
const desk_slides= document.querySelectorAll('.desk-slider');
const desk_prev_btn = document.querySelector('.desk-prev');
const desk_next_btn = document.querySelector('.desk_next');
const open_slides = document.querySelector('.product-img img');
const desktop_section = document.querySelector('.desktop-section');
const cross_img= document.querySelector('.cross-img');
// menu bar
const nav_lists =document.querySelector('.nav-lists');
const menu_btn = document.querySelector('.menu-btn');
const close_btn = document.querySelector('.close-btn');
const nav_bg = document.querySelector('nav');
// product details
const input_box = document.querySelector('.input-box');
const minus_btn = document.querySelector('.minus-btn');
const plus_btn = document.querySelector('.plus-btn');
const card_btn= document.querySelector('.cart-btn');
const product_quantity= document.getElementById('product-quantity');
const empty_cart = document.querySelector('.empty-cart');
const cart_items = document.querySelector('.cart-items');
const add_btn= document.querySelector('.add-btn');
// cart-items
const total_price= document.querySelector('.total-price');
const delete_btn = document.querySelector('.delete-btn');
const added = document.querySelector('.added');
const removed = document.querySelector('.removed');

let pno=input_box.value;
let count = 0 ;
let flag=0 ;
let tPrice;

plus_btn.addEventListener('click',plusbtn)
minus_btn.addEventListener('click',minusbtn)
add_btn.addEventListener('click',function(){
    product_quantity.innerText=`${pno}`;
    product_quantity.style.display='block';
    totalPrice();
    if(pno==0){
        product_quantity.style.display='none';
        emptycart();
    }
    if(input_box.value>0){
        showcart();
    }
    function totalPrice(){
        console.log(pno)
        totalPrice=pno*125.00;
        total_price.innerText=`${pno} $${totalPrice}.00`
    }
})
delete_btn.addEventListener('click',function(){
    cart_items.classList.remove('cart-active');
    empty_cart.classList.add('cart-active');
    pno=0;
    input_box.value=0;
    product_quantity.style.display='none';
})
card_btn.addEventListener('click',function(){
    if(pno==0){
        console.log(empty_cart)
        empty_cart.classList.toggle('cart-active')
    }
    else if(pno > 1){
        empty_cart.classList.remove('cart-active');
        cart_items.classList.toggle('cart-active');
    }
})
menu_btn.addEventListener('click',function(){
    nav_lists.classList.add('nav-active');
    menu_btn.classList.add('menu-btn-active');
    close_btn.classList.add('close-btn-active');
    nav_bg.classList.add('nav-bg');
})
close_btn.addEventListener('click',function(){
    nav_lists.classList.remove('nav-active');
    menu_btn.classList.remove('menu-btn-active');
    close_btn.classList.remove('close-btn-active');
    nav_bg.classList.remove('nav-bg');

})
open_slides.addEventListener('click',function(){
    desktop_section.classList.add('desktop-section-active');
})
cross_img.addEventListener('click',function(){
    desktop_section.classList.remove('desktop-section-active');
})

function slideshow(num){
    if((num==slides.length) || (num==desk_slides)){
        count=0;
        num=0;
    }
    if(num<0){

        count=slides.length-1;
        count=desk_slides.length-1;
        num=slides.length-1;
        num=desk_slides.length-1;
    }
    slides.forEach(slide => {
        slide.style.display= 'none';
    })
    desk_slides.forEach(slide => {
        slide.style.display= 'none';
    })
    slides[num].style.display='block';
    desk_slides[num].style.display='block';
}
function imgslide(x){
    count += x;
   // console.log(count)
    slideshow(count);
}
function plusbtn(){
    pno++;
    input_box.value=`${pno}`;
    return pno;
}
function minusbtn(){
    pno--;
    input_box.value=`${pno}`;
    if(pno<0){
        pno=0;
        input_box.value=0;
    }
    return pno;
}
function totalPrice(){
    console.log(pno)
    totalPrice=pno*125.00;
    total_price.innerText=`${pno} $${totalPrice}.00`
}
function removecart(){
    added.classList.remove('add-trans')
}
function addcart(){
    added.classList.add('add-trans')
}
function showEmpty(){
    removed.classList.add('remove-trans')
}
function removeEmpty(){
    removed.classList.remove('remove-trans')
}
function showcart(){
    setTimeout(addcart,100);
    setTimeout(removecart,2000);
}
function emptycart(){
    setTimeout(showEmpty,100)
    setTimeout(removeEmpty,2000)
}
slideshow(count);







