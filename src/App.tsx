import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { SearchInput } from './components/SearchInput';
import { ProductCard } from './components/ProductCard';
import { ThemeToggle } from './components/ThemeToggle';
import { Product } from './types';

// Mock data - replace with actual API call
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Nike Air Zoom Pegasus 38',
    description: 'Premium running shoes with responsive cushioning and breathable mesh upper, perfect for marathon training.',
    price: '$120',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    source: {
      name: 'Nike',
      url: 'https://nike.com'
    }
  },
  {
    id: '2',
    title: 'Adidas Ultraboost 21',
    description: 'High-performance running shoes with energy-returning boost technology and Primeknit+ upper.',
    price: '$180',
    imageUrl: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    source: {
      name: 'Adidas',
      url: 'https://adidas.com'
    }
  }
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Apply dark mode class to html element
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleSearch = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setProducts(mockProducts);
    setIsLoading(false);
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-stone-950 transition-colors duration-200`}>
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* <ShoppingBag className="h-10 w-10 text-blue-600 dark:text-blue-400" /> */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              AI Shopping Assistant
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Describe what you're looking for, and let our AI help you find the perfect products
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            onSubmit={handleSearch}
            isLoading={isLoading}
          />
        </div>

        <AnimatePresence>
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-12"
            >
              <div className="text-center text-gray-600 dark:text-gray-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <ShoppingBag className="h-12 w-12 mb-4" />
                </motion.div>
                <p>Finding the best products for you...</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;