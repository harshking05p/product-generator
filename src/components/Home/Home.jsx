import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ProductList from '../ProductList/ProductList.jsx';
import './Home.css';

function Home() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    // Add product handler
    const addProduct = (product) => {
        if (products.find((p) => p.name.toLowerCase() === product.name.toLowerCase())) {
            alert('Product already exists!');
        } else {
            setProducts([...products, product]);
        }
    };

    // Remove product handler
    const removeProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index); // Remove product by index
        setProducts(updatedProducts); // Update state
    };

    // Filtered products based on search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home-container">
            {/* Logout button */}
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>

            {/* Add Product Component */}
            <AddProduct addProduct={addProduct} />

            {/* Search Bar Component */}
            <SearchBar setSearchQuery={setSearchQuery} />

            {/* Product List Component */}
            <ProductList products={filteredProducts} removeProduct={removeProduct} />
        </div>
    );
}

export default Home;
