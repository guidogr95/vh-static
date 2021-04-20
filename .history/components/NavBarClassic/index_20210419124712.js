import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
// Components
import NavMenu from './NavMenu'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
import LogoIcon from 'public/assets/media/brand/std-color.svg'
import { FaUserPlus, FaInfoCircle, FaSignInAlt, FaBars } from 'react-icons/fa'
// Theme
import { colors, fonts } from 'styles/theme'

const NavBar = ({ navButtons }) => {

    const secondaryNavRef = useRef(null)
    const navContainerRef = useRef(null)
    const [sticky, setSticky] = useState(false)

    const handleNav = () => {
        const navbar = document.getElementById('navbar')
        navbar.classList.toggle('active')
        if (navbar.classList.contains('active')) {
            navbar.style.maxHeight = `${navbar.scrollHeight}px`
        } else {
            navbar.style.maxHeight = '0px'
        }
    }

    const scrollHandler = () => {
        if (!secondaryNavRef?.current) return
        console.log(window.scrollY, secondaryNavRef.current.offsetHeight, sticky)
        const navContainer = navContainerRef.current
        if (window.scrollY >= secondaryNavRef.current.offsetHeight) {
            !navContainer.classList.contains('sticky') && setSticky(true)
        } else {
            navContainer.classList.contains('sticky') && setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <>
            <div className={`navContainer${sticky ? ' sticky' : ''}`} ref={navContainerRef} >
                <div className="secondary-nav-wrapper" ref={secondaryNavRef} >
                    <div className="secondary-nav" >
                        <div className="sec-item" >
                            <a href="https://vexxhost.com/contact-us/" rel="noopener noreferer" >
                                Contact Us
                            </a>
                        </div>
                        <div className="sec-item" >
                            <a href="https://status.vexxhost.com/" rel="noopener noreferer" >
                                <FaInfoCircle />
                                <span>Status</span>
                            </a>
                        </div>
                        <div className="sec-item signup" >
                            <a href="https://secure.vexxhost.com/billing/register.php?flow=cloudconsole" rel="noopener noreferer" >
                                <FaUserPlus />
                                <span>Sign Up</span>
                            </a>
                        </div>
                        <div className="sec-item" >
                            <a href="https://secure.vexxhost.com/billing/clientarea.php" rel="noopener noreferer" >
                                <FaSignInAlt />
                                <span>Sign In</span>
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="top" >
                    <Link prefetch={false} href="/" >
                        <a className="logoLink">
                            <img className="navLogo" alt="standard-logo-horizontal" src={Logo} />
                            <img className="navLogo sticky" alt="standard-logo-icon" src={LogoIcon} />
                        </a>
                    </Link>
                    <button
                        className="hamburger"
                        onClick={handleNav}
                    >
                        <FaBars />
                    </button>
                    <NavMenu
                        navButtons={navButtons}
                    />
                </nav>
            </div>
            <style jsx>{`
                .secondary-nav-wrapper {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    padding-left: 30px;
                    padding-right: 30px;
                    border-bottom: 1px solid #e5e5e5;
                }
                .sec-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 52px;
                    padding: 0 13px;
                    color: ${colors.day};
                    font-weight: bold;
                    border-right: 1px solid #e5e5e5;
                }
                .sec-item:last-of-type {
                    border-right: none;
                }
                .sec-item a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    letter-spacing: 0.01em;
                }
                .sec-item :global(svg) {
                    margin-right: 12px;
                    font-size: 0.9em;
                }
                .sec-item.signup :global(svg) {
                    margin-right: 12px;
                    font-size: 1.1em;
                }
                .navContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: white;
                    position: relative;
                    overflow: visible;
                    backface-visibility: hidden;
                    transition: background-color .25s ease-in-out;
                    border-bottom: 1px solid transparent;
                    font-family: ${fonts.base};
                    font-stretch: condensed;
                    z-index: 3;
                }
                nav {
                    max-width: 1100px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 91px;
                    position: relative;
                }
                .secondary-nav {
                    max-width: 1100px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
                .navLogo {
                    width: 275px;
                }
                .navLogo.sticky {
                    display: none;
                    width: initial;
                }
                .top :global(.hamburger) {
                    display: none;
                    color: #DADADA;
                    font-size: 1.313em;
                    align-self: flex-start;
                    position: absolute;
                    top: 20px;
                    right: 30px;
                    background: none;
                    border: none;
                    outline: 0px;
                    padding: 0;
                }
                .navContainer.sticky .secondary-nav-wrapper {
                    visibility: hidden;
                    position: absolute;
                    left: 100%;
                }
                .navContainer.sticky {
                    position: fixed;
                    background: ${colors.trueWhite};
                    width: 100%;
                }
                .navContainer.sticky nav {
                    height: 65px;
                    box-shadow: rgba(0, 0, 0, .12) 0 1px 3px;
                }
                .navContainer.sticky .navLogo {
                    display: none;
                }
                .navContainer.sticky .navLogo.sticky {
                    display: initial;
                }
                .navContainer.sticky .logoLink,
                .navContainer.sticky .navLogo.sticky {
                    height: 100%;
                }
                .navContainer.sticky :global(.menuItem) {
                    font-size: 14.5px;
                    color: ${colors.stickyNavColor};
                    padding-right: 65px;
                }
                @media screen and (max-width: 1120px) {
                    nav {
                        padding: 0 30px;
                    }
                }
                @media screen and (max-width: 1090px) {
                    .top :global(.hamburger) {
                        display: initial;
                    }
                    nav {
                        padding: 0;
                        height: unset;
                        flex-wrap: wrap;
                    }
                    .navContainer.sticky nav {
                        height: 95px;
                    }
                    .logoLink {
                        margin-left: 30px;
                        margin-bottom: 20px;
                        margin-top: 20px;
                    }
                    .navContainer.sticky .logoLink {
                        padding: 20px 0;
                    }
                }
                @media screen and (max-width: 800px) {
                    .secondary-nav {
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    .secondary-nav-wrapper {
                        padding-left: 0px;
                        padding-right: 0px;
                    }
                }
            `}</style>
        </>
    )
}

export default NavBar