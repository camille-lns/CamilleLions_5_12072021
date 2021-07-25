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
    if (i < 3) {
        document.getElementById("ligne1").innerHTML +=
            `<div class="card col-3 mx-5 p-0">
                <img src="${produit.imageUrl}" class="img-fluid card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${produit.name}</h3> 
                    <h4>${produit.price}</h4>
                    <p class="card-text">${produit.description}</p>
                </div>
            </div>`;  
    } else if (i > 2) {
        document.getElementById("ligne2").innerHTML +=
            `<div class="card col-3 mx-5 p-0">
                <img src="${produit.imageUrl}" class="img-fluid card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${produit.name}</h3> 
                    <h4>${produit.price}</h4>
                    <p class="card-text">${produit.description}</p>
                </div>
            </div>`;
    }     
}