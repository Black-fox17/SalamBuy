import React from 'react';
import { Search } from 'lucide-react';
import { motion,AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export function SearchInput({ value, onChange, onSubmit, isLoading }: SearchInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="relative gap-2 flex">
        <motion.div 
          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          animate={isLoading ? { rotate: 360 } : {}}
          transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
        >
          <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
        </motion.div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Describe what you're looking for... (e.g., 'comfortable running shoes for marathon training')"
          className="block w-full pl-10 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent
                   transition-colors duration-200"
        />
        <Button type="submit" className="h-12 px-5 mt-1 " disabled={isLoading}>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              </motion.div>
            ) : (
              <motion.div
                key="search"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </form>
  );
}