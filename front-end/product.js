const searchProduct = new URLSearchParams(window.location.search); 
const productId = searchProduct.get('_id');

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
    const productImage = document.getElementById('productIMG'); 
    productImage.innerHTML += `<img src="${produit.imageUrl}" class="sepia img-fluid img-thumbnail ultralightbrown">`;

    const productName = document.getElementById('productNAME'); 
    productName.innerHTML += `<h2>${produit.name}</h2>`; 

    const productDescr = document.getElementById('productDESCR'); 
    productDescr.innerHTML += `<p class="card-text">${produit.description}</p>`;

    const productPrice = document.getElementById('productPrice'); 
    productPrice.innerHTML += `<h4>${produit.price}</h4>`;

    chooseLenses(produit);
}

function chooseLenses(product) {
    const specLenses = document.getElementById('lentille');
    for (let lenses of product.lenses) {
        specLenses.innerHTML += `<option value="${lenses}">${lenses}</option>`;
    }
}

const btn = document.getElementById('add');
let selected = [];

for (let i = 0; i < document.querySelectorAll('select').length; i++) {
    let selector = document.querySelectorAll('select')[i];

    selected[i] = false;

    selector.addEventListener('click', function() {
        if (selector.value !=='') {
            selected[i] = true;
        } else {
            selected[i] = false; 
        }
        if (selected.includes(false)) {
                btn.disabled = true;
        } else {
            btn.disabled = false; 
        }
        console.log(selector.value);
    })
}



