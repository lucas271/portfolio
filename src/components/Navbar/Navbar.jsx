import { useEffect, useState } from 'react'

import './styles/styles.scss'

const Navbar = () => {
    const [stickyNavbar, setStickyNavbar] = useState(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [isChecked, setIsChecked] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 0){
            setStickyNavbar(true)
        }
        else{
            setStickyNavbar(false)
        }
    } 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth)
        })
    }, [])


    return <>
        <header className="navbar_container">
            <nav data-testid='navbar' className={stickyNavbar ? 'navbar sticky-navbar' : 'navbar'}>
                <a className='home' href="#home">
                    <img src="https://img.icons8.com/plumpy/36/000000/l.png" alt='logo (Letter L)'/>
                </a>


                {windowSize > 700 ? 
                <ul>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>:
                <>
                    <input type="checkbox" className='checkbox' value={isChecked}/>
                    <div className="hamburger-lines" onClick={() => setIsChecked(!isChecked)}>
                        <span className={isChecked ? 'line line1': 'line'}></span>
                        <span className={isChecked ? 'line line2': 'line'}></span>
                        <span className={isChecked ? 'line line3': 'line_last'}></span>

                        {isChecked && <>
                            <ul className='navbar_hamburguer_items'>
                                <li><a href="#skills">Habilidades</a></li>
                                <li><a href="#experience">Experiência</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                         </>}
                    </div>  
                </>

                }






            </nav>


        </header>
    </>
}

export default Navbar