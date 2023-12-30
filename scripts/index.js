const Data = [
  {
    id: 1,
    image: "red-tshirt.jpg",
    rating: 4.3,
    likes: 93,
    name: "Red T-Shirt",
    desc: "Slim Fit Casual t-Shirt",
    price: "799",
    rate: "1247",
    offer: "50%",
  },
  {
    id: 2,
    image: "t-shirt.jpg",
    rating: 4.3,
    likes: 93,
    name: "Mockup t-shirt",
    desc: "Slim Fit Casual t-Shirt",
    price: "799",
    rate: "1247",
    offer: "50%",
  },
  {
    id: 3,
    image: "shirt.jpg",
    rating: 4.3,
    likes: 93,
    name: "Stylish shirt",
    desc: "Slim Fit Casual t-Shirt",
    price: "799",
    rate: "1247",
    offer: "50%",
  },
  {
    id: 4,
    image: "red-tshirt.jpg",
    rating: 4.3,
    likes: 93,
    name: "Red T-Shirt",
    desc: "Slim Fit Casual t-Shirt",
    price: "799",
    rate: "1247",
    offer: "50%",
  },
  {
    id: 5,
    image: "red-tshirt.jpg",
    rating: 4.3,
    likes: 93,
    name: "Red T-Shirt",
    desc: "Slim Fit Casual t-Shirt",
    price: "799",
    rate: "1247",
    offer: "50%",
  },
  {
    id: 6,
    image: "shirt.jpg",
    rating: 4.3,
    likes: 93,
    name: "Stylish shirt",
    desc: "Slim Fit Casual t-Shirt",
    price: "799",
    rate: "1247",
    offer: "50%",
  },
  {
    id: 7,
    image: "t-shirt.jpg",
    rating: 4.3,
    likes: 93,
    name: "Mockup t-shirt",
    desc: "Slim Fit Casual t-Shirt",
    price: "799",
    rate: "1247",
    offer: "50%",
  },
  {
    id: 8,
    image: "red-tshirt.jpg",
    rating: 4.3,
    likes: 93,
    name: "Red T-Shirt",
    desc: "Slim Fit Casual t-Shirt",
    price: "799",
    rate: "1247",
    offer: "50%",
  },
];

let products = document.getElementById("products");
let cartCount = document.getElementById("cart_count");
let cartData = [];
let cartItemsNum = 0;

Data.forEach((elm, i) => {
  let productContainer = document.createElement("div");
  productContainer.className = "product_container";
  // Container of Product Image
  let imageContainer = document.createElement("div");
  imageContainer.className = "product_img";
  let productImg = document.createElement("img");
  productImg.src = `./images/${elm.image}`;
  let ratingContainer = document.createElement("div");
  ratingContainer.className = "product_rating_container";
  let rating = document.createElement("span");
  rating.textContent = elm.rating;
  rating.className = "product_rating";
  let likes = document.createElement("span");
  likes.textContent = ` | ${elm.likes}`;
  likes.className = "product_like";
  let ratingImage = document.createElement("img");
  ratingImage.src = "./images/star.png";
  ratingImage.className = "product_rating_img";
  ratingContainer.append(rating, ratingImage, likes);
  imageContainer.append(productImg, ratingContainer);

  // Container of Product Details

  let detail = document.createElement("div");
  detail.className = "product_details";
  let productHeading = document.createElement("h3");
  productHeading.textContent = elm.name;
  productHeading.classList = "product_name";
  let productDesc = document.createElement("p");
  productDesc.textContent = elm.desc;
  productDesc.classList = "product_desc";
  let priceContainer = document.createElement("div");
  priceContainer.className = "product_price";
  let rate = document.createElement("span");
  rate.className = "product_rate";
  rate.textContent = `Rs.${elm.price}`;
  let rateCut = document.createElement("span");
  rateCut.className = "product_rate_cut";
  rateCut.textContent = `Rs.${elm.rate}`;
  let offer = document.createElement("span");
  offer.className = "product_offer";
  offer.textContent = `(${elm.offer} OFF)`;
  let cartBtn = document.createElement("button");
  cartBtn.className = "cart_btn";
  cartBtn.textContent = "Add to Bag";
  priceContainer.append(rate, rateCut, offer);
  detail.append(productHeading, productDesc, priceContainer, cartBtn);
  productContainer.append(imageContainer, detail);
  products.appendChild(productContainer);

  // cartBtn.addEventListener('click',function addCart(){
  //     console.log(elm)
  // })
  cartBtn.addEventListener("click", addCart.bind(elm, cartBtn));
});

function addCart(e) {
  cartItemsNum++;
  cartCount.style.display = "flex";
  cartCount.textContent = cartItemsNum;
  e.disabled = true;
  cartData.push(this);
  localStorage.setItem("product", JSON.stringify(cartData));
}

