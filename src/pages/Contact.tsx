import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        reset();
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-amber-50 min-h-screen py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-serif font-bold text-amber-900 mb-8">Contact Us</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                {...register('fullName', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
              {errors.fullName && <span className="text-red-500 text-sm">Full name is required</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
              {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
              {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Product Category</label>
              <select
                id="category"
                {...register('category', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              >
                <option value="">Select a category</option>
                <option value="Sofa Sets">Sofa Sets</option>
                <option value="Dining Tables">Dining Tables</option>
                <option value="Vintage Furniture">Vintage Furniture</option>
              </select>
              {errors.category && <span className="text-red-500 text-sm">Please select a category</span>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
              {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-amber-700" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+919634104789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-amber-700" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>orientalfurnishingworks@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-amber-700" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Near Seema PS Multiplex Nai Basti Aligarh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;