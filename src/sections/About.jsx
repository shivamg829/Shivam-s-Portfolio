import { motion } from 'framer-motion'
import { FaUser, FaQuoteLeft, FaTerminal, FaCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className="p-8 font-mono max-w-4xl mx-auto">
      <div className="mb-12 border-b border-slate-700 pb-8 text-center relative">
         <div className="text-slate-500 text-[11px] mb-6 uppercase tracking-[0.3em]"># about.jsx</div>
         <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Shivam Gangwar
         </h1>
         <div className="flex flex-col sm:flex-row gap-4 text-sm font-semibold text-slate-300 max-w-md mx-auto">
            <span className="flex items-center gap-2 justify-center sm:justify-start">
               <FaUser size={14} className="text-sky-400" /> Full-Stack Developer
            </span>
            <span className="flex items-center gap-2 justify-center sm:justify-start">
               <FaCode size={14} className="text-emerald-400" /> LPU'27
            </span>
         </div>
      </div>
      <div className="space-y-16">
         <section>
            <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-light">
                Full-stack developer passionate about creating scalable web applications and immersive user experiences. Specializing in modern JavaScript frameworks, cloud architecture, and performance optimization.
              </p>
            </div>
         </section>
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