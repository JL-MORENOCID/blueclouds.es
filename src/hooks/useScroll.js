import {useEffect, useState} from 'react'
import debounce from 'just-debounce-it'

export default function useScroll( {show = true} = {}) {

  const [navbar, setNavbar] = useState({show})

  const handleScroll = debounce(() => {
    setNavbar({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > navbar.scrollPos
    })
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return navbar
}