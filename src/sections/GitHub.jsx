import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaCircle, FaTerminal, FaCode } from 'react-icons/fa'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const GitHub = () => {
  const stats = [
    { label: "Total Stars", value: "1.2k", icon: FaStar, color: "text-yellow-400" },
    { label: "Repositories", value: "48", icon: FaCode, color: "text-blue-400" },
    { label: "Pull Requests", value: "320", icon: FaCodeBranch, color: "text-purple-400" },
    { label: "Contributions", value: "1.8k+", icon: FaCircle, color: "text-emerald-400" },
  ]

  const languages = [
    { name: "JavaScript", percentage: 45, color: "#f7df1e" },
    { name: "TypeScript", percentage: 25, color: "#3178c6" },
    { name: "React", percentage: 15, color: "#61dafb" },
    { name: "Python", percentage: 10, color: "#3776ab" },
    { name: "Other", percentage: 5, color: "#6e7681" },
  ]

  const repos = [
    { name: "antigravity-engine", desc: "High-performance physics engine for web-based aerospace simulations.", stars: 420, forks: 86, lang: "TypeScript" },
    { name: "premium-ui-kit", desc: "A collection of ultra-modern glassmorphism components for React.", stars: 215, forks: 34, lang: "JavaScript" },
    { name: "quantum-dashboard", desc: "Real-time data visualization for distributed systems.", stars: 156, forks: 12, lang: "React" },
  ]

  return (
    <div className="p-8 font-mono">
      {/* GitHub Header as Code Comment */}
      <div className="mb-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px]" />
         <div className="text-slate-500 text-[10px] mb-2 font-mono">/**</div>
         <div className="text-slate-400 flex items-center gap-2 font-mono">
            <span> * @module <span className="text-indigo-400 font-bold">GitHub_Intelligence</span></span>
         </div>
         <div className="text-slate-400 font-mono"> * @description Professional contributions and open-source metrics.</div>
         <div className="text-slate-500 mt-2 font-mono"> */</div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
         {/* Stats Object */}
         <div className="glass-card p-8 border-slate-800/50 relative overflow-hidden group">
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-8 relative z-10">
               <span className="text-purple-400 font-black">const</span>
               <span className="text-cyan-400 font-black">contribution_matrix</span>
               <span className="text-slate-400 font-bold">=</span>
               <span className="text-indigo-500 font-bold">{"{"}</span>
            </div>
            
            <div className="space-y-6 pl-8 relative z-10">
               {[
                 { label: "Total Stars", value: "1.2k", color: "text-amber-400" },
                 { label: "Repositories", value: "48", color: "text-cyan-400" },
                 { label: "Pull Requests", value: "320", color: "text-purple-400" },
                 { label: "Contributions", value: "1.8k+", color: "text-emerald-400" },
               ].map((stat, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between group/line"
                  >
                    <div className="flex items-center gap-4">
                       <span className="text-slate-600 text-[10px] w-4 font-mono">{idx + 12}</span>
                       <span className="text-white opacity-80 group-hover/line:opacity-100 transition-opacity">"{stat.label}"</span>
                       <span className="text-slate-500">:</span>
                    </div>
                    <div className={`font-black ${stat.color} group-hover/line:scale-110 transition-transform tracking-tight`}>
                       "{stat.value}"<span className="text-slate-500">,</span>
                    </div>
                 </motion.div>
               ))}
            </div>
            <div className="text-indigo-500 font-bold mt-6 relative z-10">{"}"}</div>
         </div>

         {/* Language Distribution as Pie Chart inside JSON */}
         <div className="glass-card p-8 border-slate-800/50 relative overflow-hidden group">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-8 relative z-10">
               <span className="text-purple-400 font-black">const</span>
               <span className="text-cyan-400 font-black">stack_composition</span>
               <span className="text-slate-400 font-bold">=</span>
               <span className="text-indigo-500 font-bold">{"{"}</span>
            </div>
            <div className="h-[200px] relative z-10 flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie 
                        data={[
                           { name: "JavaScript", percentage: 45, color: "#6366f1" }, // Indigo
                           { name: "TypeScript", percentage: 25, color: "#a855f7" }, // Purple
                           { name: "React", percentage: 15, color: "#22d3ee" }, // Cyan
                           { name: "Python", percentage: 10, color: "#10b981" }, // Emerald
                           { name: "Other", percentage: 5, color: "#475569" },
                        ]} 
                        cx="50%"
                        cy="50%"
                        innerRadius={60} 
                        outerRadius={80} 
                        paddingAngle={5} 
                        dataKey="percentage"
                        stroke="none"
                     >
                        {[
                           { name: "JavaScript", percentage: 45, color: "#6366f1" },
                           { name: "TypeScript", percentage: 25, color: "#a855f7" },
                           { name: "React", percentage: 15, color: "#22d3ee" },
                           { name: "Python", percentage: 10, color: "#10b981" },
                           { name: "Other", percentage: 5, color: "#475569" },
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', background: 'rgba(9, 12, 16, 0.9)', color: '#fff', fontSize: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
                        itemStyle={{ color: '#fff' }}
                     />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="text-indigo-500 font-bold mt-6 relative z-10">{"}"}</div>
         </div>
      </div>

      {/* Repositories as Array of Objects */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-8 ml-4">
           <span className="text-purple-400 font-black">const</span>
           <span className="text-cyan-400 font-black">featured_repos</span>
           <span className="text-slate-400 font-bold">=</span>
           <span className="text-indigo-500 font-bold">[</span>
        </div>

        <div className="space-y-8 pl-12 border-l border-slate-800/50 mb-8 ml-4">
           {repos.map((repo, idx) => (
             <motion.div 
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="glass-card p-10 border-slate-800/50 relative overflow-hidden group hover:border-indigo-500/30 transition-all"
             >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900/80 rounded-xl group-hover:scale-110 transition-transform border border-slate-800">
                       <FaGithub className="text-xl text-indigo-400" />
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{repo.name}</h3>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">Repository_Node_ID: {idx + 1042}</div>
                    </div>
                  </div>
                  <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 text-amber-500/80 hover:text-amber-400 transition-colors hover:scale-110"><FaStar size={10} /> {repo.stars}</span>
                    <span className="flex items-center gap-1.5 text-indigo-400/80 hover:text-indigo-300 transition-colors hover:scale-110"><FaCodeBranch size={10} /> {repo.forks}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-8 font-sans italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">" {repo.desc} "</p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-cyan-400">
                   <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse" />
                   {repo.lang}
                </div>
             </motion.div>
           ))}
        </div>
        <div className="text-indigo-500 font-bold ml-4">]</div>
      </div>

      {/* GitHub Call to Action as Terminal Command */}
      <div className="mt-20 p-10 bg-black/40 rounded-3xl border border-dashed border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
         <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
               <FaTerminal className="text-cyan-400" />
               <span className="text-[10px] text-slate-500 font-black tracking-[0.3em] uppercase">System_Interaction</span>
            </div>
            <h4 className="text-3xl font-black text-white tracking-widest uppercase">EXPLORE_SOURCE_CODE</h4>
         </div>
         <motion.a 
            href="https://github.com/shivamg829" 
            target="_blank"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-5 rounded-2xl flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-2xl shadow-indigo-500/20 hover:shadow-cyan-400/20 transition-all border border-indigo-500/30"
         >
            <FaGithub size={20} />
            <span>git checkout main</span>
         </motion.a>
      </div>
    </div>
  )
}

export default GitHub