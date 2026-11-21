
import { useEffect, useRef, useState } from "react"
import { http } from "@/services/http"

type FortuneResponse = { fortune: string }

const TYPING_DURATION_MS = 2250

function isFortuneResponse(value: unknown): value is FortuneResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "fortune" in value &&
    typeof value.fortune === "string" &&
    value.fortune.trim().length > 0
  )
}

function Prediction() {
  const API = "https://dumbapis.com/fortune"
  const [prediction, setPrediction] = useState("Your fortune is waiting...")
  const [typedPrediction, setTypedPrediction] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [typing, setTyping] = useState(false)
  const activeRequestRef = useRef(0)
  const requestControllerRef = useRef<AbortController | null>(null)
  const typingTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)
  const cancelTypingRef = useRef<(() => void) | null>(null)
  const holdLoadingRef = useRef(false)

  useEffect(() => {
    return () => {
      activeRequestRef.current += 1
      requestControllerRef.current?.abort()
      requestControllerRef.current = null

      if (typingTimerRef.current !== null) {
        window.clearTimeout(typingTimerRef.current)
      }

      typingTimerRef.current = null
      cancelTypingRef.current?.()
      cancelTypingRef.current = null
    }
  }, [])

  const typePrediction = (text: string, requestId: number) => new Promise<void>((resolve) => {
    const characters = Array.from(text)
    let characterIndex = 0
    let finished = false

    const finish = (completed: boolean) => {
      if (finished) return
      finished = true

      if (typingTimerRef.current !== null) {
        window.clearTimeout(typingTimerRef.current)
      }

      typingTimerRef.current = null
      cancelTypingRef.current = null

      if (requestId === activeRequestRef.current) {
        setTyping(false)

        if (completed) {
          holdLoadingRef.current = false
          setLoading(false)
          setRevealed(true)
        }
      }

      resolve()
    }

    cancelTypingRef.current = () => finish(false)

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || characters.length === 0) {
      setTypedPrediction(text)
      finish(true)
      return
    }

    setTyping(true)
    const interval = TYPING_DURATION_MS / characters.length
    const startedAt = window.performance.now()

    const typeNextCharacter = () => {
      if (requestId !== activeRequestRef.current) {
        finish(false)
        return
      }

      const elapsed = window.performance.now() - startedAt
      characterIndex = Math.min(
        characters.length,
        Math.max(characterIndex + 1, Math.floor(elapsed / interval)),
      )
      setTypedPrediction(characters.slice(0, characterIndex).join(""))

      if (characterIndex === characters.length) {
        finish(true)
        return
      }

      const nextCharacterAt = startedAt + (characterIndex + 1) * interval
      typingTimerRef.current = window.setTimeout(
        typeNextCharacter,
        Math.max(0, nextCharacterAt - window.performance.now()),
      )
    }

    typingTimerRef.current = window.setTimeout(typeNextCharacter, interval)
  })

  const handlePrediction = async () => {
    const requestId = ++activeRequestRef.current
    requestControllerRef.current?.abort()
    const controller = new AbortController()
    requestControllerRef.current = controller

    if (typingTimerRef.current !== null) {
      window.clearTimeout(typingTimerRef.current)
    }

    typingTimerRef.current = null
    cancelTypingRef.current?.()
    cancelTypingRef.current = null
    holdLoadingRef.current = false
    setTypedPrediction("")
    setTyping(false)
    setLoading(true)
    setError(false)
    setRevealed(false)

    try {
      await http.get(API, { cache: "no-store", signal: controller.signal }).json()
      .then(async (response: unknown) => {
        if (requestId !== activeRequestRef.current) return

        if (!isFortuneResponse(response)) {
          throw new Error("Invalid fortune response")
        }

        const nextPrediction = response.fortune
        setPrediction(nextPrediction)
        holdLoadingRef.current = true
        await typePrediction(nextPrediction, requestId)
      }).catch(() => {
        if (controller.signal.aborted || requestId !== activeRequestRef.current) return

        setError(true)
        throw new Error("Request failed")
      }).finally(() => {
        if (requestControllerRef.current === controller) {
          requestControllerRef.current = null
        }

        if (requestId === activeRequestRef.current && !holdLoadingRef.current) {
          setLoading(false)
          setRevealed(true)
        }
      })
    } catch {
      if (requestId === activeRequestRef.current) {
        setError(true)
        setLoading(false)
        setRevealed(true)
      }
    } finally {
      if (requestId === activeRequestRef.current && !holdLoadingRef.current) {
        setLoading(false)
        setRevealed(true)
      }
    }
  }

  return (
    <article className="card utility-card">
      <div className="card-header">
        <h5 className="fw-bold m-0 p-0"><i className="fa-solid fa-wand-magic-sparkles me-2"></i>Fortune Cookie</h5>
      </div>

      <div className="card-body d-flex flex-column text-center">
        {/* Animated cookie */}
        <div className={`fortune-cookie-container d-flex align-items-center justify-content-center mx-auto my-2 ${loading ? "fortune-magic" : ""}`}>
          <img
              src="/assets/img/utils/fortune-cookie.webp"
              alt="Golden fortune cookie"
              className={`fortune-cookie-img ${loading ? "fortune-shake" : revealed ? "fortune-bounce" : "fortune-float"}`}
            />
        </div>

        {/* Fortune message */}
        <div className="prediction-box d-flex align-items-center bg-body-tertiary my-3">
          <p key={loading && !typing ? "loading" : prediction} className={`utility-result mb-0 ${error ? "text-danger" : ""} ${revealed ? "fortune-reveal" : ""}`} role="status" aria-live="polite">
            {error ? "Не удалось получить предсказание. Попробуйте ещё раз." : typing ? typedPrediction || "Revealing your fortune..." : loading ? "Revealing your fortune..." : prediction}
          </p>
        </div>

        <button className={`btn btn-primary w-100 shadow-sm zoomInOut ${loading ? "fortune-button-loading" : ""}`} type="button" onClick={handlePrediction} disabled={loading}>
          <i className="fa-solid fa-wand-magic-sparkles me-2"></i>{loading ? "Loading..." : "Reveal My Fortune"}
        </button>

        <p className="small text-body-secondary mt-3 mb-0">Just for fun!</p>
      </div>
    </article>
  )
}

export default Prediction
