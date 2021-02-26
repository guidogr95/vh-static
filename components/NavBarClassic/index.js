import Link from 'next/link'
// Components
import NavMenu from './NavMenu'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
import { FaUserPlus, FaInfoCircle, FaSignInAlt, FaBars } from 'react-icons/fa'
// Theme
import { colors } from 'styles/theme'
import { useState } from 'react'

const NavBar = ({ navButtons }) => {

    const handleNav = () => {
        const navbar = document.getElementById('navbar')
        navbar.classList.toggle('active')
        if (navbar.classList.contains('active')) {
            navbar.style.maxHeight = `${navbar.scrollHeight}px`
        } else {
            navbar.style.maxHeight = '0px'
        }
    }

    return (
        <>
            <div className="navContainer" >
                <div className="secondary-nav-wrapper" >
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
                    font-family: Arial;
                    font-stretch: condensed;
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
                    .logoLink {
                        margin-left: 30px;
                        margin-bottom: 20px;
                        margin-top: 20px;
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