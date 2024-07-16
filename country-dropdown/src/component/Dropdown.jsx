import { useState } from "react";
import countries from "../data/countries.json";
const Dropdown = function (){

    const [selectedCountry, setSelectedCountry] = useState("");
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    let handleSelectedCountry = (e) =>{

        let countrySelected = e.target.value;
        setSelectedCountry(countrySelected);
        setSelectedCity("");

        let country = countries.find((countryItem) => countryItem.value === countrySelected);
        //console.log(country);

        setCities(country ? country.cities : []);
    }
    //console.log(cities);

    let handleSelectedCity = (e) =>{
        setSelectedCity(e.target.value);
    }
    return(
        <div>
            <h1>Country Dropdown List</h1>
            <div>
                <select value={selectedCountry} onChange={handleSelectedCountry}>
                    <option value="" disabled>Select a Country</option>
                    {
                        countries.map((country, index) =>{
                            return(
                                <option key={index} value={country.value}>{country.name}</option>
                            ); 
                        })
                    }
                    
                </select>

                <select value={selectedCity} onChange={handleSelectedCity}>
                    <option value="" disabled>Select a City</option>
                    {
                        cities.map((city, index) =>{
                            return(
                                <option key={index}>{city}</option>
                            );
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default Dropdown;