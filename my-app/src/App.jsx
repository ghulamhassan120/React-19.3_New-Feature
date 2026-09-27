import { Fragment, useEffect, useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'

function App() {
  const menuRef=useRef(null)
  useEffect(()=>{
    menuRef.current?.focus();
  },[])
  return (
    <Fragment ref={menuRef}>
      <button>Profile</button>
      <button>Logout</button>
    </Fragment>
  )
}

export default App
