import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router"
import AppRouter from "@/router/AppRouter"
import SplashScreen from "@/components/SplashScreen/SplashScreen"

const MINIMUM_SPLASH_DURATION_MS = 700

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true)
  const [isSplashExiting, setIsSplashExiting] = useState(false)

  useEffect(() => {
    let hasRenderedFirstFrame = false
    let hasMetMinimumDuration = false
    let exitFrameId: number | null = null

    const beginExitWhenReady = () => {
      if (!hasRenderedFirstFrame || !hasMetMinimumDuration || exitFrameId !== null) return

      exitFrameId = window.requestAnimationFrame(() => {
        exitFrameId = null

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setIsSplashVisible(false)
          return
        }

        setIsSplashExiting(true)
      })
    }

    const firstFrameId = window.requestAnimationFrame(() => {
      hasRenderedFirstFrame = true
      beginExitWhenReady()
    })
    const minimumDurationTimer = window.setTimeout(() => {
      hasMetMinimumDuration = true
      beginExitWhenReady()
    }, MINIMUM_SPLASH_DURATION_MS)

    return () => {
      window.cancelAnimationFrame(firstFrameId)
      if (exitFrameId !== null) window.cancelAnimationFrame(exitFrameId)
      window.clearTimeout(minimumDurationTimer)
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {isSplashVisible && (
        <SplashScreen
          isExiting={isSplashExiting}
          onExitComplete={() => setIsSplashVisible(false)}
        />
      )}
    </div>
  )
}
 
export default App