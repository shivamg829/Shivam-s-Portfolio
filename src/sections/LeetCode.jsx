import { motion } from 'framer-motion'
import { FaCode, FaTrophy, FaFire, FaTerminal } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const LeetCode = () => {
  const stats = [
    { label: "Total Solved", value: "292", color: "green" },
    { label: "Easy", value: "129", color: "blue" },
    { label: "Medium", value: "139", color: "yellow" },
    { label: "Hard", value: "24", color: "red" },
  ]

  const timeline = [
    { date: "2025", event: "100 Days Badge Achieved", lang: "C++" },
    { date: "2025", event: "Max Streak: 17 Days", lang: "DSA" },
    { date: "2025", event: "Total Active Days: 165", lang: "Consistency" },
    { date: "2024", event: "Solved 200+ Problems", lang: "C++" },
  ]

  return (
    <div className="p-6 font-mono h-full w-full flex flex-col text-[#c9d1d9] overflow-auto custom-scrollbar">
      <div className="mb-6 pb-5 border-b border-[#21262d]">
         <div className="text-[10px] text-[#484f58] uppercase tracking-[0.3em] mb-1">leetcode.js</div>
         <div className="text-[#8b949e] font-mono text-xs">from portfolio.metrics import <span className="text-sky-400 font-bold">AlgorithmPerformance</span></div>
      </div>

      <div className="mb-16">
         <div className="flex gap-2 text-xs font-bold mb-4 ml-4">
            <span className="text-sky-300 font-black">class</span>
            <span className="text-sky-400 font-black">LeetCodeExecution</span>
            <span className="text-[#8b949e] font-bold">(AlgorithmPerformance):</span>
         </div>
         
         <div className="pl-8 space-y-8">
            <div className="bg-[#161b22] rounded-xl border border-[#30363d] p-6 relative overflow-hidden group hover:border-sky-500/30 transition-all">
               <div className="flex items-center gap-3 mb-6 text-sky-400 font-black tracking-[0.2em] text-[10px]">
                  <SiLeetcode className="group-hover:scale-110 transition-transform" />
                  <span>AGGREGATED_METRICS = {"{"}</span>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-center items-center text-center">
                  {stats.map((stat, idx) => (
                    <motion.div 
                       key={idx}
                       initial={{ scale: 0.95, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: idx * 0.1 }}
                    >
                       <div className="text-[10px] text-[#8b949e] mb-2 uppercase tracking-widest font-black">"{stat.label}"</div>
                       <div className={`text-3xl font-black tracking-tighter ${
                         stat.color === 'green'  ? 'text-sky-400' : 
                         stat.color === 'blue'   ? 'text-blue-400' : 
                         stat.color === 'yellow' ? 'text-amber-400' : 'text-rose-400'
                       }`}>
                          {stat.value}
                       </div>
                    </motion.div>
                  ))}
               </div>
               <div className="text-indigo-400 font-black tracking-[0.2em] text-[10px] mt-8">{"}"}</div>
            </div>
         </div>
      </div>

      <div className="mb-10">
         <div className="flex gap-2 text-xs font-bold mb-5">
            <span className="text-sky-300 font-black">def</span>
            <span className="text-sky-400 font-black">notable_milestones</span>
            <span className="text-[#8b949e] font-bold">(self):</span>
         </div>

         <div className="pl-8 border-l border-[#30363d] space-y-4">
            <div className="text-sky-500 font-black text-[10px] mb-3 uppercase tracking-widest">return [</div>
            <div className="grid gap-4">
               {timeline.map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="bg-[#161b22] rounded-lg border border-[#30363d] p-4 group relative overflow-hidden hover:border-sky-500/30 transition-all"
                 >
                    <div className="absolute top-0 left-0 w-1 h-full bg-sky-500/0 group-hover:bg-sky-500 transition-colors rounded-l-lg" />
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <span className="text-[#484f58] text-[10px] font-mono">0x0{idx + 1}</span>
                          <span className="text-white font-bold group-hover:text-sky-400 transition-colors text-sm">"{item.event}"</span>
                       </div>
                       <div className="text-[10px] font-black text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                          {item.date}
                       </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[10px] text-[#8b949e] font-black uppercase tracking-widest">
                       <span className="text-sky-400/70">@language</span>
                       <span>: "{item.lang}"</span>
                    </div>
                 </motion.div>
               ))}
            </div>
            <div className="text-sky-500 font-black text-[10px] mt-2 uppercase tracking-widest">]</div>
         </div>
      </div>

      <div className="mt-8 p-6 bg-[#0d1117] rounded-xl border border-dashed border-[#30363d] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
         <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
               <FaFire className="text-amber-400 animate-pulse" />
               <span className="text-[10px] text-[#8b949e] font-black tracking-[0.3em] uppercase">View Profile</span>
            </div>
            <h4 className="text-xl font-black text-white tracking-widest uppercase">LeetCode / Shivam0829</h4>
         </div>
         
         <motion.a 
            href="https://leetcode.com/u/Shivam0829/" 
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-500/10 border border-sky-500/30 px-8 py-3 rounded-lg flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-sky-400 hover:bg-sky-500/20 hover:border-sky-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.08)]"
         >
            <SiLeetcode size={18} />
            <span>Open Profile</span>
         </motion.a>
      </div>
    </div>
  )
}

export default LeetCode