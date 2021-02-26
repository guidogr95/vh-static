// Components
import Link from 'next/link'
import FooterWidgets from './FooterWidgets'
// Constants
import { apiUrl } from 'config/constants'

const Footer = ({ footerData }) => {
    return (
        <>
            <footer>
                <FooterWidgets
                    navItems={footerData.FooterNavItem}
                    address={footerData.Address}
                />
            </footer>
            <aside>
                <div className="copyright-notice" >
                    Copyright © 2005-2020 — VEXXHOST, Inc. <br/>
                    All prices are in USD unless otherwise indicated.
                </div>
                <div className="social-links" >
                    {footerData.SocialLinks && footerData.SocialLinks.SocialLinkItem.map(socialLink => {
                        return (
                            <Link href={socialLink.Social.Link} key={socialLink.id}>
                                <a>
                                    <img alt={`${socialLink.Social.Label} link`} src={`${apiUrl}${socialLink.Icon.url}`} />
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </aside>
            <style jsx>{`
                footer {
                    padding: 0;
                    margin-top: 75px;
                    margin-bottom: 30px;
                    margin-left: 19%;
                    margin-right: 15%;
                    font-family: Arial;
                    display: flex;
                    flex-direction: column;
                }
                .social-links {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }
                .social-links a {
                    margin: 0 10px 10px;
                    height: 16px;
                    width: 16px;
                }
                .social-links a img {
                    width: 100%;
                }
                aside {
                    text-align: center;
                    padding: 20px 30px;
                }
                .copyright-notice {
                    font-size: 14px;
                    color: #adb1b5;
                    padding: 0 0 15px;
                }
            `}</style>
        </>
    )
}

export default Footer