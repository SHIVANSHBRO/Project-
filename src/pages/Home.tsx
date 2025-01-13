import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (category: string) => {
    navigate('/shop', { state: { category } });
  };

  const heroImages = [
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1200',
  ];

  const categories = [
    {
      title: 'Sofa Sets',
      image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=600',
      description: 'Luxurious comfort meets timeless design',
    },
    {
      title: 'Dining Tables',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600',
      description: 'Elegant dining experiences for your home',
    },
    {
      title: 'Vintage Furniture',
      image: 'https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80&w=600',
      description: 'Classic pieces with historical charm',
    },
  ];

  const testimonials = [
    {
      text: "I liked the design and was very good quality",
      author: "Suboor"
    },
    {
      text: "Beautiful designs at reasonable prices! Customer service was very helpful in addressing my questions. Very satisfied!",
      author: "Pratham"
    },
    {
      text: "Great selection and excellent quality! The website is easy to navigate, and the products exceeded my expectations. Highly recommend!",
      author: "Saif"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[0]}
            alt="Luxury Furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Timeless Elegance for Your Home
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover our collection of handcrafted vintage furniture
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center px-8 py-3 bg-amber-700 hover:bg-amber-600 transition-colors rounded-md text-white font-semibold"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-amber-900">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => handleCategoryClick(category.title)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-amber-900">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-amber-900">- {testimonial.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;