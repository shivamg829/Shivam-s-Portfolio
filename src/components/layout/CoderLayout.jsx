import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { 
  FaFolder, FaFileCode, FaGithub, FaCode, FaCertificate, 
  FaTerminal, FaTimes, FaMinus, FaRegWindowMaximize,
  FaChevronRight, FaChevronDown, FaSearch
} from 'react-icons/fa'
import { SiJavascript, SiReact, SiMarkdown, SiJson } from 'react-icons/si'
import shivamImg from '../../assets/Shivam.jpg'

const FileIcon = ({ name, type }) => {
  if (name.endsWith('.jsx')) return <SiReact className="text-cyan-400" />
  if (name.endsWith('.js')) return <SiJavascript className="text-yellow-400" />
  if (name.endsWith('.md')) return <SiMarkdown className="text-blue-300" />
  if (name.endsWith('.json')) return <SiJson className="text-orange-400" />
  return <FaFileCode className="text-slate-400" />
}

const CoderLayout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTabs, setActiveTabs] = useState([])
  const [isTerminalOpen, setIsTerminalOpen] = useState(true)

  const files = [
    { name: 'readme.md', path: '/', icon: SiMarkdown },
    { name: 'profile.md', path: '/about', icon: SiMarkdown },
    { name: 'projects.jsx', path: '/projects', icon: SiReact },
    { name: 'github.json', path: '/github', icon: SiJson },
    { name: 'leetcode.js', path: '/leetcode', icon: SiJavascript },
    { name: 'certificates.jsx', path: '/certificates', icon: SiReact },
    { name: 'contact.js', path: '/contact', icon: SiJavascript },
  ]

  useEffect(() => {
    const currentFile = files.find(f => f.path === location.pathname)
    if (currentFile) {
      setActiveTabs(prev => {
        if (prev.find(t => t.path === currentFile.path)) return prev
        return [...prev, currentFile]
      })
    }
  }, [location.pathname])

  const closeTab = (e, path) => {
    e.stopPropagation()
    const newTabs = activeTabs.filter(t => t.path !== path)
    setActiveTabs(newTabs)
    if (location.pathname === path && newTabs.length > 0) {
      navigate(newTabs[newTabs.length - 1].path)
    } else if (newTabs.length === 0) {
      navigate('/')
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#0b0e14]/80 backdrop-blur-md text-[#c9d1d9] font-mono selection:bg-cyan-500/30 overflow-hidden">
      {/* Title Bar */}
      <div className="h-9 glass-2 flex justify-between items-center px-4 shrink-0 z-50">
        <div className="flex items-center gap-2 text-xs text-slate-400">
           <FaCode className="text-cyan-400" />
           <span className="font-bold tracking-tight text-slate-300">Shivam Portfolio</span>
        </div>
        <div className="flex gap-4 items-center">
           <FaMinus className="w-3 h-3 hover:text-white cursor-pointer" />
           <FaRegWindowMaximize className="w-3 h-3 hover:text-white cursor-pointer" />
           <FaTimes className="w-3 h-3 hover:text-rose-500 cursor-pointer" />
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#090c10]/80 border-r border-slate-800/50 flex flex-col items-center py-4 gap-6 shrink-0">
           <FaFolder className={`cursor-pointer transition-colors ${isSidebarOpen ? 'text-white' : 'text-slate-500 hover:text-white'}`} size={20} title="Explorer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
           <FaSearch className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={20} title="Search" onClick={() => window.alert("Global search functionality coming soon!")} />
           <Link to="/github" className="flex items-center justify-center">
              <FaGithub className={`cursor-pointer transition-colors ${location.pathname === '/github' ? 'text-white' : 'text-slate-500 hover:text-white'}`} size={20} title="Source Control" />
           </Link>
           <div className="mt-auto">
              <img src={shivamImg} alt="Profile" className="w-8 h-8 rounded-full mb-4 object-cover border border-sky-500/50 shadow-[0_0_8px_rgba(56,189,248,0.3)]" />
           </div>
        </div>

        {/* Sidebar - File Tree */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-[#0b0e14] border-r border-slate-800/50 flex flex-col overflow-hidden shrink-0"
            >
              <div className="h-10 flex items-center px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Explorer
              </div>
              <div className="flex items-center px-2 py-1 bg-sky-500/10 mb-2 border-y border-sky-500/10 transition-colors">
                 <FaChevronDown className="w-2 h-2 mr-2 text-sky-400" />
                 <span className="text-[10px] font-bold text-sky-300 uppercase">Portfolio Root</span>
              </div>
              
              <div className="flex flex-col">
                <div className="px-4 py-1 flex items-center text-xs text-slate-400">
                   <FaChevronDown className="w-2 h-2 mr-2" />
                   <FaFolder className="mr-2 text-cyan-500" />
                   <span>src</span>
                </div>
                <div className="pl-8 flex flex-col">
                   <div className="py-1 flex items-center text-xs text-slate-400">
                      <FaChevronDown className="w-2 h-2 mr-2" />
                      <FaFolder className="mr-2 text-purple-400" />
                      <span>sections</span>
                   </div>
                   <div className="pl-4 flex flex-col">
                      {files.map(file => (
                        <Link 
                          key={file.path} 
                          to={file.path}
                          className={`flex items-center gap-2 px-4 py-1 text-xs transition-colors hover:bg-[#161b22] group ${
                            location.pathname === file.path ? 'bg-sky-500/10 text-sky-400 border-l-2 border-sky-500' : 'text-[#8b949e]'
                          }`}
                        >
                           <FileIcon name={file.name} />
                           <span className="group-hover:text-slate-200">{file.name}</span>
                        </Link>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Tab Bar */}
          <div className="h-10 bg-[#090c10]/80 border-b border-slate-800/50 flex justify-start pl-2 overflow-x-auto no-scrollbar">
            {activeTabs.map(tab => (
              <div 
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`flex items-center gap-2 px-4 min-w-[140px] border-r border-slate-800/50 cursor-pointer transition-all ${
                  location.pathname === tab.path ? 'bg-[#1e1e1e] border-t-2 border-t-cyan-400' : 'bg-[#0d1117] group hover:bg-[#1e1e1e]/50'
                }`}
              >
                <FileIcon name={tab.name} />
                <span className={`text-xs truncate ${location.pathname === tab.path ? 'text-white' : 'text-slate-400'}`}>
                  {tab.name}
                </span>
                <FaTimes 
                  className={`ml-auto w-2 h-2 text-slate-500 hover:text-white opacity-0 group-hover:opacity-100 ${location.pathname === tab.path ? 'opacity-100' : ''}`} 
                  onClick={(e) => closeTab(e, tab.path)}
                />
              </div>
            ))}
          </div>

          {/* Breadcrumbs */}
          <div className="h-6 flex items-center px-6 text-[10px] text-slate-500 bg-[#1e1e1e]/30 border-b border-slate-800/20 shrink-0">
             <span>src</span>
             <FaChevronRight className="w-2 h-2 mx-2" />
             <span>sections</span>
             <FaChevronRight className="w-2 h-2 mx-2" />
             <span className="text-cyan-400 font-bold">
               {files.find(f => f.path === location.pathname)?.name || 'index.js'}
             </span>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto relative custom-scrollbar bg-[#0d1117]/60">
             <main className="min-h-full pb-32">
                {children}
             </main>
          </div>


          {/* Terminal Panel */}
          <AnimatePresence>
            {isTerminalOpen && (
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: 260 }}
                exit={{ height: 0 }}
                className="bg-[#090c10]/90 backdrop-blur-md border-t border-slate-800/50 relative overflow-hidden shrink-0 shadow-inner"
              >
                 <div className="flex items-center px-4 h-9 bg-[#0b0e14] gap-6 border-b border-slate-800/50">
                    <div className="text-[10px] font-black text-cyan-400 border-b-2 border-cyan-400 h-full flex items-center px-2 uppercase tracking-widest cursor-pointer">Terminal</div>
                    <div className="text-[10px] font-bold text-slate-500 h-full flex items-center px-2 uppercase tracking-widest cursor-pointer hover:text-white">Debug Console</div>
                    <div className="text-[10px] font-bold text-slate-500 h-full flex items-center px-2 uppercase tracking-widest cursor-pointer hover:text-white">Output</div>
                    <FaTimes 
                      onClick={() => setIsTerminalOpen(false)}
                      className="ml-auto w-3 h-3 text-slate-500 hover:text-white cursor-pointer" 
                    />
                 </div>
                 <div className="p-6 text-xs font-mono">
                    <div className="flex gap-2 mb-2">
                       <span className="text-cyan-400 font-black">Shivam_OS@Antigravity</span>
                       <span className="text-slate-600">:</span>
                       <span className="text-purple-400 tracking-tighter">~/portfolio/main</span>
                       <span className="text-white">$</span>
                    </div>
                    <div className="text-indigo-200">
                       <span className="text-white mr-2">sh</span>
                       <span>./init_coder_env.sh</span>
                    </div>
                    <div className="mt-4 space-y-1">
                       <div className="text-slate-600">[{new Date().toLocaleTimeString()}] INF - Initializing Antigravity Core...</div>
                       <div className="text-cyan-500 font-bold">&gt; VITE v5.0.0 Refined Ready in 84ms</div>
                       <div className="text-sky-400 flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                          <span>System stable. Neural link established.</span>
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#0d1117] border-t border-[#21262d] flex justify-between items-center px-3 text-[10px] font-black text-[#8b949e] tracking-[0.1em] uppercase shrink-0 z-50">
         <div className="flex items-center h-full">
            <div className="flex items-center gap-1.5 hover:bg-white/10 px-3 h-full cursor-pointer transition-colors border-r border-white/10 group">
               <FaGithub className="group-hover:rotate-12 transition-transform" />
               <span>main*</span>
            </div>
            <div className="flex items-center gap-3 px-3 h-full opacity-70">
               <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-white animate-pulse" /> 0 Error</span>
               <span className="flex items-center gap-1">0 Warning</span>
            </div>
         </div>
         <div className="flex items-center h-full">
            <div className="flex items-center gap-4 px-3 h-full">
               <span className="opacity-60">Tab Size: 2</span>
               <span className="text-cyan-300">UTF-8</span>
               <span className="bg-white/10 px-2 rounded ml-2">Javascript React</span>
            </div>
            <div className="flex items-center gap-2 px-3 h-full hover:bg-white/10 cursor-pointer transition-colors border-l border-white/10">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
               <span>Prettier</span>
            </div>
         </div>
      </div>
    </div>
  )
}

export default CoderLayout
