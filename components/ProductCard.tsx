import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={() => onClick(product)}
      className="group cursor-pointer bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(0,188,212,0.15)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square bg-black/40 flex items-center justify-center p-4 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-2">{product.category}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{product.tagline}</p>
      </div>
    </div>
  );
};
