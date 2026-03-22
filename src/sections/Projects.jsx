import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa'

const Projects = () => {
  const projects = [
  {
    id: 1,
    title: "DayLine - Task Management",
    description: "A task management application with user authentication, task creation, and real-time updates.",
    technologies: ["MERN", "Tailwind CSS"],
    category: "Full Stack",
    liveLink: "https://dayline-task.netlify.app",
    githubLink: "https://github.com/shivamg829/DayLine",
  },
  {
    id: 2,
    title: "Airbnb Clone",
    description: "A rental platform featuring booking functionality, property listings, and user authentication.",
    technologies: ["MongoDB", "Express", "EJS", "Node.js", "Tailwind CSS"],
    category: "Full Stack",
    liveLink: "https://airbnb-wt7p.onrender.com",
    githubLink: "https://github.com/shivamg829/airbnb-clone-backend",
  },
  {
    id: 3,
    title: "APIx",
    description: "Explore powerful API integrations. Weather, shopping, recipes, and news - all in one beautiful platform.",
    technologies: ["MongoDB", "Express", "EJS", "Node.js", "Tailwind CSS"],
    category: "React/API Integration",
    liveLink: "https://magnificent-rabanadas-4767f5.netlify.app/",
    githubLink: "https://github.com/shivamg829/apix",
  },
  {
    id: 4,
    title: "Weatherly - Real-time Weather App",
    description: "A responsive frontend application built with React to fetch and display current weather data using a third-party API. Features custom components for loading and data display.",
    technologies: ["React", "Custom API Fetching", "CSS"],
    category: "Frontend/API Integration",
    liveLink: "https://weatherly-lite.netlify.app/",
    githubLink: "https://github.com/shivamg829/weatherly",
  },
  {
    id: 5,
    title: "Password Generator",
    description: "A responsive react application that generates secure passwords based on user-defined criteria, including length and character types. Features a user-friendly interface and real-time password strength assessment.",
    technologies: ["React", "CSS"],
    category: "Frontend",
    liveLink: "https://password-generator-kappa-flame-75.vercel.app/",
    githubLink: "https://github.com/shivamg829/password-generator",
  },
];

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
              <div className="p-8 border-b border-slate-800/50 flex justify-between items-start shrink-0 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                 <div className="relative z-10">
                    <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                       <span className="w-4 h-px bg-cyan-400/30" /> Build_{project.id.toString().padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-indigo-400 transition-colors">
                       {project.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 italic tracking-widest">{project.category}</p>
                 </div>
                 <div className="flex gap-3 relative z-10">
                    <motion.a whileHover={{ y: -2, scale: 1.05 }} href={project.githubLink} className="p-3 bg-slate-900/80 rounded-xl text-slate-400 hover:text-white transition-colors border border-slate-800 hover:border-indigo-500/30" target="_blank" rel="noopener noreferrer">
                       <FaGithub />
                    </motion.a>
                    <motion.a whileHover={{ y: -2, scale: 1.05 }} href={project.liveLink} className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl text-white shadow-lg shadow-indigo-500/30" target="_blank" rel="noopener noreferrer">
                       <FaExternalLinkAlt />
                    </motion.a>
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between relative">
                 <p className="text-xs text-slate-400 leading-relaxed font-sans italic line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.description}
                 </p>
                 
                 <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                       {project.technologies.map((tag) => (
                         <span key={tag} className="px-2 py-1 bg-indigo-500/10 text-[9px] font-black text-indigo-300 border border-indigo-500/20 rounded uppercase tracking-tighter hover:bg-indigo-500/20 transition-colors cursor-pointer">
                            {tag}
                         </span>
                       ))}
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
           </motion.div>
         ))}
      </div>
    </div>
  )
}

export default Projects
