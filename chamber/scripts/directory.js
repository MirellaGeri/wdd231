const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function getMembersData() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error('Network response was not ok');
        const members = await response.json();
        showMembers(members);
    } catch (error) {
        console.error('Error in data JSON:', error);
        document.querySelector('.home-grid2').innerHTML = "<p>Error loading member data.</p>";
    }
}

function createMemberCard(member) {
    return `
        <section>
            <img class="logo_business" src="images/logo-business.png" >
            <h3>${member.names}</h3>
            <p>${member.address}</p>
            <p> ${member.phone}</p>
            <a href="${member.website}" target="_blank">Details</a>
        </section>
    `;
}

function showMembers(members) {
    document.querySelector('.home-grid2').innerHTML = members.map(createMemberCard).join('');
}

document.addEventListener('DOMContentLoaded', getMembersData);