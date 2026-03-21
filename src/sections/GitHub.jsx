import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaCircle, FaTerminal, FaCode, FaLaptopCode, FaDatabase, FaCloud, FaTools, FaNetworkWired, FaShieldAlt } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const GitHub = () => {
  // Real data from Shivam's GitHub and Resume
  const stats = [
    { label: "Total Stars", value: "2", icon: FaStar, color: "text-yellow-400" },
    { label: "Repositories", value: "17", icon: FaCode, color: "text-blue-400" },
    { label: "Contributions", value: "133", icon: FaCircle, color: "text-emerald-400" },
  ]

  const languages = [
    { name: "JavaScript", percentage: 35, color: "#f7df1e" },
    { name: "C++", percentage: 25, color: "#00599c" },
    { name: "Java", percentage: 15, color: "#b07219" },
    { name: "C", percentage: 10, color: "#a8b9cc" },
    { name: "HTML/CSS", percentage: 15, color: "#e34c26" },
  ]

  const skillCategories = [
    {
      title: "Languages",
      icon: FaLaptopCode,
      skills: ["C++", "C", "JavaScript", "Java", "Bash (Basic)"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: FaCode,
      skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express.js", "Bootstrap", "EJS"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: ["MySQL", "MongoDB"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Tools & Platforms",
      icon: FaTools,
      skills: ["Git", "GitHub", "VS Code", "Postman", "AWS (Basic)", "Linux"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Architecture & Security",
      icon: FaNetworkWired,
      skills: ["RESTful APIs", "JWT", "MVC Pattern"],
      color: "from-pink-500 to-rose-500"
    }
  ]

  const repos = [
    { name: "Bridge", desc: "Real-time chat application using MERN stack with Socket.IO for instant messaging and user authentication.", stars: 0, forks: 0, lang: "JavaScript" },
    { name: "weatherly", desc: "Single-page application built with React.js for real-time global weather information.", stars: 0, forks: 0, lang: "HTML" },
    { name: "DayLine", desc: "Full-stack task management application with JWT authentication, CRUD operations, and responsive dashboard.", stars: 0, forks: 0, lang: "JavaScript" },
    { name: "netflix-copy", desc: "Frontend Netflix interface using React.js with dynamic movie browsing.", stars: 0, forks: 0, lang: "JavaScript" },
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
         <div className="text-slate-400 font-mono"> * @author <span className="text-cyan-400">Shivam Gangwar</span></div>
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
                 { label: "Total Stars", value: "2", color: "text-amber-400" },
                 { label: "Repositories", value: "17", color: "text-cyan-400" },
                 { label: "Contributions", value: "133", color: "text-emerald-400" },
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

         {/* Language Distribution as Pie Chart */}
         <div className="glass-card p-8 border-slate-800/50 relative overflow-hidden group">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-4 relative z-10">
               <span className="text-purple-400 font-black">const</span>
               <span className="text-cyan-400 font-black">stack_composition</span>
               <span className="text-slate-400 font-bold">=</span>
               <span className="text-indigo-500 font-bold">{"{"}</span>
            </div>
            <div className="h-[200px] relative z-10 flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie 
                        data={languages} 
                        cx="50%"
                        cy="50%"
                        innerRadius={60} 
                        outerRadius={80} 
                        paddingAngle={5} 
                        dataKey="percentage"
                        stroke="none"
                     >
                        {languages.map((entry, index) => (
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
            <div className="flex flex-wrap justify-center gap-3 mt-3 relative z-10">
               {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[9px]">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                     <span className="text-slate-400">{lang.name}</span>
                     <span className="text-white font-bold">{lang.percentage}%</span>
                  </div>
               ))}
            </div>
            <div className="text-indigo-500 font-bold mt-4 relative z-10">{"}"}</div>
         </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-8 ml-4">
           <span className="text-purple-400 font-black">const</span>
           <span className="text-cyan-400 font-black">tech_arsenal</span>
           <span className="text-slate-400 font-bold">=</span>
           <span className="text-indigo-500 font-bold">{"{"}</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-8 mb-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 border-slate-800/50 relative overflow-hidden group hover:border-indigo-500/30 transition-all"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-2 mb-4">
                <category.icon className={`text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                <span className="text-xs text-slate-400 font-black uppercase tracking-wider">{category.title}</span>
                <span className="text-slate-600">:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="text-[10px] px-2.5 py-1.5 bg-slate-900/60 rounded-full text-slate-300 border border-slate-800/50 hover:border-indigo-500/50 hover:text-indigo-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-indigo-500 font-bold ml-4">{"}"}</div>
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
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">
                          {repo.lang === "JavaScript" ? "JS" : repo.lang === "HTML" ? "HTML/CSS" : repo.lang}
                       </div>
                    </div>
                  </div>
                  <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 text-amber-500/80"><FaStar size={10} /> {repo.stars}</span>
                    <span className="flex items-center gap-1.5 text-indigo-400/80"><FaCodeBranch size={10} /> {repo.forks}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-8 font-sans italic leading-relaxed">"{repo.desc}"</p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-cyan-400">
                   <div className={`w-2.5 h-2.5 rounded-full ${repo.lang === "JavaScript" ? "bg-yellow-400" : repo.lang === "HTML" ? "bg-orange-500" : "bg-cyan-400"} shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse`} />
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
            <h4 className="text-3xl font-black text-white tracking-widest uppercase">VIEW_GITHUB_PROFILE</h4>
            <p className="text-xs text-slate-500 font-mono">shivamg829 · 17 repositories · 133 contributions</p>
         </div>
         <motion.a 
            href="https://github.com/shivamg829" 
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500/10 border border-indigo-500/30 px-8 py-3 rounded-lg flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-400 transition-all shadow-[0_0_20px_rgba(99,102,241,0.08)]"
         >
            <FaGithub size={18} />
            <span>Open Profile</span>
         </motion.a>
      </div>
    </div>
  )
}

export default GitHub