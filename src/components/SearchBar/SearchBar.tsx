import React from "react";
import './SearchBar.css'

export default function SearchBar() {
    return (
        <>
            <div className="search-container">
                <input
                    className="search-bar"
                    placeholder=' Search recipes, meal suggestions and more...'
                    type='search'

                >
                </input>
                <i className="fa">&#xf002;</i>
            </div>
        </>
    );
}