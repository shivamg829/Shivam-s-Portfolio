import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

const FloatingNavbar = () => {
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/about', icon: '👤', label: 'About' },
    { path: '/skills', icon: '⚡', label: 'Skills' },
    { path: '/projects', icon: '🚀', label: 'Projects' },
    { path: '/github', icon: '🐙', label: 'GitHub' },
    { path: '/leetcode', icon: '💡', label: 'LeetCode' },
    { path: '/certificates', icon: '📜', label: 'Certificates' },
    { path: '/contact', icon: '💬', label: 'Contact' }
  ]

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-4"
    >
      <div className="glass-2 rounded-3xl p-2 shadow-2xl flex items-center gap-2">
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <motion.div
                key={item.path}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={`relative flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl transition-all duration-500 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-500 dark:text-slate-400 hover:text-indigo-400 dark:hover:text-cyan-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-bg"
                      className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 text-xl md:text-2xl">{item.icon}</span>
                  
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-1 w-1 h-1 bg-white rounded-full z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>

                {/* Enhanced Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1.5 glass-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                    {item.label}
                  </span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 glass-2 rotate-45 border-t-0 border-l-0" />
                </div>
              </motion.div>
            )
          })}

          <div className="w-px h-8 bg-slate-200 dark:bg-slate-800 mx-1 md:mx-2" />

          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center glass-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl"
              >
                {isDark ? '☀️' : '🌙'}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default FloatingNavbar