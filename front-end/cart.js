let myCart = JSON.parse(localStorage.getItem('cart'));

for (elt of myCart) {
    displayProduct(elt);
}



function displayProduct(elt) {
    document.getElementById("productDisplay").innerHTML += ` <div class="card ultralightbrown marge">
    <div class="row justify-content-start">
        <div class="col-3 " id="prodImg">
            <!-- Insertion de l'image -->
            <img src="${elt.img}" class="sepia img-thumbnail ultralightbrown">
        </div>

        <div class="col">
            <div class="card-body d-flex flex-column justify-content-between heightProductBox">
                <div id="texte">
                    <div id="nameproduct">
                        <!-- Insertion du nom du produit -->
                        <h3>${elt.name}</h3>
                    </div>
                    <div id="priceproduct">
                        <!-- Insertion du prix du produit -->
                        <h4>${elt.price} </h4>
                    </div>
                    <div id="lenseproduct">
                        <!-- Insertion de la lentille choisie -->
                        <p class="card-text">${elt.lenses} </p>
                    </div>
                </div>
                <div id="suppr" class="row">
                    <div id="quantityproduct" class="col-6">
                        <select id="lentille" class="form-select">
                            <option selected="${elt.quantity}">${elt.quantity}</option>
                        </select>
                    </div>
                    <div id="supprimer" class="col-6">
                        <p>Supprimer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> `
}