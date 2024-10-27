async function getMembersData() {
    try {
        const response = await fetch("data/arts.json");
        const arts = await response.json();
        showMembers(arts);
        setupFilters(arts);
    } catch (error) {
        console.error('Error in data JSON:', error);
    }
  }

function showMembers(arts){
  const cardContainer = document.getElementById('card');
    cardContainer.innerHTML = '';

    const featuredArts = arts.filter(art => art.featured);
    const regularArts = arts.filter(art => !art.featured);
    //show featured
    featuredArts.forEach(art => {
      const artDiv = createArtDiv(art);
      cardContainer.appendChild(artDiv);
    });
    //show other
    regularArts.forEach(art => {
      const artDiv = createArtDiv(art);
      cardContainer.appendChild(artDiv);
    });
}
function createArtDiv(art) {
  const sectioncard = document.createElement('section');
  sectioncard.classList.add('art-card');
  if (art.featured) {
    sectioncard.classList.add('featured');
  }
  sectioncard.innerHTML = `
            <h3>${art.name}</h3>
            <img src="${art.imageUrl}" alt="${art.name} image" class="image" loading="lazy">
        `;
  sectioncard.querySelector('img').addEventListener('click', () => {
    openModal(art);
  });
  return sectioncard;
}
function openModal(art) {
  document.getElementById('modal-title').innerText = art.name;
  document.getElementById('modal-description').innerText = art.description;

  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  document.querySelector('.close').onclick = function() {
      modal.style.display = 'none';
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}
function setupFilters(arts) {
  const allButton = document.getElementById('all');
  const crochetButton = document.getElementById('crochet');
  const craftButton = document.getElementById('craft');

  function updateActiveButton(selectedButton) {
    const buttons = [allButton, crochetButton, craftButton];
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    selectedButton.classList.add('active');
  }

  allButton.addEventListener('click', () => {
      updateActiveButton(allButton);
      showMembers(arts);
  });
  crochetButton.addEventListener('click', () => {
      updateActiveButton(crochetButton);
      filterMembers(arts, 'Crochet');
  });
  craftButton.addEventListener('click', () => {
      updateActiveButton(craftButton);
      filterMembers(arts, 'Craft');
  });

  showMembers(arts);
}
function filterMembers(arts, category) {
  const filteredArts = arts.filter(art => art.category === category);
  const featuredArts = filteredArts.filter(art => art.featured);
  const regularArts = filteredArts.filter(art => !art.featured);
  const cardContainer = document.getElementById('card');
  cardContainer.innerHTML = '';
  //show featured
  featuredArts.forEach(art => {
    const artDiv = createArtDiv(art);
    cardContainer.appendChild(artDiv);
  });
  //show other
  regularArts.forEach(art => {
    const artDiv = createArtDiv(art);
    cardContainer.appendChild(artDiv);
  });

}
document.addEventListener('DOMContentLoaded', getMembersData);
