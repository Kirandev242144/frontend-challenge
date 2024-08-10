const API_KEY = "194db31978b9d32737febb92c911f29f";
const elements = {
    cityName: document.getElementById("city_name"),
    tempValue: document.getElementById("tmp_value"),
    humidity: document.getElementById("humidity"),
    windSpeed: document.getElementById("wind_speed"),
    date: document.getElementById("date"),
    inputCity: document.getElementById("city_input"),
    weatherImg: document.getElementById("wimage"),
};

elements.inputCity.addEventListener("input", () => {
    const city = elements.inputCity.value.trim();
    city ? getWeatherData(city) : getWeatherData("London");
});

async function getWeatherData(city = "New York") {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        updateUI(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function updateUI(data) {
    elements.cityName.textContent = data.name;
    elements.weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    elements.windSpeed.textContent = `${data.wind.speed} KM/H Wind speed`;
    elements.tempValue.textContent = Math.round(data.main.temp);
    elements.humidity.textContent = `${data.main.humidity}% Humidity`;
    const dateObj = new Date((data.dt + data.timezone) * 1000);
    elements.date.textContent = dateObj.toUTCString();

    // Ensure Lottie player is loaded before changing the 'src'
    const lottieContainer = document.getElementById('lottieContainer');

    if (data.weather[0].description === "clear sky") {
        // Set the Lottie animation for a clear sky

        // Load a Lottie animation
        lottie.loadAnimation({
            container: lottieContainer, // the DOM element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: 'https://lottie.host/d8f97e6b-7321-4ced-9656-f9bf6bb3003e/HPgFOp7iy2.json' // path to the Lottie JSON
        });
    } else {
        // Set a different Lottie animation

        // Load a Lottie animation
        lottie.loadAnimation({
            container: lottieContainer, // the DOM element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://lottie.host/e0861824-567f-429b-94ec-af9167c9b44e/42Ouw4dWWG.json' // path to the Lottie JSON
        });
    }

    console.log(data);
    console.log(data.weather[0].description);
}

getWeatherData()