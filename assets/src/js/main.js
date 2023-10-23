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



let SettingBtn = document.querySelector('.open-Setting'); 
let settings = document.querySelector('.settings'); 

SettingBtn.onclick = () => {
  settings.classList.toggle('active');
};
let openPages = document.querySelector('.btnOpen');
let overflowPages = document.querySelector('.overflow-pages .pages');
let removeBtn = document.querySelector('.overflow-pages .removeBtn');

openPages.addEventListener('click', () => {
  overflowPages.classList.add('active');
});
// openPages[1].addEventListener('click', () => {
//   overflowPages[1].classList.add('active');
// });

removeBtn.addEventListener('click', () => {
  overflowPages.classList.remove('active');
});
// removeBtn[1].addEventListener('click', () => {
//   overflowPages[1].classList.remove('active');
// });
let socialDropDown = document.querySelector('.social-drop-down');
let socialDropBtn = document.querySelector('.social-drop-btn');
socialDropBtn.onclick = () => {
    socialDropDown.classList.toggle('active')
}

window.onscroll = () => {
//   overflowPages[0].classList.remove('active');
//   overflowPages[1].classList.remove('active');
  settings.classList.remove('active');
}

let themeToggler = document.querySelector('.theme-toggle');
let mode = document.querySelectorAll('.mode');


themeToggler.onclick = () => {
  themeToggler.classList.toggle('active');
  mode.forEach(item => {
    item.classList.toggle('active');
  })


    if(themeToggler.classList.contains('active')){
        document.body.classList.add('active')
    }else{
        document.body.classList.remove ('active')
    }
}


// const tabs = document.querySelector(".tabs");
// const tabsBtnn = document.querySelectorAll(".btn-container .btn");
// const articles = document.querySelectorAll(".image-container");
// tabs.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     tabsBtnn.forEach(function (btn) {
//       btn.classList.remove("live");
//     });
//     e.target.classList.add("live");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("live");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("live");
//   }
// });




let Shop = document.querySelector('.image-container');



let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (Shop.innerHTML = ShoopItemData.map((x) => {
        let {id,name, sex, price, desc, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
<div id=product-id-${id} class="item flex-aic-jsb">
    <div class="item-body">
        <img src="${img}" alt="" data-cat="french bulldog" data-search="french bulldog">
        <div class="item-info">
            <p class="desc">${desc}</p>
            <h4 class="P-name">${sex}</h4>
             <div class="flex-aic-jsb">
                <h4 class="P-name">${name}</h4>
                <p class="price">$${price}</p>
            </div>
            <div class="flex-aic-jcc"> 
                <span title="Add to cart" class="CartBtn" onclick="increament(${id})"><i class="fas fa-shopping-cart"></i></span>
            </div>
            <div class="buttons flex-aic-jsb opa">
                    <span><i onclick="decreament(${id})" class="opa fas fa-minus"></i></span>
                    <div id=${id} class="quantity">
                    ${search.item === undefined? 0: search.item}
                    </div>
                    <span><i onclick="increament(${id})" class="opa fas fa-plus"></i></span>
                </div>
        </div>
    </div>
</div>
    `;
    }).join(""));
};

generateShop();


let clickPopup =  document.querySelector('.click-popup');
let increament = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    setTimeout(() => {
        clickPopup.classList.add('active');
        // clickPopup.remove();
    }, 1000);
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
    })
    }else{
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    // console.log(basket);
    update(selectedItem.id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);

    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
       Calculation();
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
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};


let Calculation = () => {
    let CartIcon = document.getElementById('cartAmount');
    CartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) =>x+y, 0);
    
};

Calculation();




