import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

const products = [
  {
    id: "1",
    title: "Ergonomic Office Chair",
    description: "High-back mesh chair with lumbar support",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    source: "https://example.com/chair",
    sourceName: "Office Depot",
  },
  {
    id: "2",
    title: "Standing Desk",
    description: "Electric height adjustable desk",
    price: 299.99,
    image: "/placeholder.svg?height=400&width=400",
    source: "https://example.com/desk",
    sourceName: "IKEA",
  },
]


export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl
                 transition-shadow duration-300 flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        {product.price && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full
                         text-sm font-semibold shadow-md">
            {product.price}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 flex-grow">
          {product.description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            From {product.source.name}
          </span>
          <motion.a
            href={product.source.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700
                     dark:hover:text-blue-300 font-medium"
          >
            View Product
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}