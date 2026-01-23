import React from 'react';
import { Product } from '../types';
import { Icon } from './Icon';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="min-h-screen bg-black animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-cyan hover:text-white mb-8 transition-colors"
        >
          <Icon name="arrow-left" className="w-5 h-5" />
          <span>Volver al catálogo</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>

          <div>
            <span className="inline-block px-4 py-1 bg-brand-cyan/20 text-brand-cyan rounded-full text-xs font-bold mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-400 mb-6">{product.tagline}</p>
            <p className="text-gray-300 mb-8 leading-relaxed">{product.description}</p>

            {product.specs && product.specs.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Especificaciones</h2>
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-3">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
