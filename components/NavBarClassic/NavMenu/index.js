// Components
import NavButton from '../NavButton'
import getPaths from 'utils/getPaths'

const NavMenu = ({ navButtons }) => {
    return (
        <>
            <ul className="cool" id="navbar">
                {navButtons && navButtons.map((button, index) => {
                    const fullSlug = button.LinkType === 'Custom' ? button?.CustomLink || '/' : button?.Page ? getPaths(button?.Page, true) : '/'
                    return (
                        <NavButton
                            key={button?.Page?.Slug || index}
                            slug={fullSlug}
                            label={button.Label}
                            submenu={button?.NavSubmenu}
                            index={index}
                            linkType={button.LinkType}
                        />
                    )
                })}
            </ul>
            <style jsx>{`
                ul {
                    display: flex;
                    list-style: none;
                    height: 100%;
                    position: relative;
                }
                @media screen and (max-width: 1090px) {
                    ul {
                        max-height: 0;
                        overflow: hidden;
                        flex-direction: column;
                        width: 100%;
                        transition: 1000ms ease max-height;
                    }
                    ul.active {
                        max-height: 00px;
                    }
                }
            `}</style>
        </>
    )
}

export default NavMenu