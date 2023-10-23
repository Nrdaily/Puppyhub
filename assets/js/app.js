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


const nav = document.querySelector('.nav-link');
const navOpen = document.querySelector('.menuBtn');


navOpen.addEventListener('click', () => {
  nav.classList.toggle('active');
})

let socialDropDown = document.querySelector('.social-drop-down');
let socialDropBtn = document.querySelector('.social-drop-btn');
socialDropBtn.onclick = () => {
    socialDropDown.classList.toggle('active')
}

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


window.onscroll = () => {
  // overflowPages[0].classList.remove('active');
  // overflowPages[1].classList.remove('active');
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


var allSelector = {
  images: document.querySelector(".client-img img"),
  name: document.querySelector(".name"),
  title: document.querySelector(".title"),
  review: document.querySelector(".review p"),
  prev: document.querySelector(".prev"),
  next: document.querySelector(".next"),
  random: document.querySelector(".random-btn")
}

      
let images = [
  "./assets/images/delivered/11.JPG",
  "./assets/images/delivered/12.JPG",
  "./assets/images/delivered/10.JPG",
  "./assets/images/delivered/1.jpg"
  ];
  
  
let names = [
  "Susan Smith",
  "Israel Oliveira",
  "Bruno Adam",
  "Andrea Piacquadio"
];
  

var reviews = [
  "I bought this puppy fo my daugther but we all are so addicted to it that we fight on who would carry him on the trip.",
  "I didn't beleive any of what they said about the well trained puppies untill I realised I can't keep thinking of them. OMG!!!",
  "I thank and appreciate you for bringing my puppy to me though it took a little longer than I expcted but thank you so much for the joy and happiness you have brought to my family especially my daugther.",
  "I was scared that this could be a scam when I didn't see any payment gateways untill I was told what to do through mail and I recieved my puppy within 3 days only. Thank you again!!!"
];

var update = 0;

// next button event
allSelector.next.addEventListener("click", function () {
  if (update >= names.length - 1) {
    update = 0;
  } else {
    update++;
  }

  allSelector.images.src = images[update];
  allSelector.name.innerText = names[update];
  allSelector.review.innerText = reviews[update];
});
  
// prev button event
allSelector.prev.addEventListener("click", function () {
  if (update <= 0) {
    update = names.length - 1;
  } else {
    update--;
  }

  allSelector.images.src = images[update];
  allSelector.name.innerText = names[update];
  allSelector.review.innerText = reviews[update];
});

allSelector.random.addEventListener("click", function () {
  update = Math.floor(Math.random() * names.length);

  allSelector.images.src = images[update];
  allSelector.name.innerText = names[update];
  allSelector.review.innerText = reviews[update];
});

let shop = document.querySelectorAll(".feature-puppies");


// let basket = JSON.parse(localStorage.getItem("data")) || [];


const generateShop = () => {
  return (shop[0].innerHTML = puppyInfo
    .map((x) => {
      let { id, name, price, img, disPrice, reviewStar,
reviewRate, statsSold, statsAvailable, link } = x;
      return `
      <div class="puppies">
      <div class="image" id=product-id-${id}>
          <img src=${img} alt="">
      </div>
      <div class="content">
          <h2 class="name">${name}</h2>
          <div class="prices">
              <div class="price">$${price}</div>
              <del class="discount-price">$${disPrice}</del>
          </div>
          <div class="rates flex-aic-jsb">
              <div class="stars">${reviewStar}</div>
              <div class="review-rate">${reviewRate}</div>
          </div>
          <div class="stats flex-aic-jsb">
              <p class="sold">Sold: <b>${statsSold}</b></p>
              <p class="available">Available: <b>${statsAvailable}</b></p>
          </div>
      </div>
      <div class="action-btns">
          <a href="${link}"><span class="viewBtn"><i class="fas fa-eye"></i> <div class="tooltip">view more</div></span></a>
      </div>
  </div>
    `;
    })
    .join(""));
};

generateShop();


// let basket = JSON.parse(localStorage.getItem("data")) || [];


const generatSservices = () => {
  return (shop[1].innerHTML = services
    .map((x) => {
      let { id, name, desc, img, reviewStar, reviewRate, link, stats } = x;
      return `
    <div class="puppies services-p">
      <div class="row flex">
        <div class="col">
          <div class="content">
            <h2 class="name">${name}:</h2>
              <p>${desc}</p>
                <div class="rates flex-aic-jsb">
                  <div class="stars">${reviewStar}</div>
                  <div class="review-rate">${reviewRate}</div>
                </div>
                <div class="stats">${stats}</div>
          </div>
        </div>
        <div class="col" id=product-id-${id}>
          <img src=${img} alt="" class="thhumbnail-img">
        </div>
      </div>
      <div class="action-btns">
        <a href="${link}"><span class="viewBtn"><i class="fas fa-envelope"></i> <div class="tooltip">Contact us</div></span></a>
      </div>
    </div>
    `;
    })
    .join(""));
};

generatSservices();


// let calculation = () => {
//   let cartIcon = document.querySelector("#cartAmount");
//   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// };
// calculation();
