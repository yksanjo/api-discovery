'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Zap, Shield, Cloud, Database, Mail, Music, Video, Gamepad2, Map, Wallet, Feather, Train, ShoppingBag, Heart, Star, ExternalLink } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All APIs', icon: Compass, count: 2500 },
  { id: 'development', name: 'Development', icon: Zap, count: 320 },
  { id: 'security', name: 'Security', icon: Shield, count: 85 },
  { id: 'cloud', name: 'Cloud', icon: Cloud, count: 120 },
  { id: 'database', name: 'Database', icon: Database, count: 95 },
  { id: 'email', name: 'Email', icon: Mail, count: 45 },
  { id: 'media', name: 'Media', icon: Video, count: 180 },
  { id: 'music', name: 'Music', icon: Music, count: 65 },
  { id: 'gaming', name: 'Gaming', icon: Gamepad2, count: 90 },
  { id: 'maps', name: 'Maps', icon: Map, count: 55 },
  { id: 'finance', name: 'Finance', icon: Wallet, count: 140 },
  { id: 'weather', name: 'Weather', icon: Feather, count: 35 },
  { id: 'transport', name: 'Transport', icon: Train, count: 70 },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingBag, count: 85 },
  { id: 'health', name: 'Health', icon: Heart, count: 110 },
];

const apis = [
  { id: 1, name: 'JSONPlaceholder', description: 'Fake Online REST API for testing', category: 'development', auth: 'None', https: true, rating: 4.8 },
  { id: 2, name: 'Cat Facts', description: 'Random cat facts API', category: 'animals', auth: 'None', https: true, rating: 4.5 },
  { id: 3, name: 'PokeAPI', description: 'RESTful Pokemon API', category: 'gaming', auth: 'None', https: true, rating: 4.9 },
  { id: 4, name: 'OpenWeather', description: 'Weather data API', category: 'weather', auth: 'API Key', https: true, rating: 4.7 },
  { id: 5, name: 'Stripe', description: 'Payment processing API', category: 'finance', auth: 'API Key', https: true, rating: 4.9 },
  { id: 6, name: 'Twilio', description: 'SMS, Voice & Video API', category: 'communications', auth: 'API Key', https: true, rating: 4.6 },
  { id: 7, name: 'Auth0', description: 'Authentication as a service', category: 'security', auth: 'OAuth', https: true, rating: 4.8 },
  { id: 8, name: 'AWS S3', description: 'Cloud storage API', category: 'cloud', auth: 'AWS', https: true, rating: 4.7 },
  { id: 9, name: 'SendGrid', description: 'Email delivery API', category: 'email', auth: 'API Key', https: true, rating: 4.5 },
  { id: 10, name: 'Spotify', description: 'Music streaming API', category: 'music', auth: 'OAuth', https: true, rating: 4.6 },
  { id: 11, name: 'Google Maps', description: 'Maps & location API', category: 'maps', auth: 'API Key', https: true, rating: 4.8 },
  { id: 12, name: 'Stripe Connect', description: 'Marketplace payments', category: 'ecommerce', auth: 'API Key', https: true, rating: 4.7 },
];

export default function APIDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredApis = apis
    .filter(api => selectedCategory === 'all' || api.category === selectedCategory)
    .filter(api => !searchQuery || api.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => sortBy === 'popular' ? b.rating - a.rating : a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Compass className="w-8 h-8 text-blue-400" />
            <h1 className="text-xl font-bold">API Discovery</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Categories */}
        <div className="space-y-4">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex items-center justify-between p-2 rounded text-sm transition-colors ${
                    selectedCategory === cat.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <cat.icon className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-xs opacity-70">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search & Filter */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search APIs..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-3"
            >
              <option value="popular">Most Popular</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* Results Count */}
          <p className="text-slate-400">{filteredApis.length} APIs found</p>

          {/* API Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredApis.map((api, i) => (
              <motion.div
                key={api.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-800 rounded-lg border border-slate-700 p-4 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{api.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{api.rating}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-3">{api.description}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="px-2 py-1 bg-slate-700 rounded">{api.category}</span>
                  <span>{api.auth}</span>
                  {api.https && <span className="text-green-400">🔒 HTTPS</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
