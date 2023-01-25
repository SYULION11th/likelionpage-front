import React, { useState, useEffect } from 'react'
 
const TopButton = () => {
  const [showButton, setShowButton] = useState(false);
 
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
 
  }
  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 700) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener("scroll", ShowButtonClick)
    return () => {
      window.removeEventListener("scroll", ShowButtonClick)
    }
  }, [])
  return (
    <>
      {showButton &&
          <div className="ScrollTop">
            <button className='ScrollButton' onClick={scrollToTop} type="button">^</button>
          </div>
      }
    </>
  )
}

export default TopButton