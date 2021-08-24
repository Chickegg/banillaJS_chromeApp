function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "6ee770953ea44ffedf8cf74c360c2b88";
    let url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // javascirpt에서 url에 접근하는 법
    fetch(url)
    .then(response => response.json()) // jsonfile로 받아오고
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const name = data.name;

        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = name;
    }); // 받아온 json파일의 data의 weather0번째 의 메인을 받아온다.
}
function onGeoErr() {
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);


