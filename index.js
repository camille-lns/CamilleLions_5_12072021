fetch("http://localhost:3000/api/cameras")
.then (function(res) {
    if (res.ok) {
        return res.json();
    }
})

.then (function(tableauProduits) {
    for (let i = 0; i < tableauProduits.length; i++) {
        addProduit(tableauProduits[i], i);
    }
})

.catch (function(error) {
    console.log(error); 
});


function addProduit(produit, i) {
    let myCard = `<div class="col-sm-12 col-lg-4 col-md-12 px-4 marge">
    <div class="card p-0 ultralightbrown">
        <img src="${produit.imageUrl}" class="sepia img-fluid card-img-top">
        <div class="card-body">
            <h3 class="card-title">${produit.name}</h3> 
            <h4>${produit.price/100}€</h4>
            <p class="card-text">${produit.description}</p>
            <a href="/front-end/product.html?_id=${produit._id}" class="card-link link stretched-link">Acheter ce produit</a>
        </div>
    </div>
</div>`;

    if (i < 3) {
        document.getElementById("ligne1").innerHTML += myCard;  
    } else if (i > 2) {
        document.getElementById("ligne2").innerHTML += myCard;
    }     
}