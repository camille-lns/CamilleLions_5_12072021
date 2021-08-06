const searchProduct = new URLSearchParams(window.location.search); 
const productId = searchProduct.get('_id');

const newIdUrl = `http://localhost:3000/api/cameras/${productId}`;

let objProduit = {
    name: '',
    price: 0,
    quantity: 0,
    id: '',
    lenses: '',
    img: ''
};

fetch(newIdUrl) 
.then (function(res) {
    if (res.ok) {
        return res.json();
    }
})

.then (function(produit) {
    addProductInfo(produit);
    objProduitInfo(produit);
})

.catch (function(error) {
    console.error(error);
});

// afficher le produit sur la page 
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

function chooseLenses(produit) {
    const specLenses = document.getElementById('lentille');
    for (let lenses of produit.lenses) {
        specLenses.innerHTML += `<option value="${lenses}">${lenses}</option>`;
    }
}

// attribuer la quantité à ObjProduit
document.getElementById('quantity')
        .addEventListener('change', function(event) {
            objProduit.quantity = event.target.value;
        })

// attribuer la lentille à ObjProduit
document.getElementById('lentille')
        .addEventListener('change', function(event) {
            objProduit.lenses = event.target.value; 
        })

// garder en mémoire les infos du produit pour envoyer vers local storage
function objProduitInfo(produit) {
    objProduit.name = produit.name;
    objProduit.price = produit.price;
    objProduit.id = produit._id;
    objProduit.img = produit.imageUrl;
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
    })
}

btn.addEventListener('click', function() {
    let retrievedObject = JSON.parse(localStorage.getItem('cart'));
    let cart;
    if(!retrievedObject) {
        cart = [objProduit];
    } else {
        retrievedObject.push(objProduit);
        cart = retrievedObject;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
})