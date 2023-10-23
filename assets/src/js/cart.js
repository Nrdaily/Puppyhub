'use strict';

/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
const box = document.querySelector("[data-box]");

function preloaderfunc(){
  window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    box.style.animation = "none";
    document.body.classList.add("loaded");
  });
}
preloaderfunc();

let socialDropDown = document.querySelector('.social-drop-down');
let socialDropBtn = document.querySelector('.social-drop-btn');
socialDropBtn.onclick = () => {
    socialDropDown.classList.toggle('active')
}


let emptyCartMassage = document.querySelector(".empty-cart-message");
let totalPrice = document.querySelector(".T-price");
let shoppingCart = document.querySelector('.puppy-item');



let basket = JSON.parse(localStorage.getItem("data")) || [];



let Calculation = () => {
    let CartIcon = document.getElementById('cartAmount');
    CartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) =>x+y, 0);
    
};

Calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {
            let {id, item} = x;
            let search = ShoopItemData.find((y) => y.id === id) || [];
            let {img, sex, name, price, No} = search;
            return `
 <div class="cart-items flex-aic">
    <div class="popUp-images">
        <img src=${img} alt="">
    </div>
        <div class="popUp-info">
            <div class="content">
                <h2 class="name">${name}</h2>
                <div class="prices flex-aic-jsb">
                <h3 class="P-name">No: <b>${No}</b></h3>
                <h4 class="P-name">${sex}</h4>
                </div>
                <div class="prices flex-aic-jsb">
                    <div class="price">$ ${price}</div>
                        <span class="deleteItem" onclick="removeItem(${id})"><i class="fas fa-trash"></i></span>
                    </div>
                    <div class="buttons flex-aic-jsb opa">
                    <span><i onclick="decreament(${id})" id="add-btns" class="fas fa-minus"></i></span>
                    <div id=${id} class="quantity">${item}</div>
                    <span><i onclick="increament(${id})" id="add-btns" class="fas fa-plus"></i></span>
                </div>
            <h3 class="opa">$ ${item * search.price}</h3>
        </div>
    </div>
</div>
`;
}).join(""));
} else {
        shoppingCart.innerHTML = ``;
        emptyCartMassage.innerHTML = `
        <h2>Cart Is Empty</h2>
        <a href="./products.html">
            <button class="checkout-btn">Get a puppy</button>
        </a>
        `;
    }
};
let checkPage =  document.querySelector('.check-page');
let checkBtn =  document.querySelectorAll('.checkout-btn');

let checkout = () => {
     checkPage.classList.add('active');
}
let removeCheck = () => {
    checkPage.classList.remove('active');
    clearCat();
}

generateCartItems();

let increament = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
    })
    }else{
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    update(selectedItem.id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);

    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
       Calculation();
       TotalAmount();
};

let decreament = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined) return;
    else if(search.item === 0) 
    return;
    else{
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0)
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};


let removeItem = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id);
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    TotalAmount();
    Calculation();
    localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
    if(basket.length !== 0){
        let amount = basket.map((x) => {
            let {item, id} = x;
            let search = ShoopItemData.find((y) => y.id === id) || [];
            return (item * search.price) + 20;
        }).reduce((x, y) => x + y, 0);
        totalPrice.innerHTML = `
        <div class="T-price">$${amount}</div>
        `
    }
    else return;
}

TotalAmount();

let clearCat = () => {
    basket = [];
    generateCartItems();
    Calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}
