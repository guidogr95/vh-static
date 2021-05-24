import { useEffect } from 'react'
import Link from 'next/link'
// Components
import NavMenu from './NavMenu'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
// Theme
import { desktopMaxWidth } from 'styles/theme'

const NavBar = ({ navButtons }) => {

    useEffect(() => {
        const triggers = document.querySelectorAll('.cool > li')
        const background = document.querySelector('.dropdownBackground')
        const nav = document.querySelector('.navContainer')

        const handleEnter = (e) => {
            const _this = e.target
            const dropdown = _this.querySelector('.dropdown')
            if (!dropdown) return
            _this.classList.add('trigger-enter')
            setTimeout(() => _this.classList.contains('trigger-enter') && _this.classList.add('trigger-enter-active'), 150)
            background.classList.add('open')

            const dropdownCoords = dropdown?.getBoundingClientRect()
            const navCoords = nav.getBoundingClientRect()

            const coords = {
                height: dropdownCoords.height,
                width: dropdownCoords.width,
                top: dropdownCoords.top - navCoords.top,
                left: dropdownCoords.left - navCoords.left
            }
            background.style.setProperty('width', `${coords.width}px`)
            background.style.setProperty('height', `${coords.height}px`)
            background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
        }

        const handleLeave = (e) => {
            const _this = e.target
            _this.classList.remove('trigger-enter', 'trigger-enter-active')
            background.classList.remove('open')
        }

        triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
        triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))

        return () => {
            triggers.forEach(trigger => trigger.removeEventListener('mouseenter', handleEnter))
            triggers.forEach(trigger => trigger.removeEventListener('mouseleave', handleLeave))
        }
    }, [])

    return (
        <>
            <div className="navContainer" >
                <div className="dropdownBackground" />
                <nav className="top" >
                    <Link prefetch={false} href="/" >
                        <a className="logoLink" >
                            <img className="navLogo" alt="standard-logo-horizontal" src={Logo} />
                        </a>
                    </Link>
                    <NavMenu navButtons={navButtons} />
                </nav>
            </div>
            <style jsx>{`
                .dropdownBackground {
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #fff;
                    border-radius: 4px;
                    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
                    transition: all 0.3s, opacity 0.1s, transform 0.2s;
                    transform-origin: 50% 0;
                    display: flex;
                    justify-content: center;
                    opacity: 0;
                    z-index: 1;
                }
                .dropdownBackground.open {
                    opacity: 1;
                }
                .navContainer {
                    display: flex;
                    justify-content: center;
                    background: white;
                    position: relative;
                }
                nav {
                    min-height: 101px;
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .navLogo {
                    width: 250px;
                }
                .logoLink {
                    margin-right: 25px;
                    padding: 5px 0px 10px;
                }
            `}</style>
        </>
    )
}

export default NavBar