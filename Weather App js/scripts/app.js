const cityForm = document.querySelector(`.change-location`);
const card = document.querySelector(`.card`);
const details = document.querySelector(`.details`);
const time = document.querySelector(`img.time`);
const icon = document.querySelector(`.icon img`);

const updateUI = data => {

    // destructure properties
    const { cityDet, weather } = data;
    console.log(data);

    //update details template
    details.innerHTML = `
                <h5 class="my-3">${cityDet.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    `;

    //update nigt and day images and icons
    const iconSource = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute(`src`, iconSource);

    let timeSource = weather.IsDayTime
                    ? timeSource = `img/day.svg`
                    : timeSource = `img/night.svg`;

    time.setAttribute(`src`, timeSource);

    //remove display: none if exists
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