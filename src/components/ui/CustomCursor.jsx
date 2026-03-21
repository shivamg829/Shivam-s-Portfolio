import { useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const CustomCursor = () => {
  const { uniforms } = useTheme()
  const themeColor = uniforms?.colors?.[0] || '#6366f1'
  
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHover = (e) => {
      const target = e.target
      const isClickable = target.closest('button, a, .glass-card, [role="button"]')
      setIsHovering(!!isClickable)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [cursorX, cursorY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: themeColor,
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border rounded-full blur-[1px]"
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? `${themeColor}10` : 'transparent',
          borderColor: isHovering ? themeColor : `${themeColor}50`,
          borderWidth: isHovering ? '1px' : '2px',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trailing Glow */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full blur-3xl"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.4 : 0.2,
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: themeColor,
        }}
      />
    </div>
  )
}

export default CustomCursor
