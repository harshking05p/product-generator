import React from 'react';
import './ProductList.css';

function ProductList({ products, removeProduct }) {
    if (products.length === 0) {
        return <p className="no-product">No Products Found</p>;
    }

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-item">
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                    <button
                        className="remove-button"
                        onClick={() => removeProduct(index)} // Remove product by index
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
