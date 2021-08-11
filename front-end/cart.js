let myCart = JSON.parse(localStorage.getItem('cart'));
let total = 0;

console.log(myCart);

for (let idx=0; idx < myCart.length; idx++) {
    displayProduct(myCart[idx], idx);
    total += (myCart[idx].price * myCart[idx].quantity)/100;
}


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

                            <div id="priceproduct${idx}">
                                <!-- Insertion du prix du produit -->
                                <h4>${elt.price/100}€</h4>
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

                            <button id="supprimer${idx}" class="col-6">
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> `;
    
    addEvListener(idx);
};


//supprimer un produit 
function addEvListener(idx) { 
        document.getElementById(`supprimer${idx}`)
            .addEventListener('click', function() {
                total -= myCart[idx].price/100;
                document.getElementById(`carteProduit${idx}`).innerHTML = ``;
                document.getElementById("totalPrice").innerHTML = `${total} € `;
            });
};



// afficher le total
document.getElementById("totalPrice").innerHTML = `${total} € `;


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
        <span class="input-group-text" id="Email">@</span>
        <input type="text" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$" class="form-control" id="email" placeholder="pierredupont@gmail.com" required="">
    </div>
</div>

<div class="col-md-6 mb-4">
    <label for="validation03" class="form-label">Adresse</label>
    <input type="text" pattern="^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,40}$" class="form-control" id="address" placeholder="10 rue de la paix" required="">
</div>

<div class="col-md-3 mb-4">
    <label for="validation04" class="form-label">Ville</label>
    <input type="text" pattern="^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$" class="form-control" id="city" placeholder="Paris" required="">
</div>

<div class="text-center mt-5 d-md-flex justify-content-md-end">
    <div class="col-12 col-sm-6 ">
        <button type="submit" class="btn btn-secondary" id="order">Passer la commande</button>
    </div>

</div>`
})

/*
// validation du formulaire 
const order = document.getElementById("conf");
const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,40}$/;

order.addEventListener("click", (event) => {
    // on prépare les infos pour l'envoie en POST
    let contact = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
    };

    // vérification du formulaire de contact
    if (
        (regexMail.test(contact.email) == true) &
        (regexName.test(contact.firstName) == true) &
        (regexName.test(contact.lastName) == true) &
        (regexCity.test(contact.city) == true) &
        (regexAddress.test(contact.address) == true)
    ) {
        event.preventDefault();

        // envoyer les infos en POST

    } else {
        alert("Merci de renseigner le formulaire entier.");
    }
});
*/
