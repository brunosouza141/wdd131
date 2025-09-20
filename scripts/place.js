document.addEventListener("DOMContentLoaded", function() {
    let temperature= 9;
    let windSpeed=5;
    let windChillElement = document.getElementById("wind-chill");
    let calculateWindChill= (temperature,windSpeed) => 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    
    if (windSpeed > 4.8 && temperature <= 10)
    {
        let windChillResult = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent= `${windChillResult.toFixed(2)} C`;
        console.log(windChillResult)
    }
    else{
        windChillElement.textContent= "N/A";
    }
});