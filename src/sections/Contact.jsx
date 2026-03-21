import { motion, AnimatePresence } from 'framer-motion'
import { FaTerminal, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaAt, FaCommentDots, FaCheck } from 'react-icons/fa'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const socials = [
  { icon: FaGithub,   href: 'https://github.com/shivamg829',                  label: 'GitHub',   accent: 'hover:border-white/40 hover:text-white' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shivam0829/',        label: 'LinkedIn', accent: 'hover:border-sky-400/40 hover:text-sky-400' },
]

const delay = (ms) => new Promise(r => setTimeout(r, ms))

const Contact = () => {
  const formRef = useRef()
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [log, setLog]       = useState([])

  const push = (text, type = 'dim') => setLog(p => [...p, { text, type, id: Date.now() + Math.random() }])

  const handleChange = (e) => setFields(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setLog([])
    push(`$ send_message --from "${fields.name}"`)
    await delay(350)
    push('Compressing payload...')
    await delay(450)
    push('Handshaking with EmailJS...')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      await delay(300)
      push('[200 OK] Message delivered.', 'ok')
      setStatus('success')
      toast.success("Message sent! I'll reply soon.")
      setFields({ name: '', email: '', message: '' })
    } catch {
      push('[500 ERR] Transmission failed.', 'err')
      setStatus('error')
      toast.error('Failed to send. Check your EmailJS config.')
    }
  }

  return (
    <div className="p-6 font-mono h-full w-full flex flex-col text-[#c9d1d9] overflow-auto custom-scrollbar">
      <Toaster position="top-right" toastOptions={{ style: { background: '#161b22', color: '#c9d1d9', border: '1px solid #30363d', fontFamily: 'monospace', fontSize: '12px' } }} />

      <div className="mb-6 pb-5 border-b border-[#21262d]">
        <div className="text-[10px] text-[#484f58] uppercase tracking-[0.3em] mb-1">contact.sh</div>
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <FaTerminal className="text-sky-400" /> Let's build something <span className="text-sky-400">beyond.</span>
        </h2>
        <p className="text-xs text-[#8b949e] mt-1">Open for work, collabs, or just a good conversation.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 flex-1 min-h-0">

        <div className="flex flex-col gap-5">

          <div className="bg-[#161b22] rounded-xl border border-[#30363d] p-5 relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-sky-500/5 blur-3xl group-hover:bg-sky-500/8 transition-colors pointer-events-none" />
            <div className="text-[10px] text-[#8b949e] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" /> Status · Online
            </div>
            <h3 className="text-base font-black text-white tracking-tight mb-2">
              Response time: <span className="text-sky-400">&lt; 24h</span>
            </h3>
            <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
              Whether it's an internship, freelance gig, open source, or any idea worth building — I'm in. Reach me on any platform below.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label, accent }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -3 }}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className={`p-2.5 bg-[#0d1117] rounded-lg border border-[#30363d] text-[#8b949e] transition-all ${accent}`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1117] rounded-xl border border-dashed border-[#30363d] p-4 text-[11px] space-y-1.5">
            <div className="flex gap-2"><span className="text-sky-400 font-bold">shivam@portfolio:~$</span><span className="text-[#c9d1d9]">whoami</span></div>
            <div className="text-[#8b949e] pl-4 border-l border-[#30363d]">Shivam Gangwar · Full-Stack Dev · LPU</div>
            <div className="flex gap-2 pt-1"><span className="text-sky-400 font-bold">shivam@portfolio:~$</span><span className="text-[#c9d1d9]">availability</span></div>
            <div className="text-sky-400 pl-4 border-l border-sky-500/30 animate-pulse">[ACTIVE] Open for opportunities</div>
          </div>

          <AnimatePresence>
            {log.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[#0d1117] rounded-xl border border-[#30363d] p-4 overflow-hidden"
              >
                <div className="text-[10px] text-[#484f58] uppercase tracking-widest mb-2">Transmission Log</div>
                <div className="space-y-0.5">
                  {log.map(entry => (
                    <motion.div key={entry.id} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
                      className={`text-[11px] ${entry.type === 'ok' ? 'text-sky-400' : entry.type === 'err' ? 'text-red-400' : 'text-[#8b949e]'}`}>
                      {entry.text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#161b22] rounded-xl border border-[#30363d] p-5 flex flex-col"
        >
          <div className="text-[10px] text-[#8b949e] uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-sky-400">//</span> compose_message.sh
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">

            <div>
              <label className="text-[10px] text-[#484f58] uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <FaUser className="text-sky-400" /> name
              </label>
              <input type="text" name="name" value={fields.name} onChange={handleChange} required
                placeholder="Your name"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2.5 text-sm text-[#c9d1d9] placeholder:text-[#484f58] focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/10 transition-all"
              />
            </div>

            <div>
              <label className="text-[10px] text-[#484f58] uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <FaAt className="text-sky-400" /> email
              </label>
              <input type="email" name="email" value={fields.email} onChange={handleChange} required
                placeholder="your@email.com"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2.5 text-sm text-[#c9d1d9] placeholder:text-[#484f58] focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/10 transition-all"
              />
            </div>

            <div className="flex-1">
              <label className="text-[10px] text-[#484f58] uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <FaCommentDots className="text-sky-400" /> message
              </label>
              <textarea name="message" value={fields.message} onChange={handleChange} required rows={5}
                placeholder="What's on your mind..."
                className="w-full h-full min-h-[120px] bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2.5 text-sm text-[#c9d1d9] placeholder:text-[#484f58] focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/10 transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-all border ${
                status === 'success' ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' :
                status === 'error'   ? 'bg-red-500/10 text-red-400 border-red-500/30' :
                'bg-sky-500/10 text-sky-400 border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.08)]'
              }`}
            >
              {status === 'sending' ? <><div className="w-3.5 h-3.5 border-2 border-sky-400/30 border-t-sky-400 rounded-full animate-spin" /> Sending...</> :
               status === 'success' ? <><FaCheck /> Delivered!</> :
               <><FaPaperPlane /> Send Message</>}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact