const queryInput = document.querySelector('.search');
const list = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//fetch data
async function fetchData(callback) {
  const response = await fetch(endpoint);
  if(response.status === 404) {
    callback(undefined, 'Error! Could not fetch data');
  } else {
    const data = await response.json();
    callback(data, undefined);
  }
};

fetchData((data, err) => {
  if(data === undefined) {
    console.log(err);
  } else {
    cities.push(...data);
  }
});

//search and filter
function findMatches(query, cities) {
  return cities.filter(place => {
    const regex = new RegExp(query, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};

//function to return number with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//display matches into ui
function displayMatches() {
  const matchedPlaces = findMatches(this.value, cities);
  const regex = new RegExp(this.value, 'gi');
  
  const html = matchedPlaces.map(place => {
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>`;
  }).join('');

  list.innerHTML = html;
};

queryInput.addEventListener('change', displayMatches);
queryInput.addEventListener('keyup', displayMatches);