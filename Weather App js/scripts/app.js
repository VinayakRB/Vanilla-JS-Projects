const cityForm = document.querySelector(`.change-location`);
const card = document.querySelector(`.card`);

const updateUI = data => {

    // destructure properties
    const { cityDet, weather } = data;

    //update details template
    details.innerHTML = `
                <h5 class="my-3">${cityDet.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    `;

    if(card.classList.contains(`d-none`)) {
        card.classList.remove(`d-none`);
    }
}

const updateCity = async (city) => {
    // console.log(city);
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);

    return { cityDet, weather };
};

cityForm.addEventListener(`submit`, e => {
    //prevent default
    e.preventDefault();

    //get city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update ui with city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});