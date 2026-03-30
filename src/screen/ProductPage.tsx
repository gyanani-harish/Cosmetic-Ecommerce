import React, { useState, useEffect } from 'react';
import { clothingStore } from '../store/Product';
import { ProductCard } from '../compnents/components';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState(clothingStore.products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get unique categories from products
  const categories = ['all', ...new Set(clothingStore.products.map(product => product.category))];

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(clothingStore.products.map(product => ({
        ...product,
        displayName: product.name.toUpperCase()
      })));
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="product-page">
      
      <header className="page-header">
        <h1>Our Clothing Collection</h1>
        <br/>
        <p>Discover our latest fashion styles</p>
        
        {/* Dropdown Button */}
        <div className="dropdown-container">
          <button 
            className="dropdown-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
            <span className="dropdown-arrow">{isDropdownOpen ? '▲' : '▼'}</span>
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {categories.map(category => (
                <button
                  key={category}
                  className={`dropdown-item ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          )}
        </div>

         
      </header>
      
      <div className="products-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;