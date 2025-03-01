import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
    const location = useLocation();
  return (
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
  )
}

export default ScrollTop