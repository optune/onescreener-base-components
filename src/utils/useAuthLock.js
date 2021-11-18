import { useState, useEffect } from 'react'

const getLockOptions = ({ type, isDesktop, logo, LOCK_CONTAINER_ID }) => ({
  type,
  logo,
  containerId: isDesktop ? LOCK_CONTAINER_ID : null,
})

export const useAuthLock = ({
  lockContainerId,
  logoLock,
  onLogin,
  isDesktop,
  isAutoLogin = false,
  isAutoSignup = false,
}) => {
  const LOCK_CONTAINER_ID = lockContainerId || 'login-container'

  const [showLock, setShowLock] = useState(false)

  const handleLogin = () => {
    setShowLock(true)
    onLogin(getLockOptions({ type: 'login', isDesktop, logo: logoLock, LOCK_CONTAINER_ID }))
  }
  const handleSignup = () => {
    setShowLock(true)
    onLogin(getLockOptions({ type: 'signup', isDesktop, logo: logoLock, LOCK_CONTAINER_ID }))
  }

  const handleClose = () => {
    setShowLock(false)

    // Get the container element
    var container = document.getElementById(LOCK_CONTAINER_ID)

    // As long as <ul> has a child node, remove it
    if (container?.hasChildNodes()) {
      container.removeChild(container.firstChild)
    }

    // Remove url hash
    window.history.replaceState({}, document.title, '.')
  }

  useEffect(() => {
    if (isAutoLogin) handleLogin()
    if (isAutoSignup) handleSignup()
  }, [isAutoLogin, isAutoSignup])

  return {
    showLock,
    setShowLock,
    handleLogin,
    handleSignup,
    handleClose,
    LOCK_CONTAINER_ID,
  }
}
