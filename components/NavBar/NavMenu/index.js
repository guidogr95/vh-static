// Components
import NavButton from 'components/NavBar/NavButton'
import getPaths from 'utils/getPaths'

const NavMenu = ({ navButtons }) => {
    return (
        <>
            <ul className="cool" >
                {navButtons && navButtons.map((button, index) => {
                    const fullSlug = button?.Page ? getPaths(button?.Page, true) : '/'
                    return (
                        <NavButton
                            key={button?.Page?.Slug || index}
                            slug={fullSlug}
                            label={button.Label}
                            submenu={button?.NavSubmenu}
                        />
                    )
                })}
            </ul>
            <style jsx>{`
                ul {
                    display: flex;
                    list-style: none;
                    height: 100%;
                }
            `}</style>
        </>
    )
}

export default NavMenu