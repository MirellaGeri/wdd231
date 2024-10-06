const companies = `[
    {
      "names": "Alcampo SAC",
      "addresses": "Calle molinos 101",
      "phonenumbers": "636363663",
      "website URL": "https://www.compraonline.alcampo.es/",
      "image": "Alcampo.png",
      "membershiplevel": "1",
      "otherinformation": null
    },
    {
      "names": "Carrefour SAC",
      "addresses": "Calle lopez de albujar 12",
      "phonenumbers": "6363888863",
      "website URL": "https://www.carrefour.es/",
      "image": "Carrefour.png",
      "membershiplevel": "2",
      "otherinformation": null
    },
    {
      "names": "DIA SAC",
      "addresses": "Calle bravo murillo 13",
      "phonenumbers": "636363663",
      "website URL": "https://www.dia.es/",
      "image": "Dia.png",
      "membershiplevel": "3",
      "otherinformation": null
    },
    {
      "names": "Ahorramas SAC",
      "addresses": "Calle nuestra señora del carmen 35",
      "phonenumbers": "636367778",
      "website URL": "https://www.ahorramas.com/",
      "image": "Ahorramas.png",
      "membershiplevel": "1",
      "otherinformation": null
    },
    {
      "names": "Aldi SAC",
      "addresses": "Calle recoletos 36",
      "phonenumbers": "636368863",
      "website URL": "https://www.aldi.es/",
      "image": "Aldi.png",
      "membershiplevel": "2",
      "otherinformation": null
    },
    {
      "names": "Lidl SAC",
      "addresses": "Calle alvarado 11",
      "phonenumbers": "636853663",
      "website URL": "https://www.lidl.es/",
      "image": "Lidl.png",
      "membershiplevel": "3",
      "otherinformation": null
    },
    {
      "names": "Mercadona SAC",
      "addresses": "Calle lope de aro 2",
      "phonenumbers": "636362453",
      "website URL": "https://www.mercadona.es/",
      "image": "Mercadona.png",
      "membershiplevel": "3",
      "otherinformation": null
    }
  ]`;
const jsonData = JSON.parse(companies);

displayCard(companies);

function displayCard(companiesfiltered) {
  document.getElementById("card").innerHTML = ""
  companiesfiltered.forEach(companie => {
      const companiesCard = document.createElement("section")
      companiesCard.innerHTML = `<section><h3>${temple}</h3><p>Location: ${temple.location}</p><p>Dedicated: ${temple.dedicated}</p><p>Area: ${temple.area}</p><img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy"></section>`;
      document.getElementById("card").appendChild(templeCard);
});
}