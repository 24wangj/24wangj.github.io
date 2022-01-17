
/* Hides or displays menu buttons */
function toggleMenu() {
  var x = document.getElementById("nav-buttons");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Makes menu buttons reappear when window is resized to desktop and disappear when window is resized to mobile */
function displayOnResize() {
  var x = document.getElementById("nav-buttons");
  var maxWidth = 754;
  if(document.documentElement.clientWidth >= maxWidth) {
    x.style.display = "block";
  } else if (document.documentElement.clientWidth < maxWidth) {
    x.style.display = "none";
  }
}

/* Runs function every time window is resized */
window.addEventListener('resize', () => {
  displayOnResize();
});

/* Hides shop items that don't include the inputted keyword */
function searchShop() {
  var keyword = document.getElementById("search-bar").value;
  var element = document.getElementsByClassName("shop-item");
  var count = 0;

  for (let i = 0; i < element.length; i++) {
    if (element[i].getElementsByClassName("shop-item-text")[0].innerHTML.toLowerCase().match(keyword.toLowerCase())) {
      element[i].style.display = "inline-block";
      count++;
    } else {
      element[i].style.display = "none";
    }
  }

  if ((count - 2) % 3 == 0) {
    document.getElementById("barrier").style.display = "inline-block";
  } else {
    document.getElementById("barrier").style.display = "none";
  }

  if (count == 0) {
    document.getElementById("no-results").style.display = "block";
  } else {
    document.getElementById("no-results").style.display = "none";
  }
}

/* Makes enter button initiate search */
function enterSearch() {
  if (event.keyCode === 13) {
    document.getElementById("search-button").click();
  }
}

/* Decides if barrier should be visible based on number of visible shop items */
function displayBarrier() {
  var barrier = document.getElementById("barrier");
  if (document.documentElement.clientWidth >= 754) {
    var element = document.getElementsByClassName("shop-item");
    var count = 0;
    for (let i = 0; i < element.length; i++) {
      if (element[i].style.display != "none") {
        count++;
      }
    }
    if ((count - 2) % 3 == 0) {
      barrier.style.display = "inline-block";
    } else {
      barrier.style.display = "none";
    }
  } else {
    barrier.style.display = "none";
  }
}
/* Runs once as page loads */
{
  if (document.body.classList.contains("hasShopItems")) {
    if (document.documentElement.clientWidth >= 754) {
      var element = document.getElementsByClassName("shop-item");
      var count = 0;
      for (let i = 0; i < element.length; i++) {
        if (element[i].style.display != "none") {
          count++;
        }
      }
      if ((count - 2) % 3 == 0) {
        barrier.style.display = "inline-block";
      } else {
        barrier.style.display = "none";
      }
    } else {
      barrier.style.display = "none";
    }
  }
}

/* Clears search bar */
function clearSearch() {
  document.getElementById("search-bar").value = "";
  searchShop();
}

/* Decreases quantity of shop item */
function decrementQuantity(id) {
  if (parseInt(document.getElementById("quantity-" + id).value) > 0) {
    document.getElementById("quantity-" + id).value--;
  }
}

/* Increases quantity of shop item */
function incrementQuantity(id) {
  if (parseInt(document.getElementById("quantity-" + id).value) >= 0) {
    document.getElementById("quantity-" + id).value++;
  }
}

/* Updates total cost every time quantity is changed */
function updateCost() {
  var itemCost = document.getElementById("price-value").innerHTML;
  var quantity = document.getElementsByClassName("quantity")[0].value;
  document.getElementById("total-cost").innerHTML = (Math.round((itemCost * quantity) * 100) / 100).toFixed(2);
}

/* Counts number of reviews and changes the numbers in parentheses */
function countReviews() {
  var count = document.getElementsByClassName("review").length;
  document.getElementsByClassName("review-count")[0].innerHTML = count;
  document.getElementsByClassName("review-count")[1].innerHTML = count;
}

/* Displays necessary stars when one is clicked */
function displayStars(index) {
  var stars = document.getElementsByClassName("star-rating");
  for (let i = 0; i < 5; i++) {
    if (i < index) {
      stars[i].style.color = "var(--blue)";
    } else {
      stars[i].style.color = "var(--lightGray)";
    }
  }
}

/* Highlights necessary stars upon hover */
function previewStars(index) {
  var stars = document.getElementsByClassName("star-rating");
  for (let i = 0; i < index; i++) {
    if (stars[i].style.color != "var(--blue)") {
      stars[i].style.color = "#b9e8fa";
    }
  }
}

/* Hides stars when cursor is off */
function hideStars(index) {
  var stars = document.getElementsByClassName("star-rating");
  for (let i = 0; i < index; i++) {
    if (stars[i].style.color != "var(--blue)") {
      stars[i].style.color = "var(--lightGray)";
    }
  }
}

/* Toggles popup menu for changing profile picture */
function toggleProfileSelector() {
  var profileSelector = document.getElementById("profile-selector");
  if (profileSelector.style.display == "none" || profileSelector.style.display == "") {
    profileSelector.style.display = "block";
  } else {
    profileSelector.style.display = "none";
  }
  console.log(profileSelector.style.display);
}

/* Changes profile picture on selection of color */
function changeProfile(element) {
  var profile = document.getElementById("current-profile-picture");
  profile.style.backgroundImage = "none";
  if (element == "profile-red") {
    profile.style.backgroundColor = "var(--red)";
  }
  if (element == "profile-orange") {
    profile.style.backgroundColor = "var(--orange)";
  }
  if (element == "profile-yellow") {
    profile.style.backgroundColor = "var(--yellow)";
  }
  if (element == "profile-green") {
    profile.style.backgroundColor = "var(--green)";
  }
  if (element == "profile-blue") {
    profile.style.backgroundColor = "var(--blue)";
  }
  if (element == "profile-purple") {
    profile.style.backgroundColor = "var(--purple)";
  }
  if (element == "profile-darkGray") {
    profile.style.backgroundColor = "var(--darkGray)";
  }
  if (element == "profile-brown") {
    profile.style.backgroundColor = "var(--brown)";
  }
  if (element == "profile-gay") {
    profile.style.backgroundImage = "linear-gradient(to bottom, var(--red), var(--orange), var(--yellow), var(--green), var(--blue), var(--purple))";
  }
}

/* Stores quantity of shop-item in localStorage */
function saveQuantity(id) {
  if (localStorage.getItem(id) == "NaN" || localStorage.getItem(id) == null) {
    localStorage.setItem(id, 0);
  }
  if (parseInt(document.getElementsByClassName("quantity")[0].value) > 0) {
    localStorage.setItem(id, parseInt(localStorage.getItem(id)) + parseInt(document.getElementsByClassName("quantity")[0].value));
  }
  if (localStorage.getItem(id) == "NaN" || localStorage.getItem(id) == null) {
    localStorage.setItem(id, 0);
  }
}

function saveCartQuantity(id) {
  var index;
  for (let i = 0; i < document.getElementsByClassName("quantity").length; i++) {
    if (document.getElementsByClassName("quantity")[i].id == id) {
      index = i;
    }
  }
  localStorage.setItem(id, parseInt(document.getElementById("quantity-" + id).value));
  if (localStorage.getItem(id) == "NaN") {
    localStorage.setItem(id, 0);
  }
}

/* Displays everything in cart */
if (document.body.id == "cart") {
  var darrenQuantity = localStorage.getItem("darren");
  var hankQuantity = localStorage.getItem("hank");
  var preethamQuantity = localStorage.getItem("preetham");
  var vigneshQuantity = localStorage.getItem("vignesh");
  var bombQuantity = localStorage.getItem("bomb");
  var flashQuantity = localStorage.getItem("flash");
  if(darrenQuantity > 0 && darrenQuantity != null) {
    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("cart-darren").style.display = "flex";
    document.getElementsByClassName("quantity-darren")[1].value = parseInt(darrenQuantity);
    if (darrenQuantity == "NaN") {
      document.getElementById("cost-darren").innerHTML = "0.00";
    } else {
      document.getElementById("cost-darren").innerHTML = (Math.round((darrenQuantity * price("darren")) * 100) / 100).toFixed(2);
    }
  }
  if(hankQuantity > 0 && hankQuantity != null) {
    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("cart-hank").style.display = "flex";
    document.getElementsByClassName("quantity-hank")[1].value = parseInt(hankQuantity);
    if (hankQuantity == "NaN") {
      document.getElementById("cost-hank").innerHTML = "0.00";
    } else {
      document.getElementById("cost-hank").innerHTML = (Math.round((hankQuantity * price("hank")) * 100) / 100).toFixed(2);
    }
  }
  if(preethamQuantity > 0 && preethamQuantity != null) {
    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("cart-preetham").style.display = "flex";
    document.getElementsByClassName("quantity-preetham")[1].value = parseInt(preethamQuantity);
    if (preethamQuantity == "NaN") {
      document.getElementById("cost-preetham").innerHTML = "0.00";
    } else {
      document.getElementById("cost-preetham").innerHTML = (Math.round((preethamQuantity * price("preetham")) * 100) / 100).toFixed(2);
    }
  }
  if(vigneshQuantity > 0 && vigneshQuantity != null) {
    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("cart-vignesh").style.display = "flex";
    document.getElementsByClassName("quantity-vignesh")[1].value = parseInt(vigneshQuantity);
    if (vigneshQuantity == "NaN") {
      document.getElementById("cost-vignesh").innerHTML = "0.00";
    } else {
      document.getElementById("cost-vignesh").innerHTML = (Math.round((vigneshQuantity * price("vignesh")) * 100) / 100).toFixed(2);
    }
  }
  if(bombQuantity > 0 && bombQuantity != null) {
    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("cart-bomb").style.display = "flex";
    document.getElementsByClassName("quantity-bomb")[1].value = parseInt(bombQuantity);
    if (bombQuantity == "NaN") {
      document.getElementById("cost-bomb").innerHTML = "0.00";
    } else {
      document.getElementById("cost-bomb").innerHTML = (Math.round((bombQuantity * price("bomb")) * 100) / 100).toFixed(2);
    }
  }
  if(flashQuantity > 0 && flashQuantity != null) {
    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("cart-flash").style.display = "flex";
    document.getElementsByClassName("quantity-flash")[1].value = parseInt(flashQuantity);
    if (flashQuantity == "NaN") {
      document.getElementById("cost-flash").innerHTML = "0.00";
    } else {
      document.getElementById("cost-flash").innerHTML = (Math.round((flashQuantity * price("flash")) * 100) / 100).toFixed(2);
    }
  }
  updateTotalCost();
}

function updateTotalCost() {
  var subtotal = 0;
  var shipping = 0;
  var tax;
  var cartItems = document.getElementsByClassName("cart-item");
  for (let i = 0; i < cartItems.length; i++) {
    subtotal += parseFloat(document.getElementById("cost-" + cartItems[i].id.substring(cartItems[i].id.indexOf("-") + 1)).innerHTML);
  }
  if (document.getElementById("fast-delivery").checked == true) {
    shipping = 69;
  }
  document.getElementById("subtotal").innerHTML = (Math.round(subtotal * 100) / 100).toFixed(2);
  document.getElementById("shipping").innerHTML = shipping + ".00";
  tax = (Math.round((subtotal * 0.07) * 100) / 100).toFixed(2);
  document.getElementById("tax").innerHTML = tax;
  document.getElementById("total").innerHTML = (Math.round((subtotal + shipping + parseFloat(tax)) * 100) / 100).toFixed(2);
}

/* Returns price of given item name */
function price(itemName) {
  if (itemName == "darren") {
    return 0.69;
  } else if (itemName == "hank") {
    return 21.99;
  } else if (itemName == "preetham") {
    return 4.20;
  } else if (itemName == "vignesh") {
    return 0.00;
  } else if (itemName == "bomb") {
    return 99.99;
  } else if (itemName == "flash") {
    return 5.00;
  }
}

function updateCartCost(id) {
  if (localStorage.getItem(id) == "NaN") {
    document.getElementById("cost-" + id).innerHTML = "0.00";
  } else {
    document.getElementById("cost-" + id).innerHTML = (Math.round((parseInt(localStorage.getItem(id)) * price(id)) * 100) / 100).toFixed(2);
  }
}

function trashItem(id) {
  document.getElementById("cart-" + id).style.display = "none";
  if (localStorage.getItem(id) == "NaN") {
    localStorage.setItem(id, 0);
  } else {
    localStorage.setItem(id, 0);
  }
  document.getElementById("cost-" + id).innerHTML = 0;
  var allHidden = true;
  for (let i = 0; i < document.getElementsByClassName("cart-item").length; i++) {
    if (document.getElementsByClassName("cart-item")[i].style.display == "flex") {
      allHidden = false;
    }
  }
  if (allHidden == true) {
    document.getElementById("cart-empty").style.display = "block";
  }
}

function displayCardInfo() {
  var cardInfo = document.getElementById("card-info");
  if (cardInfo.style.display == "block") {
    document.getElementById("card").checked = false;
    cardInfo.style.display = "none";
  } else {
    cardInfo.style.display = "block";
  }
  document.getElementById("paypal-info").style.display = "none";
}

function displayPayPalInfo() {
  var payPalInfo = document.getElementById("paypal-info");
  if (payPalInfo.style.display == "block") {
    document.getElementById("paypal").checked = false;
    payPalInfo.style.display = "none";
  } else {
    payPalInfo.style.display = "block";
  }
  document.getElementById("card-info").style.display = "none";
}

/* Clears quantity of all items in cart after placing order */
function clearQuantity() {
  var cartItems = document.getElementsByClassName("cart-item");
  for (let i = 0; i < cartItems.length; i++) {
    localStorage.setItem(cartItems[i].id.substring(cartItems[i].id.indexOf("-") + 1), 0);
  }
}

/* Plays audio when button is clicked */
function playAudio() {
  var audio = new Audio("./audio/bruh.mp3");
  audio.play();
}
