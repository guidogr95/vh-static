import { useEffect } from 'react'
// Utils
import Link from 'next/link'
import getPaths from 'utils/getPaths'
import useWindowSize from 'utils/useWindowSize'
import useDebounce from 'utils/useDebounce'
// Assets
import { FiChevronDown } from 'react-icons/fi'
import ChevronDown from 'public/assets/media/icons/down-chevron.svg'
import { RiArrowDropRightFill } from 'react-icons/ri'
// Theme
import { colors } from 'styles/theme'
// Constants
import { host, prodHost } from 'config/constants'

const NavButton = ({ slug, label, submenu, index, linkType }) => {

    const windowSize = useWindowSize()

    const debouncedWindowSize = useDebounce(windowSize, 1000)

    useEffect(() => {
        const dropdown = document.getElementById(`dropdown${index + 1}`)
        const navItem = document.getElementById(`navItem${index + 1}`)

        const firstNavItem = document.getElementById('navItem1')
        // dropdown.style.left
        if (submenu.length === 0) return
        if (submenu.length === 1) {
            dropdown.style.left = `${navItem.offsetLeft}px`
            dropdown.style.width = '200px'
        }
        if (submenu.length > 1) {
            dropdown.style.left = `${firstNavItem.offsetWidth}px`
            dropdown.style.width = `calc(100% - ${firstNavItem.offsetWidth}px)`
        }
    }, [debouncedWindowSize])

    const toggleMenu = (e) => {
        if (!e) return

        const navbar = document.getElementById('navbar')
        let sibling = null

        if (e.target.classList.contains('submenu')) {
            sibling = e.target.parentElement.nextElementSibling
        } else {
            sibling = e.target.nextElementSibling
        }

        if (!sibling) return

        sibling.classList.toggle('active')

        if (sibling.classList.contains('active')) {
            sibling.style.maxHeight = `${sibling.scrollHeight}px`
            navbar.style.maxHeight = `${navbar.scrollHeight + sibling.scrollHeight}px`
            if (e.target.classList.contains('submenu')) {
                const parent = sibling.parentElement.parentElement
                parent.style.maxHeight = `${parent.scrollHeight + sibling.scrollHeight}px`
            }
        } else {
            sibling.style.maxHeight = '0px'
            navbar.style.maxHeight = `${navbar.scrollHeight}px`
            if (e.target.classList.contains('submenu')) {
                const parent = sibling.parentElement.parentElement
                parent.style.maxHeight = `${parent.scrollHeight}px`
            }
        }
    }

    const clickLabel = (e) => {
        if (!e?.target?.children[0]) return
        e.target.children[0].click()
    }

    return (
        <>
            <li className="menuItem-parent" id={`navItem${index + 1}`} >
                <Link
                    prefetch={false}
                    href={`${linkType === 'Custom' ? slug : process.env.NODE_ENV === 'development' ? `${host}${slug}` : `${prodHost}${slug}`}`}
                >
                    <a className="menuItem main" >
                        <span>{label}</span>{(submenu && submenu?.length > 0) && <FiChevronDown />}
                    </a>
                </Link>
                { (submenu && submenu?.length > 0) &&
                    <>
                        <button className="mobile-arrow" onClick={toggleMenu} ></button>
                        <div className="dropdown" id={`dropdown${index + 1}`} >
                            {submenu.map((item, index) => {
                                if (!item?.SubMenuItem || !item?.SubMenuItem?.length > 0) return null
                                return (
                                    <ul key={index} >
                                        {item.Label && <div onClick={clickLabel} className="submenu-label" >{item.Label} <button className="mobile-arrow submenu" onClick={toggleMenu} ></button></div>}
                                        <div className={`submenu-dropdown${item.Label ? ' list' : ''}`} >
                                            {item.SubMenuItem.map((subItem, i) => {
                                                const fullSlug = subItem.LinkType === 'Custom' ? subItem?.CustomLink || '/' : Object.keys(subItem?.Page || {}).length === 0 ? '/' : getPaths(subItem.Page, true)
                                                return (
                                                    <li key={i}>
                                                        <Link prefetch={false} href={`${fullSlug || '/'}`} >
                                                            <a>
                                                                <RiArrowDropRightFill/> <span>{subItem.Label}</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </div>

                                    </ul>
                                )
                            })}
                        </div>
                    </>
                }
            </li>
            <style jsx>{`
                .menuItem-parent {
                    display: flex;
                    justify-content: center;
                }
                .menuItem-parent ul {
                    list-style: none;
                }
                .menuItem-parent:last-of-type > :global(a) {
                    text-transform: uppercase;
                }
                .menuItem {
                    padding-right: 35px;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: black;
                    transition: .3s ease-out all;
                    line-height: 1;
                    font-size: 1.05em;
                    letter-spacing: 0.0428em;
                }
                li:last-of-type .menuItem {
                    padding-right: 0;
                }
                .menuItem :global(svg) {
                    margin-left: 4px;
                }
                .menuItem:hover {
                    color: ${colors.day};
                }
                .dropdown ul {
                    width: ${submenu.length > 1 ? '50%' : '100%'};
                    padding: ${submenu.length > 1 ? '29px 0' : '0'};
                }
                .dropdown {
                    opacity: 0;
                    position: absolute;
                    overflow: hidden;
                    top: 100%;
                    border-radius: 2px;
                    transition: all 0.5s;
                    border-top: 3px solid ${colors.day};
                    will-change: opacity;
                    z-index: 2;
                    width: 200px;
                    background: white;
                    display: flex;
                    visibility: hidden;
                }
                .menuItem-parent:hover .dropdown {
                    opacity: 1;
                    visibility: visible;
                }
                .dropdown li {
                    white-space: nowrap;
                    font-stretch: semi-expanded;
                    display: flex;
                    align-items: center;
                }
                .dropdown li :global(svg) {
                    font-size: 1.8em;
                    display: ${submenu.length > 1 ? 'initial' : 'none'};
                }
                .dropdown li a {
                    padding: ${submenu.length > 1 ? '5px 34px' : '5px 20px'};
                    width: 100%;
                    display: block;
                    font-size: 13px;
                    color: #2a1659;
                    letter-spacing: 0.01em;
                    transition: .3s ease-out all;
                }
                .dropdown li a:hover {
                    background: #f8f8f8;
                }
                .submenu-label {
                    letter-spacing: 0.02em;
                    color: ${colors.lightGray};
                    padding: 0 34px 15px 34px;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: semi-expanded;
                    position: relative;
                }
                .menuItem-parent :global(.mobile-arrow) {
                    display: none;
                    font-size: 1.3em;
                }
                @media screen and (max-width: 1090px) {
                    .submenu-label {
                        border-top: 1px solid #dadada;
                    }
                    .dropdown li :global(svg) {
                        display: none;
                    }
                    .submenu-label:before {
                        content: '-';
                        margin-right: 2px;
                    }
                    .dropdown li a span:before {
                        content: '--';
                        margin-right: 2px;
                    }
                    .submenu-label,
                    .dropdown li a,
                    .dropdown li {
                        line-height: 1;
                        font-size: 1.05em;
                        letter-spacing: 0.0428em;
                        padding: 0;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-stretch: condensed;
                        color: #2a1659;
                    }
                    .submenu-dropdown.list {
                        max-height: 0;
                        overflow: hidden;
                        transition: 1000ms ease max-height;
                    }
                    .submenu-dropdown li {
                        border-top: 1px solid #dadada;
                    }
                    .dropdown ul {
                        flex-direction: column;
                        width: 100% !important;
                        padding: 0 !important;
                    }
                    .menuItem {
                        height: 50px;
                        text-transform: capitalize;
                        padding-right: 0px; 
                        width: 100%;
                    }
                    li {
                        position: relative;
                    }
                    .menuItem :global(svg) {
                        display: none;
                    }
                    .menuItem-parent :global(.mobile-arrow) {
                        position: absolute;
                        right: 0;
                        display: initial;
                        z-index: 3;
                        top: 0;
                        width: 40px;
                        height: 50px;
                        background: url(${ChevronDown});
                        background-size: 28%;
                        background-repeat: no-repeat;
                        background-position: center;
                        border: none;
                        outline: 0px;
                    }
                    .menuItem-parent,
                    .dropdown ul {
                        background: #F9F9F9;
                    }
                    .menuItem-parent {
                        flex-direction: column;
                        align-items: center;
                        border-bottom: 1px solid #dadada;
                        border-top: 1px solid #dadada;
                    }
                    .dropdown {
                        width: 100% !important;
                        position: relative;
                        opacity: 1;
                        visibility: visible !important;
                        left: 0 !important;
                        flex-direction: column;
                        text-align: center;
                        border-top: none;
                        max-height: 0;
                        overflow: hidden;
                        transition: 1000ms ease max-height;
                    }
                }
            `}</style>
        </>
    )
}

export default NavButton