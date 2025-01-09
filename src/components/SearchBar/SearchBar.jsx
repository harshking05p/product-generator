import React from 'react';
import './SearchBar.css';

function SearchBar({ setSearchQuery }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;
