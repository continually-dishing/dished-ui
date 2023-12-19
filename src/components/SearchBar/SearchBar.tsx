import React from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearchChange?: () => void;
  searchBarId?: string;
  value?: string;
}

export default function SearchBar({
  onSearchChange,
  value,
  searchBarId,
}: SearchBarProps) {
  return (
    <>
      <div className="search-container">
        <input
          id={searchBarId}
          className="search-bar"
          placeholder=" Search recipes, meal suggestions and more..."
          type="search"
          onChange={onSearchChange}
          value={value}
        ></input>
        <i className="fa">&#xf002;</i>
      </div>
    </>
  );
}
