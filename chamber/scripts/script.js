
import members from '../data/members.json' with {type:'json'};

let homegrid2 = document.querySelector('.home-grid2');

members.forEach(element => {
  homegrid2.innerHTML += `<section class="card2">
                                <h2>${element.names}</h2>
                                <div class="business">
                                  <img class="logo_business" src="images/logo-business.png" >
                                    <div id="text_business">
                                        <p>Email: ${element.address}</p>
                                        <p>phone: ${element.phone}</p>
                                        <p>URL: <a href="${element.website}target="_blank">${element.website}</a></p>
                                        <p>Membership Level: ${element.membershiplevel}</p>
                                    </div>
                                </div>
                            </section>`;
});

/*
displayCard(members);

function displayCard(companiesfiltered) {
  document.getElementById("card").innerHTML = ''
  companiesfiltered.forEach( member => {
  const companiesCard = document.createElement("section")
  companiesCard.innerHTML = `<section class="card2">
                                <h2>${member.name}</h2>
                                <h3>Business Tag Line</h3>
                                <div class="business">
                                    <img class="logo_business" src="./images/${member.image} alt=${member.name}" >
                                    <div id="text_business">
                                        <p>Email: ${member.address}</p>
                                        <p>phone: ${member.phone}</p>
                                        <p>URL: <a href="${member.website}target="_blank">${member.website}</a></p>
                                        <p>Membership Level: ${member.membershiplevel}</p>
                                    </div>
                                </div>
                            </section>`;
  document.getElementById("card").appendChild(companiesCard);
});
}*/

/*memberCard.innerHTML = `
<img src="./images/${member.icon}" alt="${member.name}">
<h2>${member.name}</h2>
<p>${member.address}</p>
<p>${member.phone}</p>
<p><a href="${member.website}" target="_blank">${member.website}</a></p>
<p>Membership Level: ${member.membershipLevel}</p>
<p>${member.additionalInfo}</p>
`;

<img class="logo_business" src="./images/${element.image} alt=${element.names}" >

const companiesCard = document.createElement("section")
      companiesCard.innerHTML = `<section><h3>${mem}</h3><p>Location: ${temple.location}</p><p>Dedicated: ${temple.dedicated}</p><p>Area: ${temple.area}</p><img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy"></section>`;
      document.getElementById("card").appendChild(templeCard);

membersContainer.appendChild(memberCard);*/