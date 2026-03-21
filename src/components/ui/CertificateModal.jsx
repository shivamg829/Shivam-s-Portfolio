import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt, FaCheckCircle, FaShare } from 'react-icons/fa'
import { useState } from 'react'

const CertificateModal = ({ cert, isOpen, onClose }) => {
  const [flipped, setFlipped] = useState(false)

  if (!isOpen || !cert) return null

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${cert.title} - ${cert.issuer}`,
        url: cert.verificationUrl
      })
    } else {
      navigator.clipboard.writeText(cert.verificationUrl)
      alert('Verification URL copied!')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full max-h-[90vh] overflow-y-auto z-50"
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gold-500/50 max-h-[90vh] overflow-hidden"
              style={{ perspective: '1000px' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Front Side */}
              <motion.div
                className="absolute inset-0 backface-hidden p-8 flex flex-col"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gold-500 to-orange-500 bg-clip-text text-transparent mb-2">
                      {cert.title}
                    </h2>
                    <div className="flex items-center text-xl text-gray-700 dark:text-gray-300">
                      <span className="font-semibold mr-2">{cert.issuer}</span>
                      <span className="text-sm opacity-75">• {cert.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFlipped(!flipped)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Flip
                    </button>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-gold-50 to-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-gold-600">{cert.grade}</div>
                    <div className="text-sm text-gray-600">Grade</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                    <FaCheckCircle className="text-2xl text-emerald-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-emerald-800">Verified</div>
                  </div>
                  <div className="text-center p-4 rounded-xl border">
                    <div className="text-lg font-mono text-gray-800">{cert.credentialId}</div>
                    <div className="text-xs text-gray-500">ID</div>
                  </div>
                  <div className="text-center p-4 rounded-xl border">
                    <div className="text-sm">{cert.category}</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    Skills <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{cert.skills.length}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full shadow">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{cert.description}</p>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-gold-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex-1 min-w-[140px] justify-center"
                  >
                    <FaDownload className="mr-2" />
                    Download PDF
                  </a>
                  <button
                    onClick={handleShare}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex-1 min-w-[140px] justify-center"
                  >
                    <FaShare className="mr-2" />
                    Share
                  </button>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex-1 min-w-[140px] justify-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Verify
                  </a>
                </div>
              </motion.div>

              {/* Back Side */}
              <motion.div
                className="absolute inset-0 backface-hidden p-8 flex flex-col"
                initial={{ rotateY: 180 }}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="h-full">
                  <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                    {/* PDF Preview Placeholder - replace with react-pdf */}
                    <div className="text-center text-gray-500">
                      <FaDownload className="text-4xl mx-auto mb-4" />
                      <p>PDF Preview</p>
                      <p className="text-sm">{cert.pdfUrl}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setFlipped(!flipped)}
                    className="w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors mb-4"
                  >
                    Flip Back
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CertificateModal

