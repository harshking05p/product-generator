import React, { useState } from 'react';
import './AddProduct.css';

function AddProduct({ addProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAdd = () => {
        if (name && price) {
            addProduct({ name, price });
            setName('');
            setPrice('');
        } else {
            alert('Please fill all fields');
        }
    };

    return (
        <div className="add-product">
            <h2>Add Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="product-input"
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="product-input"
            />
            <button onClick={handleAdd} className="add-button">
                Add
            </button>
        </div>
    );
}

export default AddProduct;
