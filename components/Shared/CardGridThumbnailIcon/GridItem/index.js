import React, { useEffect, useRef, useState } from 'react'
// Theme
import { borderRadius, breakpoints, colors, fonts } from 'styles/theme'
// Utils
import getPaths from 'utils/getPaths'
// Constants
import { apiUrl } from 'config/constants'
// Context
import { useSpringUtils } from 'context/springContext'
import useOnScreen from 'utils/useOnScreen'
import Link from 'next/link'

const GridItem = React.memo(({ Page, Thumbnail, Title, index, LinkType, CustomLink }) => {

    const ref = useRef()
    const [showImg, setShowImg] = useState(false)

    const { animated, config, Transition } = useSpringUtils()

    const onScreen = useOnScreen(ref, '-250px', !showImg)

    // const Slug = getPaths(Page, true)
    const thumbnail = `${apiUrl}${Thumbnail.url}`

    const gridLayouts = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g'
    }

    useEffect(() => {
        if (window?.outerWidth <= 500) {
            !showImg && setShowImg(true)
        } else {
            (onScreen && !showImg) && setShowImg(true)
        }
    }, [onScreen])

    const Img = (props) => <animated.img style={props} alt={`${Title} icon`} src={thumbnail} />

    const fullSlug = LinkType === 'Custom' ? CustomLink || '/' : Page ? getPaths(Page, true) : '/'

    return (
        <>
            <article className={gridLayouts[index + 1]} ref={ref} >
                    <div className="body" >
                        <span>{Title}</span>
                        <Link href={fullSlug} >
                            <a
                                className="btn btn-light"
                            >
                                Read More
                            </a>
                        </Link>
                    </div>
                    <div className="thumbnail-wrapper" >
                        <Transition
                            items={showImg}
                            config={{ ...config.wobbly, duration: 700 }}
                            from={{ transform: 'translate3d(0,40px,0)' }}
                            enter={{ transform: 'translate3d(0,0px,0)' }}
                            leave={{ transform: 'translate3d(0,40px,0)' }}>
                            {show => show && (props => <Img {...props} />)}
                        </Transition>
                    </div>
            </article>
            <style jsx>{`
                article {
                    height: 100%;
                    box-shadow:  15px 15px 30px #f0f0f0, -15px -15px 30px #ffffff;
                    border-radius: ${borderRadius};
                    position: relative;
                    overflow: hidden;
                    background: ${colors.day};
                    transition: .3s ease-out all;
                    display: flex;
                    background: linear-gradient(to bottom, #38AECC, #2A165980);
                    font-family: ${fonts.secondary};
                }
                .thumbnail-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .thumbnail-wrapper :global(img) {
                    height: 100%;
                }
                .body {
                    padding: 25px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .body span {
                    color: ${colors.whiteGray};
                    font-weight: 500;
                    font-size: 2em;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                }
                .body :global(a) {
                    max-width: 150px;
                    font-family: ${fonts.base};
                }
                @media screen and (max-width: 1100px) {
                    article {
                        box-shadow: 7px 7px 20px rgba(100, 100, 100, 0.3);
                    }
                    .thumbnail-wrapper :global(img) {
                        height: 100%;
                        width: initial;
                    }
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    .thumbnail-wrapper :global(img) {
                        height: initial;
                        width: 80%;
                    }
                }
                @media screen and (max-width: ${breakpoints.largePhone}) {
                    .thumbnail-wrapper :global(img) {
                        height: 100%;
                        width: initial;
                    }
                }
            `}</style>
        </>
    )
})

export default GridItem