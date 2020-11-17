const cityForm = document.querySelector(`.change-location`);
const card = document.querySelector(`.card`);

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