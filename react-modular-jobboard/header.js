import React from 'react'
import Logo from '../Images/picture1.png'

export const Header = () => {
  return (
    <header>
        <img style={{width: "200px", height:"auto"}} src={Logo} alt=''></img>
        <a href='/'>Home</a>
    </header>
  )
}
