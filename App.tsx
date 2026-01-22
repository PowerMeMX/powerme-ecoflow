import React, { useState, useMemo } from 'react';
import { PRODUCTS, COMPANY_NAME, TAGLINE } from './constants';
import { Product, ProductCategory } from './types';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { Icon } from './components/Icon';

const App: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = useMemo(() => {
    return Object.values(ProductCategory);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    // Filter by Category
    if (selectedCategory !== 'ALL') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Search Term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.tagline.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    }

    return result;
  }, [selectedCategory, searchTerm]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearchOpen(false);
  };

  // Main Catalog View
  const renderCatalog = () => (
    <div className="animate-fade-in-up pb-20">
      {/* Dynamic Header */}
      <header className="relative pt-12 pb-8 px-6 mb-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          
          <div className="flex justify-center mb-6">
              <img 
                src="https://ecoflow.powerme.mx/wp-content/uploads/2025/09/Logo_PowerMe_Negro.webp" 
                alt={COMPANY_NAME}
                className="h-16 md:h-24 object-contain filter invert hue-rotate-180 drop-shadow-[0_0_15px_rgba(0,188,212,0.4)] hover:scale-105 transition-transform duration-500"
              />
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
            {TAGLINE}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toolbar: Expandable Search + Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 px-2">
          
          {/* Search Toggle */}
          <div className={`relative flex items-center transition-all duration-300 ease-out ${isSearchOpen ? 'w-full max-w-[260px]' : 'w-10'}`}>
            {isSearchOpen ? (
               <div className="relative w-full animate-fade-in-up" style={{animationDuration: '0.2s'}}>
                <input
                  autoFocus
                  type="text"
                  className="block w-full pl-4 pr-10 py-2 bg-[#0a0a0a] border border-brand-cyan rounded-full leading-5 text-gray-300 placeholder-gray-600 focus:outline-none shadow-[0_0_15px_rgba(0,188,212,0.2)] text-sm transition-all"
                  placeholder="Buscar producto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-cyan hover:text-white transition-colors"
                >
                   <Icon name="x" className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan hover:bg-black hover:shadow-[0_0_10px_rgba(0,188,212,0.2)] transition-all duration-300"
                aria-label="Buscar"
              >
                <Icon name="search" className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Divider (Hidden on mobile if search expanded to save space, otherwise visible) */}
          <div className="hidden md:block w-px h-6 bg-white/10 mx-1"></div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border backdrop-blur-md ${
                selectedCategory === 'ALL'
                  ? 'bg-brand-cyan text-black border-brand-cyan shadow-[0_0_15px_rgba(0,188,212,0.3)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-brand-cyan/30 hover:text-white'
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border backdrop-blur-md ${
                  selectedCategory === cat
                    ? 'bg-brand-cyan text-black border-brand-cyan shadow-[0_0_15px_rgba(0,188,212,0.3)]'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-brand-cyan/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid - Adjusted for compactness (2 cols mobile, 3 md, 4 lg) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-10">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={setActiveProduct} 
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-gray-400 text-lg">No se encontraron productos.</p>
            {searchTerm && (
              <p className="text-gray-500 text-sm mt-2">Intenta con otros términos o categoría.</p>
            )}
            <button onClick={() => { setSearchTerm(''); setSelectedCategory('ALL'); setIsSearchOpen(false); }} className="mt-4 text-brand-cyan underline">
              Ver todos
            </button>
          </div>
        )}
      </main>

      {/* Reorganized Footer */}
      <footer className="mt-20 border-t border-white/10 bg-[#000000] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Row 1: Logo & Contact Info */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
            
            {/* Left: Identity (Big Logo) */}
            <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
              <img 
                src="https://ecoflow.powerme.mx/wp-content/uploads/2025/09/Logo_PowerMe_Negro.webp" 
                alt={COMPANY_NAME}
                className="h-20 md:h-24 object-contain filter invert hue-rotate-180 drop-shadow-[0_0_15px_rgba(0,188,212,0.4)]"
              />
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col items-center md:items-end gap-3 pt-2">
              <h4 className="text-white font-semibold text-xl tracking-tight">Contacto</h4>
              <div className="text-gray-400 text-base text-center md:text-right space-y-2">
                <p>
                  <span className="text-brand-cyan font-medium block md:inline md:mr-2">WhatsApp:</span>
                  <a href="https://api.whatsapp.com/send?phone=8134047516&text=Hola" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+52 1 81 3404 7516</a>
                </p>
                <p>
                  <span className="text-brand-cyan font-medium block md:inline md:mr-2">Correo:</span>
                  <a href="mailto:contacto@powerme.mx" className="hover:text-white transition-colors">contacto@powerme.mx</a>
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Main Action (Button Below) */}
          <div className="flex justify-center mb-16">
            <a 
              href="https://ecoflow.powerme.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-cyan text-black font-bold text-lg py-4 px-16 rounded hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,188,212,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 w-full md:w-auto text-center"
            >
              Visita nuestra página oficial
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8"></div>

          {/* Row 3: Bottom Bar */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs">
              © 2025 PowerMe Energy. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-6">
              {/* Socials - Simple Clean Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-brand-cyan transition-colors">
                  <Icon name="facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-brand-cyan transition-colors">
                  <Icon name="instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-brand-cyan transition-colors">
                  <Icon name="tiktok" className="w-5 h-5" />
                </a>
              </div>

              {/* Simple Text Up Button */}
              <button 
                onClick={scrollToTop}
                className="text-gray-500 hover:text-white flex items-center gap-1 text-xs font-medium transition-colors ml-4 pl-4 border-l border-white/10"
              >
                Subir <Icon name="chevron-up" className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );

  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-cyan selection:text-black overflow-x-hidden">
      {activeProduct ? (
        <ProductDetail 
          product={activeProduct} 
          onBack={() => setActiveProduct(null)} 
        />
      ) : (
        renderCatalog()
      )}
    </div>
  );
};

export default App;