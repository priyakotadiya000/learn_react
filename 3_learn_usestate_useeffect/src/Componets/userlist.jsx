import React, { useState, useEffect } from "react";

const UserList = () => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchCountries = async () => {

    if (search.length < 1) {
      setFilteredCountries([]);
      return;
    }

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${search}`
      );
      const data = await response.json();
      const countryNames = data.map((country) => country.name.common).sort();
      setFilteredCountries(countryNames);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setFilteredCountries([]);
    }
    
  };

  useEffect(() => {
    fetchCountries(); // Directly call it without debounce
  }, [search]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search country..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      {search && filteredCountries.length > 0 && (
        <ul className="border border-gray-300 rounded-md max-h-60 overflow-y-auto mt-1 bg-white shadow">
          {filteredCountries.map((country, index) => (
            <li key={index} className="p-2 border-b border-gray-100">
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
