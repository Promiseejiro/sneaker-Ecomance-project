const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let index = 0;
let number = 0;
let itemPicked = true;
const showNextBtn = document.querySelectorAll(".show-next");
const showPrevBtn = document.querySelectorAll(".show-prev");
const navBtn = document.querySelector(".nav-btn");
const numberOfItem = document.querySelectorAll(".number");
const sideNav = document.querySelector(".side-nav");
const sideNavCloseBtn = document.querySelector(".close-nav");
const cartBtn = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".cart");
const currentimage = document.querySelectorAll(".current-image");
const overlay = document.querySelector("#dark-covering");
const currentimageDisplay = document.querySelector(".img");
const lightCloseBtn = document.querySelector("#light-box-close-icon");
const lightBox = document.querySelector(".lightbox");
const views = document.querySelectorAll(".choose-img");
const cartBasket = document.querySelector(".cart-basket");
const imageOverlay = document.querySelectorAll(".image-overlay");
console.log();
addTocartBtn = document.querySelector(".add-to-cart");
const removeBtn = document.querySelector(".minus");
const addBtn = document.querySelector(".plus");
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".prev");
// loop

views.forEach((view) => {
  view.addEventListener("click", (e) => {
    console.log(e.target.parentElement.firstElementChild);
    currentimage.forEach((image) => {
      image.src = e.currentTarget.src;
    });
    imageOverlay.forEach((image) => {
      if (image.classList.contains("view")) {
        image.classList.remove("view");
      }
    });
    e.target.parentElement.firstElementChild.classList.add("view");
  });
});
///eventlistener
window.addEventListener("scroll", closeAllOpenNav);
overlay.addEventListener("click", closeAllOpenNav);
navBtn.addEventListener("click", openSideNave);
sideNavCloseBtn.addEventListener("click", closeSideNav);
currentimageDisplay.addEventListener("click", () => {
  lightBox.style.display = "block";
});
lightCloseBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
});
addBtn.addEventListener("click", itemAdded);
addTocartBtn.addEventListener("click", itemAdded);
removeBtn.addEventListener("click", itemRemoved);
nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    index++;
    if (index > 3) {
      index = 3;
      showNextBtn.forEach((btn) => {
        btn.style.opacity = "0";
      });
    } else {
      currentimage.forEach((image) => {
        image.src = images[index];
      });
      btn.innerHTML = `                  <svg
                          width="13"
                          height="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m2 1 8 8-8 8"
                            stroke="#df753a"
                            stroke-width="3"
                            fill="none"
                            fill-rule="evenodd"
                          />
                        </svg>`;
      showPrevBtn.forEach((btn) => {
        btn.style.opacity = "1";
      });
    }
  });
});
prevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = 0;
      showPrevBtn.forEach((btn) => {
        btn.style.opacity = "0";
      });
    }
    currentimage.forEach((image) => {
      image.src = images[index];
    });
    btn.innerHTML = `                   <svg
                    width="12"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1 3 9l8 8"
                      stroke="#df753a"
                      stroke-width="3"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>`;
    showNextBtn.forEach((btn) => {
      btn.style.opacity = "1";
    });
  });
});
//functions
function openSideNave() {
  sideNav.style.transform = "translateX(0)";
  overlay.style.display = "block";
  open = true;
}
function closeSideNav() {
  sideNav.style.transform = "translateX(-1000px)";
  overlay.style.display = "none";
}

cartBtn.addEventListener("click", () => {
  open = true;
  cartBasket.classList.toggle("show-cart-basket");
});

function itemAdded() {
  number++;
  itemaddToCart();
}
function itemRemoved() {
  number--;
  if (number < 1) {
    number = 0;
    numberOfItem.forEach((num) => {
      num.textContent = number;
    });
  }
  itemaddToCart();
}

function itemaddToCart() {
  let calculated = 250 * number + ".00";
  if (number > 0) {
    cartContainer.innerHTML = ` <div class="autum">
                  <div class="cart-content">
                    <img
                      class="cart-img"
                      src="./images/image-product-1.jpg"
                      alt=""
                    />
                    <p>
                      Autumn Limited Edition... <br />
                      $250.00 x
                      <span class="number">${number}</span>
                      <span id="total">${calculated}</span>
                    </p>
                  </div>
                  <button id="delete-btn">
                    <img
                      class="svg-icon"
                      src="./images/icon-delete.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div class="checkout">
                  <button id="checkout-btn">Checkout</button>
                </div>`;
    numberOfItem.forEach((num) => {
      num.textContent = number;
    });
    const delBtn = document
      .querySelector("#delete-btn")
      .addEventListener("click", () => {
        number = 0;
        numberOfItem.forEach((num) => {
          num.textContent = number;
        });
        cartContainer.innerHTML = `<p class="empty">cart is empty</p>`;
      });
  } else {
    cartContainer.innerHTML = `<p class="empty" >cart is empt</p>`;
    number = 0;
  }
}
function closeAllOpenNav() {
  cartBasket.classList.remove("show-cart-basket");
  sideNav.style.transform = "translateX(-1000px)";
  overlay.style.display = "none";
}
