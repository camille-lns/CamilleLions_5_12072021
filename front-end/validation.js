function confirmationCommande(){
    if (localStorage.length == 0)
    {
        document.getElementsByTagName("confirmation")[0].innerHTML=""; 
    }
    else{
        let validation = localStorage.getItem('validation');
        validation = JSON.parse(validation);
        console.log(validation);
        conf(validation);
        }
};



function conf(valid) {
    document.getElementById("orderId").innerHTML = `Nous vous remercions pour votre commande n°<b>${valid.orderId}</b>.`;
    document.getElementById("infoClient").innerHTML = `Elle vous sera livrée au nom de <b>${valid.contact.lastName} ${valid.contact.firstName}</b>, à l'adresse <b>${valid.contact.address} - ${valid.contact.city}</b>.`;
    document.getElementById("mail").innerText = `Une confirmation vous a été envoyé par mail à l'adresse ${valid.contact.email}.`
;};


confirmationCommande();