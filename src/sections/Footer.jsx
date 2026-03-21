import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: FaGithub,   href: 'https://github.com/shivamg829',           label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shivam0829/', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/Shivam0829/',      label: 'LeetCode' },
  ]

  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="container-custom relative z-10 text-center">
        <div className="flex justify-center gap-6 mb-10">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
              className="text-[#8b949e] hover:text-sky-400 transition-all hover:scale-125">
              <Icon size={22} />
            </a>
          ))}
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-black text-white tracking-widest uppercase mb-1">Shivam Gangwar</h4>
          <div className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.5em]">Full-Stack Developer</div>
        </div>

        <p className="text-[#8b949e] text-sm mb-10 max-w-md mx-auto">
          Crafting immersive digital experiences where engineering meets design.
        </p>

        <div className="pt-8 border-t border-[#21262d] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-bold text-[#484f58] uppercase tracking-widest">
            &copy; {currentYear} Shivam. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#484f58] uppercase tracking-widest">
            <span>Built with</span>
            <FaHeart className="text-rose-500 animate-pulse" />
            <span>by Shivam</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer