import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

type PreviewModeProps = {
  isActive: boolean
}

const PreviewMode: React.FC<PreviewModeProps> = ({ isActive }) => {
  const { reload } = useRouter()
  const position = React.useRef<number>(0)

  const handleKeyPress = React.useCallback(
    async (e: KeyboardEvent) => {
      if (e.keyCode === codes[position.current]) {
        position.current = position.current += 1
        if (position.current === codes.length) {
          position.current = 0
          if (isActive) {
            await fetch('/api/exit-preview')
            reload()
          } else {
            const secret = prompt('Enter preview mode secret code')
            const res = await fetch('/api/enter-preview', {
              method: 'POST',
              body: JSON.stringify({ secret }),
            })
            const data = await res.json()
            if (data.ok) {
              reload()
            } else {
              alert(data.message)
            }
          }
        }
      } else {
        position.current = 0
      }
    },
    [isActive, reload]
  )

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <AnimatePresence>
      {isActive ? (
        <motion.div
          initial={{ opacity: 0, bottom: 0 }}
          animate={{ opacity: 1, bottom: 24 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-sm right-sm h-banner bg-cinder text-whisper text-sm flex justify-between items-center p-md z-20 rounded-md font-medium"
        >
          Preview mode enabled
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default PreviewMode
