fetch("http://localhost:3000/api/cameras")
.then (function(res) {
    if (res.ok) {
        return res.json();
    }
})

.then (function(tableauProduits) {
    for (let i = 0; i < tableauProduits.length; i++) {
        addProduit(tableauProduits[i], i);
        console.log(tableauProduits[i]);
    }
})

.catch (function(error) {
    console.log(error); 
});


function addProduit(produit, i) {
    let myCard = `<div class="col-4 px-4">
    <div class="card p-0 ultralightbrown">
        <img src="${produit.imageUrl}" class="sepia img-fluid card-img-top">
        <div class="card-body">
            <h3 class="card-title">${produit.name}</h3> 
            <h4>${produit.price}</h4>
            <p class="card-text">${produit.description}</p>
            <a href="/front-end/product.html?${produit._id}" class="card-link link">Plus d'informations</a>
        </div>
    </div>
</div>`;

    if (i < 3) {
        document.getElementById("ligne1").innerHTML += myCard;  
    } else if (i > 2) {
        document.getElementById("ligne2").innerHTML += myCard;
    }     
}