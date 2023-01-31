import React, { useState, useEffect } from 'react'

const TopButton = () => {
  const [showButton, setShowButton] = useState(true);

  const scrollToDown = () => {
    window.scroll({
      top: 100000,
      behavior: 'smooth'
    })

  }
  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY < 700) {
        setShowButton(true)
      } else {
        setShowButton(true)
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
          <div>
            <button className='MainButton' onClick={scrollToDown} type="button">아기사자 지원하기</button>
          </div>
      }
    </>
  )
}

export default TopButton