import Link from 'next/link'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'

const SimpleNav = () => {
    return (
        <>
            <header>
                <nav>
                    <Link prefetch={false} href="/" >
                        <a className="logoLink" >
                            <img className="navLogo" alt="standard-logo-horizontal" src={Logo} />
                        </a>
                    </Link>
                </nav>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 3;
                }
                nav {
                    min-height: 90px;
                    width: 100%;
                    display: flex;
                    padding: 21px 40px;
                }
                .navLogo {
                    width: 250px;
                }
                .logoLink {
                    margin: 0px 25px 0px 0px;
                    padding: 5px 0px 10px;
                }
            `}</style>
        </>
    )
}

export default SimpleNav