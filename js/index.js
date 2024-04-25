var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrize");
var productCategoryInput = document.getElementById("productcategory");
var productDescriptionInput = document.getElementById("productdescription");
var productImageInput = document.getElementById("productimage");
var productsContainer;

// new user
if (localStorage.getItem("products") === null) {
  productsContainer = [];
} else {
  // user 2adeem w leh data
  productsContainer = JSON.parse(localStorage.getItem("products"));
  displayProduct();
}

function addProduct() {
  var product = {
    code: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescriptionInput.value,
    image: "image/tv.jbg",
  };
  productsContainer.push(product);
  clearForm();
  displayProduct();
  localStorage.setItem("products", JSON.stringify(productsContainer));
}

function clearForm() {
  productNameInput.value = null;
  productPriceInput.value = null;
  productCategoryInput.value = null;
  productDescriptionInput.value = null;
  productImageInput.value = null;
}

function displayProduct() {
  var cartona = "";
  for (let i = 0; i < productsContainer.length; i++) {
    cartona += `<div class=" col-md-2">
        <div class="product">
            <img src="image/bluberry-ice-cream.jpg" class="w-100"/>
            <h2 class="h4 mt-3"> ${productsContainer[i].code}</h2>
            <p class="text-secondary mb-2">${productsContainer[i].desc}</p>
            <h3 class="h5"><span class="fw-bolder">price: </span>${productsContainer[i].price}</h3>
            <h3 class="h5"><span class="fw-bolder">category: </span>${productsContainer[i].category}</h3>
            <i onclick="deleteProduct(${i});" class="fa-solid fa-trash" style="color: #e10909;"></i>
            <button onclick="setFormForUpdate(${i})" class="btn btn-warning">update</button>

        </div>
    </div>`;
  }
  document.getElementById("cartona").innerHTML = cartona;
}

function deleteProduct(deleteIndex) {
  productsContainer.splice(deleteIndex, 1);
  localStorage.setItem("products", JSON.stringify(productsContainer));
  displayProduct();
}

var searcInput = document.getElementById("searchInput");

function searchProduct(item) {
  var item = searcInput.value;
  var cartoona = ``;
  for (i = 0; i < productsContainer.length; i++) {
    if (
      productsContainer[i].productNameInput
        .toLocaleLowerCase()
        .includes(item.toLocaleLowerCase()) == true
    ) {
      cartoona += `<div class=" col-md-2">
            <div class="product">
                <img src="image/bluberry-ice-cream.jpg" class="w-100"/>
                <h2 class="h4 mt-3"> ${productsContainer[i].code}</h2>
                <p class="text-secondary mb-2">${productsContainer[i].desc}</p>
                <h3 class="h5"><span class="fw-bolder">price: </span>${productsContainer[i].price}</h3>
                <h3 class="h5"><span class="fw-bolder">category: </span>${productsContainer[i].category}</h3>
                <i onclick="deleteProduct(${i});" class="fa-solid fa-trash" style="color: #e10909;"></i>
                <button onclick="setFormForUpdate(${i})" class="btn btn-warning">update</button>
    
            </div>
        </div>`;
    }
  }
  document.getElementById("cartona").innerHTML = cartoona;
}

var addBtn = document.getElementById("addbtn");
var updateBtn = document.getElementById("updatebtn");
var updatedIndex;
function setFormForUpdate(i) {
  updatedIndex = i;
  addBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");

  productNameInput.value = productsContainer[i].code;
  productPriceInput.value = productsContainer[i].price;
  productCategoryInput.value = productsContainer[i].category;
  productDescriptionInput.value = productsContainer[i].desc;
}

function updateProduct() {
  productsContainer[updatedIndex].code = productNameInput.value;
  productsContainer[updatedIndex].price = productPriceInput.value;
  productsContainer[updatedIndex].category = productCategoryInput.value;
  productsContainer[updatedIndex].desc = productDescriptionInput.value;
  displayProduct(),
    localStorage.setItem("products", JSON.stringify(productsContainer));

  updateBtn.classList.add("d-none");
  addBtn.classList.remove("d-none");
}
