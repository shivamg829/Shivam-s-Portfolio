import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes, FaSearch, FaDownload,
  FaFolderOpen, FaFilePdf, FaTag, FaGraduationCap, FaCloud
} from 'react-icons/fa'
import {
  SiMicrosoft, SiOpenai, SiAmazonaws, SiDatabricks,
  SiLaravel, SiCplusplus
} from 'react-icons/si'
import { certificates } from '../data/certificates'

const issuerIcon = (issuer) => {
  const map = {
    'Microsoft':           <SiMicrosoft size={32} className="text-[#00a4ef]" />,
    'OpenAI':              <SiOpenai size={32} className="text-white" />,
    'Cloud Platform':      <SiAmazonaws size={32} className="text-[#FF9900]" />,
    'Databricks':          <SiDatabricks size={32} className="text-[#FF3621]" />,
    'Laravel Community':   <SiLaravel size={32} className="text-[#FF2D20]" />,
    'Certification Body':  <SiCplusplus size={32} className="text-[#659ad2]" />,
  }
  return map[issuer] || <FaFilePdf size={32} className="text-sky-500/40" />
}

const categoryColors = {
  'AI & Machine Learning': 'sky',
  'Cloud Computing':       'blue',
  'Computer Science':      'violet',
  'Big Data':              'amber',
  'Professional':          'rose',
  'Web Development':       'emerald',
  'Programming':           'cyan',
  'General':               'slate',
}

const Tag = ({ color = 'slate', children }) => (
  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide
    bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>
    {children}
  </span>
)

const Certificates = () => {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter]     = useState('All')
  const [search, setSearch]     = useState('')

  const categories = ['All', ...new Set(certificates.map(c => c.category))]

  const filtered = certificates.filter(c => {
    const matchCat = filter === 'All' || c.category === filter
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                        c.issuer.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="p-6 font-mono h-full flex flex-col w-full text-[#c9d1d9] overflow-auto custom-scrollbar">

      <div className="mb-5 pb-5 border-b border-[#21262d]">
        <div className="text-[10px] text-[#484f58] uppercase tracking-[0.3em] mb-1">certificates.jsx</div>
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <FaFolderOpen className="text-sky-400" /> Verified Credentials
          <span className="text-sky-400 text-sm font-bold">({certificates.length})</span>
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-5 shrink-0">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#484f58]" size={12} />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8 pr-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-xs text-[#c9d1d9] placeholder:text-[#484f58] focus:outline-none focus:border-sky-500/50 w-52 transition-all"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all ${
                filter === cat
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:text-white'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1 overflow-auto custom-scrollbar pr-1">
        {filtered.map((cert, idx) => (
          <motion.div
            key={cert.id}
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            whileHover={{ y: -4 }}
            className="bg-[#161b22] rounded-xl border border-[#30363d] hover:border-sky-500/30 transition-all cursor-pointer group flex flex-col overflow-hidden"
            onClick={() => setSelected(cert)}
          >
            <div className="h-24 bg-[#0d1117] flex items-center justify-center relative overflow-hidden border-b border-[#30363d]">
              <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/5 transition-colors" />
              <FaFilePdf size={36} className="text-[#30363d] group-hover:text-sky-500/40 transition-colors" />
              <span className="absolute top-2 right-2 text-[9px] font-bold text-[#484f58] uppercase">PDF</span>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h4 className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug">
                {cert.title}
              </h4>
              <div className="text-[10px] text-[#8b949e]">{cert.issuer} · {cert.date}</div>
              <div className="flex flex-wrap gap-1 mt-auto pt-2">
                <Tag color={categoryColors[cert.category] || 'slate'}>{cert.category}</Tag>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelected(null)} />

            <motion.div
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <div className="h-48 bg-[#0d1117] flex items-center justify-center border-b border-[#30363d] relative">
                <FaFilePdf size={64} className="text-sky-500/20" />
                <span className="absolute top-3 right-3 text-[10px] font-bold text-[#484f58] uppercase bg-[#161b22] px-2 py-0.5 rounded border border-[#30363d]">PDF</span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-black text-white leading-snug mb-1">{selected.title}</h3>
                    <p className="text-xs text-[#8b949e]">{selected.issuer} · {selected.date}</p>
                  </div>
                  <button onClick={() => setSelected(null)}
                    className="p-2 bg-[#0d1117] rounded-lg text-[#8b949e] hover:text-white border border-[#30363d] transition-all shrink-0 ml-3">
                    <FaTimes />
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag color={categoryColors[selected.category] || 'slate'}>
                    <FaTag className="inline mr-1" size={8} />{selected.category}
                  </Tag>
                  {selected.skills.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded text-[10px] font-bold text-[#8b949e] bg-[#0d1117] border border-[#30363d]">{s}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={selected.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-sky-500/20 hover:border-sky-400 transition-all flex items-center justify-center gap-2"
                  >
                    <FaFilePdf /> View PDF
                  </a>
                  <a
                    href={selected.pdfUrl}
                    download={selected.fileName}
                    className="flex-1 py-2.5 bg-[#0d1117] text-[#c9d1d9] border border-[#30363d] rounded-lg text-xs font-black uppercase tracking-widest hover:border-sky-500/30 hover:text-sky-400 transition-all flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Certificates
