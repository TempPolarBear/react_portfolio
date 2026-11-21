type SplashScreenProps = {
  isExiting?: boolean
  onExitComplete?: () => void
}

function SplashScreen({ isExiting = false, onExitComplete }: SplashScreenProps) {
  return (
    <div
      className={`portfolio-splash-screen${isExiting ? " portfolio-splash-screen--exiting" : ""}`}
      role="status"
      aria-label="Initializing Portfolio..."
      aria-live="polite"
      aria-hidden={isExiting}
      onTransitionEnd={event => {
        if (
          isExiting &&
          event.target === event.currentTarget &&
          event.propertyName === "opacity"
        ) {
          onExitComplete?.()
        }
      }}
    >
      <div className="portfolio-splash-screen__content">
        <p className="portfolio-splash-screen__brand" aria-hidden="true">
          {"<Valeriia />"}
        </p>
        <p className="portfolio-splash-screen__message">Initializing Portfolio...</p>
        <div className="portfolio-splash-screen__loader" aria-hidden="true" />
      </div>
    </div>
  )
}

export default SplashScreen
