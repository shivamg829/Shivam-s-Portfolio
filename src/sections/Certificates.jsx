import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes, FaSearch, FaDownload,
  FaFolderOpen, FaFilePdf, FaTag
} from 'react-icons/fa'
import {
  SiMicrosoft, SiOpenai, SiAmazonaws, SiDatabricks,
  SiLaravel, SiCplusplus
} from 'react-icons/si'
import { certificates } from '../data/certificates'

const issuerIcon = (issuer) => {
  const map = {
    'Microsoft': <SiMicrosoft size={32} className="text-[#00a4ef]" />,
    'OpenAI': <SiOpenai size={32} className="text-white" />,
    'Cloud Platform': <SiAmazonaws size={32} className="text-[#FF9900]" />,
    'Databricks': <SiDatabricks size={32} className="text-[#FF3621]" />,
    'Laravel Community': <SiLaravel size={32} className="text-[#FF2D20]" />,
    'Certification Body': <SiCplusplus size={32} className="text-[#659ad2]" />,
  }
  return map[issuer] || <FaFilePdf size={32} className="text-sky-500/40" />
}

/* ✅ FIXED Tailwind safe colors */
const tagStyles = {
  sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  slate: "bg-slate-500/10 text-slate-400 border-slate-500/20",
}

const categoryColors = {
  'AI & Machine Learning': 'sky',
  'Cloud Computing': 'blue',
  'Computer Science': 'violet',
  'Big Data': 'amber',
  'Professional': 'rose',
  'Web Development': 'emerald',
  'Programming': 'cyan',
  'General': 'slate',
}

const Tag = ({ color = 'slate', children }) => (
  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${tagStyles[color]}`}>
    {children}
  </span>
)

const Certificates = () => {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const categories = ['All', ...new Set(certificates.map(c => c.category))]

  const filtered = certificates.filter(c => {
    const matchCat = filter === 'All' || c.category === filter
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.issuer.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="p-6 font-mono h-full flex flex-col w-full text-[#c9d1d9] overflow-auto">

      {/* Header */}
      <div className="mb-6 pb-5 border-b border-[#21262d]">
        <div className="text-[10px] text-[#484f58] uppercase tracking-[0.3em] mb-1">
          certificates.jsx
        </div>
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <FaFolderOpen className="text-sky-400" />
          Verified Credentials
          <span className="text-sky-400 text-sm">({certificates.length})</span>
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#484f58]" size={12} />
          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 pr-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-xs w-56 focus:border-sky-500/50"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                filter === cat
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(cert)}
            className="group bg-[#161b22] rounded-xl border border-[#30363d] hover:border-sky-500/40 cursor-pointer overflow-hidden relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-sky-500/10 to-transparent" />

            <div className="h-24 flex items-center justify-center border-b border-[#30363d]">
              {issuerIcon(cert.issuer)}
            </div>

            <div className="p-4 space-y-2">
              <h4 className="text-xs font-bold text-white group-hover:text-sky-400 line-clamp-2">
                {cert.title}
              </h4>

              <div className="text-[10px] text-[#8b949e]">
                {cert.issuer} · {cert.date}
              </div>

              <Tag color={categoryColors[cert.category]}>
                {cert.category}
              </Tag>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative bg-[#161b22] border border-[#30363d] rounded-2xl w-full max-w-lg p-6 z-10"
            >
              <div className="flex justify-between mb-4">
                <h3 className="text-white font-bold">{selected.title}</h3>
                <button onClick={() => setSelected(null)}>
                  <FaTimes />
                </button>
              </div>

              <p className="text-sm text-[#8b949e] mb-4">
                {selected.issuer} · {selected.date}
              </p>

              <div className="flex gap-2 mb-4 flex-wrap">
                <Tag color={categoryColors[selected.category]}>
                  {selected.category}
                </Tag>
                {selected.skills.map(s => (
                  <span key={s} className="text-xs px-2 py-1 bg-[#0d1117] rounded border border-[#30363d]">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={selected.pdfUrl}
                  target="_blank"
                  className="flex-1 text-center py-2 bg-sky-500/20 text-sky-400 rounded-lg"
                >
                  View
                </a>
                <a
                  href={selected.pdfUrl}
                  download
                  className="flex-1 text-center py-2 bg-[#0d1117] border border-[#30363d] rounded-lg"
                >
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Certificates