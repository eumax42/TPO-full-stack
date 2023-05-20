let clima = {
    apikey: "9e1d622c30a53f66c7ccb647227bf4b1",
    fetchClima: function(ciudad) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            ciudad +
            "&units=metric&appid=" +
            this.apikey
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => this.mostrarClima(data));
    },
    mostrarClima: function(data) {
        const temp  = data.main.temp.toFixed(1);
        document.querySelector("#temp").innerHTML = temp + " &#8451;";
    }
};

let ciudad = document.querySelector("#Ciudad");
ciudad.addEventListener("change", function() {
    clima.fetchClima(ciudad.value);
});

clima.fetchClima("Buenos Aires");