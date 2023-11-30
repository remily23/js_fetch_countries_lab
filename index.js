// arrow function 
const displayCountryInfo = (country) => {
    const countryDiv = document.createElement("div");

    // PTags for each element of the country to display as a para, innerText to return all text within the element
    const namePTag = document.createElement("p");
    namePTag.innerText = country.name.common;

    const capitalPTag = document.createElement("p");
    capitalPTag.innerText = country.capital;

    const populationPTag = document.createElement("p");
    populationPTag.innerText = country.population;

    // Ul tag for list of country languages 
    const languagesUlTag = document.createElement("ul");
    Object.values(country.languages).forEach((language) => {
        const languageLi = document.createElement("li");
        languageLi.innerText = language;
        // appendChild to add the languagesULTag to the Li
        languagesUlTag.appendChild(languageLi);
    })
    // appendChild each element to add a node to the end of the list, returns appended node
    countryDiv.appendChild(namePTag);
    countryDiv.appendChild(capitalPTag);
    countryDiv.appendChild(populationPTag);
    countryDiv.appendChild(languagesUlTag);
    // horizontal line 
    countryDiv.appendChild(document.createElement("hr"));

    document.querySelector("#single-country").appendChild(countryDiv);

}

    // Fetch a single country
const getCountryByName = async(countryName) => {

    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const arrayOfCountries = await response.json();
    console.log(arrayOfCountries[0]);

    // to display on html, takes country object from arrayOfCountries into the displayCountryInfo
    displayCountryInfo(arrayOfCountries[0])
}  

    // Hardcoded for MVP
    getCountryByName("australia");

// const getAllCountries = async () => {
//     const response = await fetch(`https://restcountries.com/v3.1/all`);
//     const getAllCountries = await response.json();
//     allCountries.forEach((country) => {
//         displayCountryInfo(country);
//     })
// };

// const getAllCountries();
