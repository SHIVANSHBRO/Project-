import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Phone } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const products = [
  // Sofa Sets
  {
    id: 1,
    name: 'Vintage Leather Sofa',
    category: 'Sofa Sets',
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Modern L-Shaped Sofa',
    category: 'Sofa Sets',
    image: 'https://images.pexels.com/photos/4320378/pexels-photo-4320378.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Classic Chesterfield Sofa',
    category: 'Sofa Sets',
    image: 'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    name: 'Marble Top Dining Table',
    category: 'Dining Tables',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    name: 'Extended Family Dining Set',
    category: 'Dining Tables',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    name: 'Modern Glass Dining Table',
    category: 'Dining Tables',
    image: 'https://images.pexels.com/photos/15667607/pexels-photo-15667607.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    name: 'Retro Display Cabinet',
    category: 'Vintage Furniture',
    image: 'https://images.pexels.com/photos/4095400/pexels-photo-4095400.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    name: 'Antique Wooden Wardrobe',
    category: 'Vintage Furniture',
    image: 'https://images.unsplash.com/photo-1595428773960-5bea2830b067?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 9,
    name: 'Classic Writing Desk',
    category: 'Vintage Furniture',
    image: 'https://images.pexels.com/photos/10496224/pexels-photo-10496224.jpeg?auto=compress&cs=tinysrgb&w=600',
  }
];

const categories = ['All', 'Sofa Sets', 'Dining Tables', 'Vintage Furniture'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-amber-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-amber-900 mb-4 md:mb-0">
            Our Collection
          </h1>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 md:hidden bg-amber-700 text-white px-4 py-2 rounded"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      selectedCategory === category
                        ? 'bg-amber-100 text-amber-900'
                        : 'hover:bg-amber-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">{product.name}</h3>
                    <Link to="/contact" className="w-full flex items-center justify-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors">
                      <Phone className="h-5 w-5" />
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;