async function getMembersData() {
  try {
      const response = await fetch("data/members.json");
      const members = await response.json();
      showMembers(members);
  } catch (error) {
      console.error('Error in data JSON:', error);
  }
}

// Función para renderizar las empresas
function showMembers(members) {
  document.querySelector('.home-grid2').innerHTML = ""
  const featuredMembers = members.filter(element=> element.membershiplevel == '2' || element.membershiplevel == '3');
  const nonFeaturedMembers = members.filter(element => element.membershiplevel != '2' && element.membershiplevel != '3');
  
  showFeaturedMembers(featuredMembers);
  
  nonFeaturedMembers.forEach(element => {
    const sectionMember = document.createElement("section")
    sectionMember.className = 'card2';
    let membershipClass = "";
    let membership = "";
    if (element.membershiplevel == '1'){
        membership = "member";
        membershipClass = "level-member";
    }
    sectionMember.classList.add(membershipClass);
    sectionMember.innerHTML += `
                                <h2>${element.names}</h2>
                                <div class="business">
                                  <img class="logo_business" src="images/logo-business.png" >
                                    <div id="text_business">
                                        <p>Email: ${element.address}</p>
                                        <p>phone: ${element.phone}</p>
                                        <p>URL: <a href="${element.website}" target="_blank">${element.website}</a></p>
                                        <p>Membership Level: ${membership}</p>
                                    </div>
                                </div>
                              `;
      document.querySelector('.home-grid2').appendChild(sectionMember);
  });
}

function showFeaturedMembers(members){
  const featuredContainer = document.querySelector('.home-grid-featured');
  featuredContainer.innerHTML = "";
  members = shuffleArray(members);
  members.forEach(element => {
    const sectionMember = document.createElement("section")
    sectionMember.className = 'featured-card';
    let membership = "";
    let membershipClass = "";
    if (element.membershiplevel == '2'){
        membership = "silver";
        membershipClass = "level-silver";
    }else{
        membership = "gold";
        membershipClass = "level-gold";
    }
    sectionMember.classList.add(membershipClass);
    sectionMember.innerHTML += `
                                <h2>${element.names}</h2>
                                <div class="business">
                                  <img class="logo_business" src="images/logo-business.png" >
                                    <div id="text_business">
                                        <p>Email: ${element.address}</p>
                                        <p>phone: ${element.phone}</p>
                                        <p>URL: <a href="${element.website}" target="_blank">${element.website}</a></p>
                                        <p>Membership Level: ${membership}</p>
                                    </div>
                                </div>
                              `;
    featuredContainer.appendChild(sectionMember);
});
}

function shuffleArray(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

getMembersData();




/*import members from '../data/members.json' with {type:'json'};
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
background-color: #759C95;
*/


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
