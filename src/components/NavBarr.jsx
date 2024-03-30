import './NavBarr.css'
import { ThemeContext } from './Context/theme'
import { useContext } from 'react'
import sun from './../assets/icons/sun.svg'
import moon from './../assets/icons/moon.svg'
import { useState } from 'react'
const NavBarr = ({menu , logo, btn , menuside }) => {
    const [{theme , isDark},toggleTheme] = useContext(ThemeContext)
  console.log("theme",theme)
  const [show, setShow] = useState(false)
  return (
    <nav style={{background : theme.background , color : theme.color}}>
  <div className='containerlogo'>
    <img src={isDark? `${sun}` : `${moon}` } onClick={toggleTheme} alt="" id='Mode' />
    <h1 className='logo'>{logo}</h1><h1 className='logotext'><span style={{fontWeight:700}}>M</span>umair</h1></div>
       <div className='list'>
       <ul className='ul1'>
            {menu.map((element,index)=>{return(
                <li key={index}>{element.title}</li>
            )})}
        </ul>
        <button>{btn}</button>
        <button class="icon" onClick={()=>setShow(true)}><i class="fa-solid fa-bars"></i></button>
        </div>
        
{show?<div className='sidebar'>
        <ul className='ul2'>
        <div className='sidebarlogo'><img src={isDark? `${sun}` : `${moon}` } onClick={toggleTheme} alt="" /> <div onClick={()=>setShow(false)}><i class="fa-solid fa-xmark fa-2xl"></i></div></div> 
            {menuside.map((element,index)=>{return(
                <li key={index}>{element.titleside}</li>
            )})}
        </ul>
        </div>:null}

    </nav>
  )
}

export default NavBarr