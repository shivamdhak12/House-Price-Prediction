function predictPrice() {

    const data = {

        longitude: document.getElementById("longitude").value,

        latitude: document.getElementById("latitude").value,

        housing_median_age: document.getElementById("housing_median_age").value,

        total_rooms: document.getElementById("total_rooms").value,

        total_bedrooms: document.getElementById("total_bedrooms").value,

        population: document.getElementById("population").value,

        households: document.getElementById("households").value,

        median_income: document.getElementById("median_income").value
    };

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    .then(response => response.json())

    .then(result => {

        document.getElementById("result").innerHTML =
            "Predicted House Price: $" + result.price;
    });
}