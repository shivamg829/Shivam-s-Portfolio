import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './components/ThemeContext'
import CoderLayout from './components/layout/CoderLayout'
import Scene from './components/canvas/Scene'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import GitHub from './sections/GitHub'
import LeetCode from './sections/LeetCode'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="w-full"
  >
    {children}
  </motion.div>
)

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/github" element={<PageWrapper><GitHub /></PageWrapper>} />
        <Route path="/leetcode" element={<PageWrapper><LeetCode /></PageWrapper>} />
        <Route path="/certificates" element={<PageWrapper><Certificates /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-[#0d1117] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 font-body antialiased transition-colors duration-700 overflow-hidden relative">
           
           {/* Background 3D Scene */}
           <div className="fixed inset-0 z-0 pointer-events-none">
              <Scene />
           </div>

           {/* Full Screen Layout Wrapper */}
           <div className="relative z-10 w-full h-screen overflow-hidden flex flex-col">
              <CoderLayout>
                 <AnimatedRoutes />
              </CoderLayout>
           </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App

