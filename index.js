const API_URL = 'https://api.punkapi.com/v2/beers';
const container = document.querySelector('.container');

const render = (data) => {
  if (!data.length) return;
  const fragment = document.createDocumentFragment();
  data.forEach((beer) => {
    const div = document.createElement('div');
    div.classList.add('beer');
    div.innerHTML = `
        <div class="beer--content">
            <h1 class="beer--title">${beer.name}</h1>
            <p class="beer--tagline">${beer.tagline}</p>
            <p class="beer--description">${beer.description}</p>
        </div>
        <img class="beer--image" src="${beer.image_url}" alt="${beer.name}">
      `;
    console.log(beer);
    fragment.appendChild(div);
  });

  container.appendChild(fragment);
};

const success = (data) => {
  const beers = JSON.parse(data.target.responseText);
  render(beers);
};

const error = (error) => {
  console.log(error);
};

const req = new XMLHttpRequest();
req.onload = success;
req.onerror = error;
req.open('GET', API_URL);
req.send();
