import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFolder, FaCodeBranch, FaStar } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Dayline_Social",
      category: "Full Stack / Ecosystem",
      description: "A transformative social platform centered on daily reflections and meaningful human connections through media-rich storytelling.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      stats: { stars: 124, forks: 42 },
      accent: "blue"
    },
    {
      id: "02",
      title: "Airbnb_Lite",
      category: "Marketplace / OS",
      description: "A high-performance vacation rental engine with real-time booking, interactive maps, and a seamless host orchestration dashboard.",
      tags: ["React", "Express.js", "PostgreSQL", "Stripe"],
      stats: { stars: 89, forks: 12 },
      accent: "purple"
    },
    {
      id: "03",
      title: "Cogni_Sync",
      category: "AI / Productivity",
      description: "An AI-powered task management system that predicts workflow bottlenecks and automates routine administrative cycles.",
      tags: ["Next.js", "Python", "OpenAI", "Redis"],
      stats: { stars: 215, forks: 67 },
      accent: "emerald"
    }
  ]

  return (
    <div className="p-8 font-mono h-full flex flex-col">
      <div className="mb-12 border-b border-slate-800 pb-10 flex flex-col items-center text-center gap-4">
         <div className="space-y-1">
            <div className="text-slate-500 text-[10px] mb-1 uppercase tracking-[0.2em]">Source / Components</div>
            <h2 className="text-2xl font-black text-white tracking-tighter flex items-center justify-center gap-3">
               <FaFolder className="text-indigo-400 font-bold" />
               projects.jsx
            </h2>
         </div>
         <div className="flex gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <span>Branch: <span className="text-emerald-500">main</span></span>
            <span>Status: <span className="text-cyan-400 font-bold">deployed</span></span>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1 overflow-auto custom-scrollbar pr-2 pt-4">
         {projects.map((project, idx) => (
           <motion.div 
             key={project.id}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: idx * 0.1 }}
             className="glass-card group flex flex-col h-[420px] border-slate-800/50 hover:border-indigo-500/50 transition-all relative overflow-hidden shimmer-hover"
             whileHover={{ scale: 1.02, y: -5 }}
           >
              {/* Project Header */}
              <div className="p-8 border-b border-slate-800/50 flex justify-between items-start shrink-0 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                 <div className="relative z-10">
                    <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                       <span className="w-4 h-px bg-cyan-400/30" /> Build_{project.id}
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-indigo-400 transition-colors">
                       {project.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 italic tracking-widest">{project.category}</p>
                 </div>
                 <div className="flex gap-3 relative z-10">
                    <motion.a whileHover={{ y: -2, scale: 1.05 }} href="#" className="p-3 bg-slate-900/80 rounded-xl text-slate-400 hover:text-white transition-colors border border-slate-800 hover:border-indigo-500/30">
                       <FaGithub />
                    </motion.a>
                    <motion.a whileHover={{ y: -2, scale: 1.05 }} href="#" className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl text-white shadow-lg shadow-indigo-500/30">
                       <FaExternalLinkAlt />
                    </motion.a>
                 </div>
              </div>

              {/* Project Body */}
              <div className="p-8 flex-1 flex flex-col justify-between relative">
                 <p className="text-xs text-slate-400 leading-relaxed font-sans italic line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.description}
                 </p>
                 
                 <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="px-2 py-1 bg-indigo-500/5 text-[9px] font-black text-indigo-300 border border-indigo-500/10 rounded uppercase tracking-tighter hover:bg-indigo-500/10 transition-colors">
                            {tag}
                         </span>
                       ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-slate-800/30">
                       <div className="flex items-center gap-2 text-[10px] text-slate-500 group-hover:text-amber-400/80 transition-colors">
                          <FaStar size={10} />
                          <span className="font-black">{project.stats.stars}</span>
                       </div>
                       <div className="flex items-center gap-2 text-[10px] text-slate-500 group-hover:text-indigo-400/80 transition-colors">
                          <FaCodeBranch size={10} />
                          <span className="font-black">{project.stats.forks}</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className={`absolute bottom-0 right-0 w-32 h-32 bg-indigo-500 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
           </motion.div>
         ))}
      </div>
    </div>
  )
}

export default Projects