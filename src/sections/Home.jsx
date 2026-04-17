import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaGithub, FaTerminal, FaCode, FaRocket, FaChevronRight,
  FaProjectDiagram, FaTrophy, FaLaptopCode, FaDownload, FaUser
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import shivamImg from '../assets/Shivam.jpg'
import cvFile from '../assets/SHIVAM_CV.pdf'

const Home = () => {
  const stats = [
    { number: '300+', label: 'DSA Problems', icon: FaTrophy, accent: '#60a5fa' },
    { number: '5+', label: 'Live Projects', icon: FaProjectDiagram, accent: '#60a5fa' },
    { number: '12+', label: 'Technologies', icon: FaLaptopCode, accent: '#60a5fa' },
    { number: '6+', label: 'Certificate', icon: FaCode, accent: '#60a5fa' },
  ]

  const quickLinks = [
    { label: 'GitHub', link: '/github', icon: FaGithub },
    { label: 'LeetCode', link: '/leetcode', icon: SiLeetcode },
    { label: 'Projects', link: '/projects', icon: FaRocket },
    { label: 'Contact', link: '/contact', icon: FaTerminal },
  ]

  return (
    <div className="p-6 font-mono h-full flex flex-col w-full text-[#c9d1d9]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-8 items-start mb-10 pb-8 border-b border-[#21262d]"
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-sky-500/10 blur-3xl rounded-full" />
          <div className="w-36 h-36 rounded-2xl border border-[#30363d] p-1.5 relative z-10 overflow-hidden bg-[#161b22]">
            <img src={shivamImg} alt="Shivam" className="w-full h-full object-cover rounded-xl transition-all duration-700" />
          </div>
          <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-sky-400 rounded-full border-2 border-[#0d1117] animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.6)]" />
        </div>

        <div className="flex-1 space-y-3 pt-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-sky-500/10 text-sky-400 text-[10px] font-bold rounded border border-sky-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Shivam <span className="text-sky-400">Gangwar</span>
          </h1>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-md bg-[#161b22] border border-[#30363d] text-[11px] text-[#8b949e] flex items-center gap-1.5">
              <FaCode className="text-sky-400" /> Full-Stack Dev
            </span>
            <span className="px-3 py-1 rounded-md bg-[#161b22] border border-[#30363d] text-[11px] text-[#8b949e] flex items-center gap-1.5">
              <FaLaptopCode className="text-sky-400" /> DSA Enthusiast
            </span>
            <span className="px-3 py-1 rounded-md bg-[#161b22] border border-[#30363d] text-[11px] text-[#8b949e] flex items-center gap-1.5">
              <FaUser className="text-sky-400" /> LPU Scholar
            </span>
          </div>

          <div className="pt-1">
            <a
              href={cvFile}
              download="SHIVAM_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/10 text-sky-400 border border-sky-500/40 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-sky-500/20 hover:border-sky-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(56,189,248,0.1)]"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      </motion.div>
      <div className="grid lg:grid-cols-3 gap-6 flex-1 overflow-auto custom-scrollbar pr-1">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#161b22] rounded-xl border border-[#30363d] p-6">
            <div className="text-[10px] text-[#8b949e] uppercase tracking-[0.3em] font-black mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-[#30363d]" /> stats.json
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-4 bg-[#0d1117] rounded-lg border border-[#21262d] hover:border-sky-500/30 transition-all group cursor-default"
                >
                  <item.icon className="text-sky-400 mb-2 group-hover:scale-110 transition-transform" size={18} />
                  <div className="text-xl font-black text-white tracking-tight">{item.number}</div>
                  <div className="text-[10px] text-[#8b949e] uppercase tracking-wider leading-tight">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-[#161b22] rounded-xl border border-[#30363d] p-6 relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-sky-500/5 blur-3xl group-hover:bg-sky-500/10 transition-colors" />
            <div className="text-[10px] text-[#8b949e] uppercase tracking-[0.3em] font-black mb-4 flex items-center gap-2">
              <span className="text-sky-400">#</span> readme.md
            </div>
            <p className="text-sm text-[#c9d1d9]/75 leading-relaxed font-sans">
              I specialize in crafting high-performance digital ecosystems that bridge the gap between 
              creative vision and technical precision. Currently engineering scalable solutions and 
              competitive algorithms at <span className="text-sky-400 font-semibold">Lovely Professional University</span>.
            </p>
            <div className="flex gap-4 pt-5">
              <Link to="/about" className="flex items-center gap-1.5 text-[10px] font-black text-sky-400 uppercase tracking-widest hover:text-white transition-colors group/lnk">
                View Profile <FaChevronRight size={8} className="group-hover/lnk:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="flex items-center gap-1.5 text-[10px] font-black text-[#8b949e] uppercase tracking-widest hover:text-sky-400 transition-colors group/lnk">
                Source Code <FaChevronRight size={8} className="group-hover/lnk:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-[#161b22] rounded-xl border border-[#30363d] p-5 flex flex-col gap-3">
            <div className="text-[10px] text-[#8b949e] uppercase tracking-[0.3em] font-black mb-1">Quick Access</div>
            {quickLinks.map((item) => (
              <motion.div key={item.label} whileHover={{ x: 4 }} className="relative group">
                <Link
                  to={item.link}
                  className="flex justify-between items-center p-3 bg-[#0d1117] rounded-lg border border-[#21262d] hover:border-sky-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="text-sky-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-[#8b949e] group-hover:text-white tracking-widest transition-colors uppercase">{item.label}</span>
                  </div>
                  <FaChevronRight className="text-[#30363d] group-hover:text-sky-400 transition-colors" size={10} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="bg-[#0d1117] rounded-xl border border-dashed border-[#30363d] p-5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            <div className="font-mono text-[11px] space-y-1.5">
              <div className="flex gap-2">
                <span className="text-sky-400 font-bold">visitor@shivam:~$</span>
                <span className="text-[#8b949e]">./init.sh</span>
              </div>
              <div className="text-[#8b949e]/60 animate-pulse pl-2">Establishing connection...</div>
              <div className="text-white/70 pl-2">[OK] Session ready.</div>
              <div className="text-sky-400/80 pl-2">Welcome. Let's build something great.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-[#21262d] flex justify-between items-center text-[10px] text-[#484f58] font-bold uppercase tracking-widest">
        <span>Build: portfolio-v2.1.0</span>
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Live</span>
          <span>LPU · India</span>
        </div>
      </div>
    </div>
  )
}
export default Home