import { motion } from 'framer-motion'
import { FaUser, FaQuoteLeft, FaTerminal, FaCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className="p-8 font-mono max-w-4xl mx-auto">
      {/* Markdown Header */}
      <div className="mb-12 border-b border-slate-800 pb-8 flex flex-col items-center text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px]" />
         <div className="text-slate-500 text-[10px] mb-4 uppercase tracking-[0.3em]"># profile.md</div>
         <h1 className="text-4xl font-black text-white tracking-tighter uppercase mb-4">
            Shivam <span className="text-indigo-500">_N</span>
         </h1>
         <div className="flex gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><FaUser size={10} className="text-cyan-400" /> Full Stack Architect</span>
            <span className="flex items-center gap-1.5"><FaCode size={10} className="text-purple-400" /> Problem Solver</span>
         </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-16">
         {/* Bio */}
         <section>
            <div className="flex items-center gap-3 text-indigo-400 font-bold mb-6">
               <span className="text-lg">##</span>
               <span className="text-[10px] uppercase tracking-[0.3em] font-black">The_Mission</span>
            </div>
            <div className="glass-card p-10 border-slate-700/50 leading-relaxed relative overflow-hidden group bg-slate-900/40">
               <div className="absolute inset-0 bg-indigo-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity" />
               <FaQuoteLeft className="absolute -top-4 -left-4 text-8xl text-slate-900 group-hover:text-indigo-500/10 transition-colors" />
               <p className="text-white relative z-10 text-lg md:text-xl font-light italic leading-loose">
                  "Building digital ecosystems that bridge the gap between complex engineering and intuitive human experience. I specialize in crafting high-performance, scalable applications with a focus on clean architecture and immersive UI/UX."
               </p>
            </div>
         </section>

         {/* Origins */}
         <section>
            <div className="flex items-center gap-3 text-purple-400 font-bold mb-6">
               <span className="text-lg">##</span>
               <span className="text-[10px] uppercase tracking-[0.3em] font-black">Core_Philosophy</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 { title: "Efficiency First", desc: "Optimizing every line for maximum throughput and minimal overhead.", icon: FaTerminal, color: "cyan" },
                 { title: "Clean Design", desc: "Aesthetics are not just decoration; they are a fundamental part of the engineering process.", icon: FaCode, color: "purple" }
               ].map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-8 border-slate-800/50 hover:border-indigo-500/30 transition-all group relative overflow-hidden"
                 >
                    <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-${item.color}-500/5 blur-2xl group-hover:bg-${item.color}-500/10 transition-colors`} />
                    <item.icon className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform group-hover:text-cyan-400 transition-colors" size={24} />
                    <h4 className="text-sm font-black text-white uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans italic">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </section>

         {/* Technical Log */}
         <section className="pt-12">
            <div className="p-8 bg-black/40 rounded-3xl border border-dashed border-slate-800 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">System Status: Nominal</span>
               </div>
               <div className="text-[10px] font-mono text-slate-600 space-y-1">
                  <div className="flex gap-3"><span className="text-cyan-500/70">{">"}</span> <span>Init portfolio_engine.v3...</span></div>
                  <div className="flex gap-3"><span className="text-cyan-500/70">{">"}</span> <span>Loading profile data [OK]</span></div>
                  <div className="flex gap-3"><span className="text-cyan-500/70">{">"}</span> <span>Syncing global state <span className="text-indigo-400 font-bold">[NOMINAL]</span></span></div>
               </div>
            </div>
         </section>
      </div>
    </div>
  )
}

export default About