// getting the data from localStorage
let data = JSON.parse(localStorage.getItem("product"));
// get the Url Path
let href = window.location.href.split("pages")[0];

// checking if cart is empty then user redirect to the home page
if (!data) {
  window.location.href = href;
}

// set the  cart Count value
let cartCount = document.getElementById("cart_count");
cartCount.style.display = "flex";
cartCount.textContent = data.length;

let products = document.getElementById("products");
// items
const items = document.getElementById("items");
items.textContent = data.length;
data.map((elm) => {
  const product = document.createElement("div");
  product.className = "product";
  const productInfo = document.createElement("div");
  productInfo.className = "product_info";
  const productImg = document.createElement("div");
  productImg.className = "product_img";
  const image = document.createElement("img");
  image.src = `../images/${elm.image}`;
  productImg.append(image);
  const productDetail = document.createElement("div");
  productDetail.className = "product_detail";
  const productName = document.createElement("h3");
  productName.className = "propduct_heading";
  productName.textContent = elm.name;
  const productDesc = document.createElement("p");
  productDesc.className = "product_desc";
  productDesc.textContent = elm.desc;
  const price = document.createElement("div");
  price.className = "price";
  const rate = document.createElement("span");
  rate.className = "rate";
  rate.textContent = elm.price;
  const rateCut = document.createElement("span");
  rateCut.className = "rate_cut";
  rateCut.textContent = elm.rate;
  const offer = document.createElement("span");
  offer.className = "offer";
  offer.textContent = elm.offer;
  price.append(rate, rateCut, offer);
  const returnProcess = document.createElement("span");
  returnProcess.className = "return";
  const returnDate = document.createElement("span");
  returnDate.className = "return_date";
  returnDate.textContent = "7 Days";
  const returnAvailable = document.createElement("span");
  returnAvailable.textContent = "return available";
  returnProcess.append(returnDate, returnAvailable);
  productDetail.append(productName, productDesc, price, returnProcess);
  productInfo.append(productImg, productDetail);

  const cancelProduct = document.createElement("span");
  cancelProduct.className = "cancel_product";
  cancelProduct.addEventListener("click", () => {
    let arr = data.filter((i) => {
      return i.id !== elm.id
    });
  });
  const cancelProductImg = document.createElement("img");
  cancelProductImg.src = "../images/cross.png";
  cancelProduct.appendChild(cancelProductImg);
  product.append(productInfo, cancelProduct);
  products.append(product);
});

let sum = 0;
let mrp = document.getElementById("mrp");
let disscount = document.getElementById("disscount");
let disscount_offer = 124;
let fee = document.getElementById("fee");
let fees = 99;
let totalAmount = document.getElementById("total");
data.map((elm) => {
  sum += Number(elm.price);
});
mrp.textContent = `Rs ${sum}`;
disscount.textContent = `Rs ${disscount_offer}`;
fee.textContent = `Rs ${fees}`;
totalAmount.textContent = `Rs ${sum + fees - disscount_offer}`;

const orderBtn = document.getElementById("order");
const orderPlaced = document.getElementById("order_placed");
orderBtn.addEventListener("click", () => {
  orderPlaced.classList.remove("before_placed");
  orderPlaced.classList.add("order_placed");
});
