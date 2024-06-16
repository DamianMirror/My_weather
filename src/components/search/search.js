import { AsyncPaginate } from "react-select-async-paginate";
import { useEffect, useState } from "react";
import {GEO_API_URL, geoApiOptions} from "../../api";
import "./search.css";
import {customStyles} from "./searchBar";

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    useEffect(() => {
        console.log(search);
    }, [search]);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoApiOptions)
        .then((res) => res.json())
        .then((res) => {
            return {
                options: res.data.map((city) => ({
                    label: `${city.name}, ${city.countryCode}`,
                    value: `${city.latitude} ${city.longitude}`  
                })),
                hasMore: false
            }
        })
        .catch((err) => console.log(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
      <AsyncPaginate 
        styles={customStyles} 
        placeholder="Search for city"
        debounceTimeout={500}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    );
}

export default Search;