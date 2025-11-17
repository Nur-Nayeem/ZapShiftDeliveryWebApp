import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ serviceCenters, mapRef }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.location.value;
    console.log(searchText);
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(searchText.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14);
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <label className="input rounded-full pr-0">
        <FaSearch className="size-5" />
        <input type="search" required placeholder="Search" name="location" />
        <button className="bg-primary rounded-full h-full px-5">Search</button>
      </label>
    </form>
  );
};

export default SearchBox;
