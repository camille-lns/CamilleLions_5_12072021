function confirmationCommande(){
    if (localStorage.length == 0)
    {
        document.getElementById("confirmation").innerHTML = `Oups. Il semblerait qu'il y ait eu une erreur. `;
    }
    else{
        let validation = localStorage.getItem('validation');
        validation = JSON.parse(validation);
        conf(validation);
        }
};



function conf(valid) {
    document.getElementById("confirmation").innerHTML = `
    <h2>Félicitation ! Votre commande est confirmée. </h2><br>
    <p id="orderId">Nous vous remercions pour votre commande n°<b>${valid.orderId}</b>.</p>
    <p id="infoClient">Elle vous sera livrée au nom de <b>${valid.contact.lastName} ${valid.contact.firstName}</b>, 
        à l'adresse <b>${valid.contact.address} - ${valid.contact.city}</b>.</p>
    <p id="mail">Une confirmation vous a été envoyé par mail à l'adresse ${valid.contact.email}.</p><br>
    <p>À bientôt sur notre site !</p>
    `

;};


confirmationCommande();