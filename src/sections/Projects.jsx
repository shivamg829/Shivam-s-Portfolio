import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa'

const Projects = () => {
  const allProjects = [
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
      description: "A modern API integration platform built with React. Fetches real-time data like weather, news, shopping, and recipes with a clean and interactive UI.",
      technologies: ["React", "API Integration", "Bootstrap"],
      category: "Frontend/API Integration",
      liveLink: "https://magnificent-rabanadas-4767f5.netlify.app/",
      githubLink: "https://github.com/shivamg829/apix",
    },
    {
      id: 4,
      title: "Weatherly - Real-time Weather App",
      description: "A responsive frontend application built with React to fetch and display current weather data using a third-party API.",
      technologies: ["React", "API", "CSS"],
      category: "Frontend/API Integration",
      liveLink: "https://weatherly-lite.netlify.app/",
      githubLink: "https://github.com/shivamg829/weatherly",
    },
    {
      id: 5,
      title: "Password Generator",
      description: "Generates secure passwords with custom rules and real-time strength checking.",
      technologies: ["React", "CSS"],
      category: "Frontend",
      liveLink: "https://password-generator-kappa-flame-75.vercel.app/",
      githubLink: "https://github.com/shivamg829/password-generator",
    },
  ]

  const featuredProjects = allProjects.slice(0, 3)
  const otherProjects = allProjects.slice(3)

  return (
    <div className="p-8 font-mono h-full flex flex-col">
      
      {/* Header */}
      <div className="mb-12 border-b border-slate-800 pb-10 flex flex-col items-center text-center gap-4">
        <div className="space-y-1">
          <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">
            Source / Components
          </div>
          <h2 className="text-2xl font-black text-white tracking-tighter flex items-center justify-center gap-3">
            <FaFolder className="text-indigo-400" />
            projects.jsx
          </h2>
        </div>
        <div className="flex gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span>Branch: <span className="text-emerald-500">main</span></span>
          <span>Status: <span className="text-cyan-400">deployed</span></span>
        </div>
      </div>

      {/* Featured Projects */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="w-6 h-px bg-emerald-400/50" /> 🔥 Featured Live Projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-[#161b22] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all"
            >
              <div>
                <h3 className="text-xl font-black text-white mb-1">
                  {project.title}
                </h3>

                {/* 🔥 Tech Stack Highlight */}
                <p className="text-[11px] text-indigo-400 font-bold mb-3 tracking-widest">
                  {project.technologies.join(" • ")}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* ✅ Real badge instead of fake stars */}
                <div className="text-[10px] text-emerald-400 font-bold mt-4 tracking-widest uppercase">
                  🚀 Live Production Project
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white border border-slate-700"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-emerald-600 rounded-lg text-white"
                >
                  <FaExternalLinkAlt />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-12 pt-12 border-t border-slate-800">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
            Other Projects
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#161b22] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-[11px] text-indigo-400 font-bold mb-2 tracking-widest">
                    {project.technologies.join(" • ")}
                  </p>

                  <p className="text-sm text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white border border-slate-700"
                  >
                    <FaGithub />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-600 rounded-lg text-white"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects