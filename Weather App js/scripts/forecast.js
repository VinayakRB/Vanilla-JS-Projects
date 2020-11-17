const key = `HrIQi1vzCx2J7Dp0zrGJsHeF05EaEZFf`;
const unsplashKey = `XNd65LYzvptj0MsGNFU6BGF8WlfMXTlqqn5KmfbUg2o`;


const getWall = async (city) => {
    const cityStreet = `${city} streets`;
    console.log(cityStreet);
    const base = `https://api.unsplash.com/search/photos`;
    const query = `?client_id=${unsplashKey}&page=1&query=${cityStreet}&orientation=landscape`;

    const response = await fetch(base+query);
    const data = await response.json();
    return data.results[0];
}

// get weather information 
const getWeather = async (id) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
};

// get city information 
const getCity = async (city) => {
    const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
};

