// console.log("hello!");

// Fetch a single country
const getCountryByName = async(countryName) => {
    countryName.preventDefault();
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json();
    console.log(data);

const countryInfo = document.createElement("h2");
const listName = document.createElement("h3");
listName.textContent = jsonData[0].name.common;

const countries = document.querySelector("#countries");
countries.appendChild(countryInfo);
countryInfo.appendChild(listName);

}

const onSubmit = (event) => {
    event.preventDefault();
    getCountryByName(event.target.countries.value);
}

const searchSubmit = document.querySelector("search");
searchSubmit.addEventListener("submit", onSubmit)
getCountryByName("australia");




    // data.forEach((country) => {
    //     const countrySection = document.getElementById("countriesSection");
    //     const countryHeader = document.createElement("h2");
    //     countryHeader.textContent = country.name.official;
    //     countrySection.appendChild(countryHeader);
    //     const populationHeader = document.createElement("h3");
    //     populationHeader.textContent = "Population: " + country.population;
    //     countrySection.appendChild(populationHeader);
    // });


    // const getAllCountries = async() => {
    //     const response = await fetch ('https://restcountries.com/v3.1/all');
    //     const jsonData = await response.json();
    //     jsonData.forEach((country) => {
    //         const countrySection = document.getElementById("countriesSection");
    //         const countryHeader = document.createElement("h2");
    //         countryHeader.textContent = country.name.official;
    //         countrySection.appendChild(countryHeader);
    //         const populationHeader = document.createElement("h3");
    //         populationHeader.textContent = "Population: " + country.population;
    //         countrySection.appendChild(populationHeader);
    //         console.log(country.name.official)
    //     });
    

    
