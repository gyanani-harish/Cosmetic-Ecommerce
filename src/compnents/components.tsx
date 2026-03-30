import React from 'react';
import { Product } from '../store/Product';
import './style.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, description, price, rating, image, sizes } = product;
  
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3 className="product-title">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">${price}</div>
        <div className="product-rating">⭐ {rating} / 5</div>
        <div className="product-sizes">
          <span>Sizes: </span>
          {sizes.map((size, i) => (
            <span key={i} className="size-badge">{size}</span>
          ))}
        </div> 
      </div>
    </div>
  );
};
 