import { useState, useEffect } from 'react'

const MenuActivated = (initialState = false) => {
  const [visible, setVisibility] = useState(initialState)

  const toggle = () => setVisibility((visible) => !visible)
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [visible])

  const removeHidden = () => {
    document.body.style.overflow = 'scroll'
    setVisibility(false)
  }

  return { visible, toggle, removeHidden }
}

export { MenuActivated }
