const searchProduct = new URLSearchParams(window.location.search); 
const productId = searchProduct.get("_id");

const newIdUrl = `http://localhost:3000/api/cameras/${productId}`;

fetch(newIdUrl) 
.then (function(res) {
    if (res.ok) {
        return res.json();
    }
})

.then (function(produit) {
    addProductInfo(produit);
})

.catch (function(error) {
    console.log(error);
});

function addProductInfo(produit) {
    const productImage = document.getElementById("productIMG"); 
    productImage.innerHTML += `<img src="${produit.imageUrl}" class="img-fluid img-thumbnail">`;

    const productName = document.getElementById("productNAME"); 
    productName.innerHTML += `<h2>${produit.name}</h2>`; 

    const productDescr = document.getElementById("productDESCR"); 
    productDescr.innerHTML += `<p class="card-text">${produit.description}</p>`;

    const productPrice = document.getElementById("productPrice"); 
    productPrice.innerHTML += `<h4>${produit.price}</h4>`;

    chooseLenses(produit);
}

function chooseLenses(product) {
    const specLenses = document.getElementById("lentille");
    for (let lenses of product.lenses) {
        specLenses.innerHTML += `<option value="${lenses}">${lenses}</option>`;
    }
}