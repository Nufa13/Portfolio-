import { useCallback, useEffect, useRef, useState } from 'react'

export function useTypewriter(words, typeSpeed = 70, deleteSpeed = 38, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timerRef = useRef(null)

  const tick = useCallback(() => {
    const current = words[wordIndex % words.length]

    if (!deleting) {
      const next = current.slice(0, text.length + 1)
      setText(next)

      if (next === current) {
        timerRef.current = setTimeout(() => setDeleting(true), pause)
      } else {
        timerRef.current = setTimeout(tick, typeSpeed)
      }
    } else {
      const next = current.slice(0, text.length - 1)
      setText(next)

      if (next === '') {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        timerRef.current = setTimeout(tick, deleteSpeed)
      }
    }
  }, [words, wordIndex, deleting, text, typeSpeed, deleteSpeed, pause])

  useEffect(() => {
    timerRef.current = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timerRef.current)
  }, [tick, deleting, typeSpeed, deleteSpeed])

  return text
}