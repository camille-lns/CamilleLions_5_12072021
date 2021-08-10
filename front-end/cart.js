let myCart = JSON.parse(localStorage.getItem('cart'));
let total = 0;
let idx = 0;

console.log(myCart);

for (elt of myCart) {
    displayProduct(elt, idx);
    total += (elt.price * elt.quantity)/100;
    idx++;
}

addEvListener();

// afficher un produit dans le panier
function displayProduct(elt, idx) {
    document.getElementById("productDisplay").innerHTML += ` 
    <div id="carteProduit${idx}">
        <div class="card ultralightbrown marge">
            <div class="row justify-content-start">
                <div class="col-3 " id="prodImg${idx}">
                    <!-- Insertion de l'image -->
                    <img src="${elt.img}" class="sepia img-thumbnail ultralightbrown">
                </div>

                <div class="col">
                    <div class="card-body d-flex flex-column justify-content-between heightProductBox">
                        <div id="texte${idx}">
                            <div id="nameproduct${idx}">
                                <!-- Insertion du nom du produit -->
                                <h3>${elt.name}</h3>
                            </div>

                            <div>
                                <!-- Insertion du prix du produit -->
                                <h4 id="priceproduct${idx}">${elt.price/100}</h4><h4>€</h4>
                            </div>

                            <div id="lenseproduct${idx}">
                                <!-- Insertion de la lentille choisie -->
                                <p class="card-text">${elt.lenses} </p>
                            </div>
                        </div>

                        <div id="suppr${idx}" class="row">
                            <div id="quantityproduct${idx}" class="col-6">
                                <select id="lentille${idx}" class="form-select">
                                    <option selected="${elt.quantity}">${elt.quantity}</option>
                                </select>
                            </div>

                            <div id="supprimer${idx}" class="col-6">
                                <p>Supprimer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> `;

};


//supprimer un produit 
function addEvListener() {
    for (idx = 0; idx < myCart.length ; idx++) { 
        let suppression = document.getElementById(`supprimer${idx}`);
        let carteProduit= document.getElementById(`carteProduit${idx}`);
        suppression.addEventListener('click', function() {
            carteProduit.innerHTML = ``;

        })
    }

}






// afficher le total
document.getElementById("totalPrice").innerHTML = `${total} € `


const confBtn = document.getElementById('conf'); 
confBtn.addEventListener('click', function() {

    document.getElementById('userInfo').innerHTML = `
<div class="col-md-4 my-4">
    <label for="validation01" class="form-label">Prénom</label>
    <input type="text" pattern="^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$" class="form-control" id="firstName" placeholder="Pierre" required="">
</div>

<div class="col-md-4 my-4">
    <label for="validation02" class="form-label">Nom</label>
    <input type="text" pattern="^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$" class="form-control" id="lastName" placeholder="Dupont" required="">
</div>

<div class="col-md-4 my-4">
    <label for="validationUsername" class="form-label">Email</label>
    <div class="input-group has-validation">
        <span class="input-group-text" id="inputEmail">@</span>
        <input type="text" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$" class="form-control" id="email" placeholder="pierredupont@gmail.com" required="">
    </div>
</div>

<div class="col-md-6 mb-4">
    <label for="validation03" class="form-label">Adresse</label>
    <input type="text" pattern="([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+" class="form-control" id="address" placeholder="10 rue de la paix" required="">
</div>

<div class="col-md-3 mb-4">
    <label for="validation04" class="form-label">Ville</label>
    <input type="text" pattern="^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$" class="form-control" id="city" placeholder="Paris" required="">
</div>

<div class="text-center mt-5 d-md-flex justify-content-md-end">
    <div class="col-12 col-sm-6 ">
        <button type="submit" class="btn btn-secondary" id="order">Passer la commande</button>
    </div>

</div>`
})