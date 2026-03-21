import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaLayerGroup, FaTools } from 'react-icons/fa'

const Skills = () => {
  const stack = [
    {
      category: "frontend_architecture",
      icon: <FaLayerGroup className="text-indigo-400" />,
      items: ["React.js", "Next.js", "TailwindCSS", "Framer Motion", "Redux"],
      accent: "blue"
    },
    {
      category: "backend_systems",
      icon: <FaDatabase className="text-emerald-500" />,
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
      accent: "emerald"
    },
    {
      category: "languages",
      icon: <FaCode className="text-purple-500" />,
      items: ["JavaScript (ES6+)", "TypeScript", "C++", "Python", "Java"],
      accent: "purple"
    },
    {
      category: "devops_tools",
      icon: <FaTools className="text-orange-500" />,
      items: ["Git/GitHub", "Docker", "AWS", "Vercel", "Netlify"],
      accent: "orange"
    }
  ]

  return (
    <div className="p-8 font-mono h-full flex flex-col">
      <div className="mb-12 border-b border-slate-800 pb-8 flex flex-col items-center text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px]" />
         <div className="text-slate-500 text-[10px] mb-2 uppercase tracking-[0.3em]">Data / Configuration</div>
         <h2 className="text-2xl font-black text-white tracking-tighter flex items-center justify-center gap-3">
            <span className="text-indigo-500">{"{"}</span>
            stack.json
            <span className="text-indigo-500">{"}"}</span>
         </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 overflow-auto custom-scrollbar pr-2">
         {[
           {
             category: "frontend_architecture",
             icon: <FaLayerGroup className="text-cyan-400" />,
             items: ["React.js", "Next.js", "TailwindCSS", "Framer Motion", "Redux"],
             accent: "cyan"
           },
           {
             category: "backend_systems",
             icon: <FaDatabase className="text-indigo-400" />,
             items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
             accent: "indigo"
           },
           {
             category: "languages",
             icon: <FaCode className="text-purple-400" />,
             items: ["JavaScript (ES6+)", "TypeScript", "C++", "Python", "Java"],
             accent: "purple"
           },
           {
             category: "devops_tools",
             icon: <FaTools className="text-emerald-400" />,
             items: ["Git/GitHub", "Docker", "AWS", "Vercel", "Netlify"],
             accent: "emerald"
           }
         ].map((group, idx) => (
           <motion.div 
             key={group.category}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: idx * 0.1 }}
             className="glass-card p-8 border-slate-800/50 relative group overflow-hidden"
           >
              <div className={`absolute -inset-1 bg-gradient-to-br from-${group.accent}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none`} />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="p-3 bg-slate-900/80 rounded-xl group-hover:scale-110 transition-transform duration-500 border border-slate-800">
                    {group.icon}
                 </div>
                 <h3 className="text-sm font-black text-white uppercase tracking-widest">
                    <span className="text-purple-400">"</span>{group.category}<span className="text-purple-400">"</span>
                 </h3>
              </div>

              <div className="space-y-4 relative z-10">
                 <div className="text-[10px] text-slate-500 flex items-center gap-2">
                    <span className="w-4 h-px bg-slate-800" /> <span className="text-indigo-400">modules_array</span>
                 </div>
                 <div className="flex flex-wrap gap-2 pl-4 border-l border-slate-800/50 ml-2 py-2">
                    {group.items.map((item, i) => (
                      <span 
                        key={item}
                        className={`px-3 py-1.5 bg-slate-900/50 text-[10px] font-bold rounded-md border border-slate-800 hover:border-indigo-500/50 transition-all text-slate-300 hover:text-white group/item`}
                      >
                         <span className="text-emerald-400 group-hover/item:text-cyan-400 transition-colors">"</span>{item}<span className="text-emerald-400 group-hover/item:text-cyan-400 transition-colors">"</span>{i < group.items.length - 1 ? <span className="text-slate-500">,</span> : ""}
                      </span>
                    ))}
                 </div>
              </div>

              {/* Decorative JSON bracket */}
              <div className="absolute top-4 right-6 text-slate-900 font-black text-6xl select-none opacity-20 pointer-events-none">
                 {idx % 2 === 0 ? "]" : "}"}
              </div>
           </motion.div>
         ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-600 font-black uppercase tracking-widest relative">
         <div className="absolute -top-1 left-0 w-32 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
         <span>Total Modules: 20</span>
         <span className="text-indigo-500/50">Checksum: 0x82A1B...</span>
      </div>
    </div>
  )
}

export default Skills