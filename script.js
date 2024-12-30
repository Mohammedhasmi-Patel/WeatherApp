document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;
  const apiKey = "d52d75b889cbe567fdd59e7ca2a21bc0";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const weatherResult = document.getElementById("weatherResult");
  const errorElement = document.getElementById("error");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById("cityName").textContent = data.name;
    document.getElementById(
      "temperature"
    ).textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent =
      data.weather[0].description;
    document.getElementById(
      "weatherIcon"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    errorElement.classList.add("hidden");
    weatherResult.classList.remove("hidden");
  } catch (error) {
    weatherResult.classList.add("hidden");
    errorElement.textContent = error.message;
    errorElement.classList.remove("hidden");
  }
});
