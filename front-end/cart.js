var myCart = JSON.parse(localStorage.getItem('cart'));
let total = 0;
let tableauDeProduits = [];

// afficher un produit dans le panier
function displayProduct(elt, idx) {
    document.getElementById("productDisplay").innerHTML += ` 
    <div id="carteProduit${idx}" class="carteProduit">
        <div class="card ultralightbrown marge">
            <div class="row justify-content-start">
                <div class="col-lg-4 col-sm-5 col-6">
                    <!-- Insertion de l'image -->
                    <img src="${elt.img}" class="sepia img-fluid card-img-top ultralightbrown py-3 px-2">
                </div>

                <div class="col-6">
                    <div class="card-body d-flex flex-column justify-content-between heightProductBox">
                        <div>
                            <div>
                                <!-- Insertion du nom du produit -->
                                <h3 class="reponsive">${elt.name}</h3>
                            </div>

                            <div>
                                <!-- Insertion du prix du produit -->
                                <h4>${elt.price/100}€</h4>
                            </div>

                            <div>
                                <!-- Insertion de la lentille choisie -->
                                <p class="card-text">${elt.lenses} </p>
                            </div>
                        </div>

                        <div class="row d-flex flex-md-row flex-column">
                            <div class="col-lg-6 col-md-3 col pb-2">
                                <select class="form-select" data-idx="${idx}">
                                `+select(elt.quantity)+`
                                </select>
                            </div>

                            <div class="col-lg-6 col pe-2">
                                <button id="supprimer${idx}" class="supprimer btn btn-secondary">
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> `;
    
    deleteProduct(idx);
    modifyQuantity();
};

// créer les options du selecteur pour changer la quantité du produit
function select(quantity) {
    let outpout = ``;
    for (i = 1; i < 6; i++) {
        if(quantity == i) {
            outpout += `<option selected value="`+i+`">`+i+`</option> `; 
        } else {
            outpout += `<option value="`+i+`">`+i+`</option> `;
        }
    }
    return outpout; 
}

function modifyQuantity() {
    let newQuantity ;
    document.addEventListener('change', function(e) {
        if(e.target && e.target.tagName.toUpperCase() == `SELECT` ) {
            newQuantity = parseInt(e.target.value); 
            myCart[e.target.dataset.idx].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(myCart));
            modifyTotal();
        }
    });
};

function modifyTotal() {
    total = 0;
    for (let idx=0; idx < myCart.length; idx++) {
        total += (myCart[idx].price * myCart[idx].quantity)/100;
    }
    document.getElementById("totalPrice").innerHTML = total + ` €`;
}

function calculTotal(myCart) {
    for (let idx=0; idx < myCart.length; idx++) {
        displayProduct(myCart[idx], idx);
        total += (myCart[idx].price * myCart[idx].quantity)/100;
        tableauDeProduits.push(myCart[idx].id);
    }
    document.getElementById("totalPrice").innerHTML = total + ` €`;
}


function deleteProduct(idx) { 
    document.addEventListener('click', function(e) {
        if(e.target && e.target.id == `supprimer${idx}`) {
            total -= myCart[idx].price*myCart[idx].quantity/100;
            document.getElementById(`carteProduit${idx}`).remove();
            myCart.splice(idx, 1); 
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(myCart));
            modifyIdx();
            document.getElementById("totalPrice").innerHTML = total + ` €`;
            disableConf();
        }
    });
};

function modifyIdx() {
    for (i = 0; i < myCart.length; i++) {
        let carteProd = document.querySelectorAll(`.carteProduit`)[i]; 
        carteProd.setAttribute('id', `carteProduit`+i); 
        let btnSuppr = document.querySelectorAll(`.supprimer`)[i]; 
        btnSuppr.setAttribute('id', `supprimer`+i);

    }
}

const confBtn = document.getElementById('conf'); 
confBtn.addEventListener('click', function() {

    document.getElementById('userInfo').innerHTML = `
<div class="col-md-4 my-4">
    <label for="validation01" class="form-label">Prénom</label>
    <input type="text" class="form-control" id="firstName" placeholder="Pierre" required="">
</div>

<div class="col-md-4 my-4">
    <label for="validation02" class="form-label">Nom</label>
    <input type="text" class="form-control" id="lastName" placeholder="Dupont" required="">
</div>

<div class="col-md-4 my-4">
    <label for="validationUsername" class="form-label">Email</label>
    <div class="input-group has-validation">
        <span class="input-group-text" id="Email">@</span>
        <input type="text" class="form-control" id="email" placeholder="pierredupont@gmail.com" required="">
    </div>
</div>

<div class="col-md-6 mb-4">
    <label for="validation03" class="form-label">Adresse</label>
    <input type="text" class="form-control" id="address" placeholder="10 rue de la paix" required="">
</div>

<div class="col-md-3 mb-4">
    <label for="validation04" class="form-label">Ville</label>
    <input type="text" class="form-control" id="city" placeholder="Paris" required="">
</div>

<div class="text-center mt-5 d-md-flex justify-content-md-end">
    <div class="col-12 col-sm-6 ">
        <button type="submit" class="btn btn-secondary" id="order">Passer la commande</button>
    </div>

</div>`
})

function disableConf() {
    if (myCart.length > 0) {
        confBtn.disabled = false;
    } else {
        confBtn.disabled = true;
        document.getElementById('userInfo').innerHTML = ``;
    }
}

function verifyInfo(contact) {
    const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
    const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
    const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,40}$/;

    if (
        (regexMail.test(contact.email) == true) &&
        (regexName.test(contact.firstName) == true) &&
        (regexName.test(contact.lastName) == true) &&
        (regexCity.test(contact.city) == true) &&
        (regexAddress.test(contact.address) == true)
    ) {
        return true;
    } 
    return false;
}

const order = document.getElementById("order");

function sendForm(order) {
    fetch(`http://localhost:3000/api/cameras/order`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(order),
            })
            .then(function(res){
                if (res.ok)
                    return res.json();
            })
            .then(function(info){
                localStorage.setItem('validation', JSON.stringify(info));
                window.location.replace("validation.html"); // change de page
            })
            .catch(function(error){
                console.log(error);
            })
}

document.addEventListener("click", (e) => {
    if(e.target && e.target.id == `order`) {
        e.preventDefault();
        // on prépare les infos pour l'envoie en POST
        let contact = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
        };

        // vérification du formulaire de contact
        if (verifyInfo(contact)) {
            localStorage.setItem(`contactClient`, JSON.stringify(contact))  

            const order = {
                "products" : tableauDeProduits,
                "contact" : JSON.parse(localStorage.contactClient)
            }            
            // envoyer les infos en POST
            sendForm(order);

        } else {
            alert("Merci de renseigner correctement le formulaire entier.");
        }
    }
    
})

calculTotal(myCart);
disableConf();
