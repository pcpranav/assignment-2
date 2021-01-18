let request = new XMLHttpRequest;
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function () {
    var countrydata = JSON.parse(this.response);
    let arr = [];
    //countries with region asia
    arr = countrydata.filter(x => x.region === "Asia");
    console.log(arr);
    //population less than 2lacs
    let arr1 = [];
    arr1 = countrydata.filter(x => x.population < 200000)
    console.log(arr1)
    //foreach
    countrydata.forEach(element => {
        console.log(element.name, element.capital, element.flag)
    });
    // total population
    let total = countrydata.reduce((sum, x) => (sum + x.population), 0);
    console.log(total);
    //currencies
    var dollar = [];
    countrydata.forEach(element => {
        element.currencies.forEach((currency) => {
            if (currency.code === "USD") console.log(element.name);
        })
    })

}

