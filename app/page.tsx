'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Star, Shield, Zap, ExternalLink } from 'lucide-react'

const apis = [
  { name: 'JSONPlaceholder', desc: 'Fake REST API for testing', cat: 'Development', auth: 'None', rate: 'Unlimited', https: true, rating: 4.8 },
  { name: 'Cat Facts', desc: 'Random cat facts', cat: 'Animals', auth: 'Api Key', rate: '500/day', https: true, rating: 4.5 },
  { name: 'PokeAPI', desc: 'Pokemon data API', cat: 'Gaming', auth: 'None', rate: 'Unlimited', https: true, rating: 4.9 },
  { name: 'Rick and Morty', desc: 'Character & episode data', cat: 'Entertainment', auth: 'None', rate: 'Unlimited', https: true, rating: 4.6 },
  { name: 'CoinGecko', desc: 'Crypto prices', cat: 'Finance', auth: 'None', rate: '10-50/min', https: true, rating: 4.7 },
  { name: 'SpaceX', desc: 'SpaceX launch data', cat: 'Science', auth: 'None', rate: 'Unlimited', https: true, rating: 4.8 },
  { name: 'Dog CEO', desc: 'Random dog images', cat: 'Animals', auth: 'None', rate: 'Unlimited', https: true, rating: 4.4 },
  { name: 'Open Trivia', desc: 'Trivia questions', cat: 'Education', auth: 'None', rate: 'Unlimited', https: true, rating: 4.3 },
  { name: 'Numbers API', desc: 'Number facts', cat: 'Science', auth: 'None', rate: '100/hour', https: false, rating: 4.2 },
  { name: 'Zippopotam.us', desc: 'Zip code data', cat: 'Geocoding', auth: 'None', rate: 'Unlimited', https: true, rating: 4.1 },
  { name: 'Brewery DB', desc: 'Beer breweries', cat: 'Food', auth: 'None', rate: 'Unlimited', https: true, rating: 4.3 },
  { name: 'Random User', desc: 'Fake user data', cat: 'Testing', auth: 'None', rate: '1000/day', https: true, rating: 4.6 },
]

const categories = ['All', 'Development', 'Animals', 'Gaming', 'Entertainment', 'Finance', 'Science', 'Food', 'Testing', 'Geocoding', 'Education']

export default function Home() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = apis.filter(a => {
    const mS = !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase())
    const mC = cat === 'All' || a.cat === cat
    return mS && mC
  })

  return (
    <div className="min-h-screen bg-bg-primary">
      <header className="border-b border-border bg-bg-secondary/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold font-mono"><span className="text-accent-primary">API</span> Discovery</h1>
          <a href="https://github.com" className="text-text-muted hover:text-accent-primary text-sm">GitHub</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Discover Free <span className="text-accent-primary">APIs</span></h2>
          <p className="text-text-secondary mb-8">Browse curated free APIs for your projects</p>
          
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search APIs..."
              className="w-full bg-bg-secondary border border-border rounded-2xl pl-12 pr-4 py-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary" />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm transition ${cat === c ? 'bg-accent-primary text-bg-primary' : 'bg-bg-tertiary text-text-secondary hover:border-accent-primary border border-border'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((api, i) => (
            <motion.div key={api.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-bg-tertiary border border-border rounded-xl p-5 hover:border-accent-primary transition group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-bg-hover flex items-center justify-center text-accent-primary font-bold">
                  {api.name.charAt(0)}
                </div>
                <span className="px-2 py-1 bg-accent-primary/10 text-accent-primary rounded text-xs">{api.cat}</span>
              </div>
              <h3 className="font-semibold mb-1">{api.name}</h3>
              <p className="text-text-muted text-sm mb-4">{api.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="flex items-center gap-1 text-xs text-text-muted"><Shield className="w-3 h-3" />{api.auth}</span>
                <span className="flex items-center gap-1 text-xs text-accent-warning"><Zap className="w-3 h-3" />{api.rate}</span>
                {api.https && <span className="text-xs text-green-400">HTTPS</span>}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="text-sm">{api.rating}</span></div>
                <button className="text-accent-primary text-sm flex items-center gap-1 group-hover:underline">Visit <ExternalLink className="w-3 h-3" /></button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-muted">No APIs found</div>
        )}
      </main>
    </div>
  )
}
