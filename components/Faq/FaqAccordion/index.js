import { useEffect, useState } from 'react'
// Utils
import Accordion from 'components/Shared/Accordion'
// Theme
import { borderRadius, breakpoints, colors, desktopMaxWidth } from 'styles/theme'
import { apiUrl } from 'config/constants'

const FaqAccordion = ({ ComponentProps }) => {

    const [activeAccordion, setActiveAccordion] = useState(ComponentProps.Accordion[0].Title.toLowerCase().replace(' ', ''))
    const [svgList, setSvgList] = useState({})

    const getSvgs = async (accordionList) => {
        let newList = {}
        for (const i in accordionList) {
            const svg = await fetch(`${apiUrl}${accordionList[i].Icon.url}`)
            .then(res => res.text())
            .then(text => text)

            newList = {
                ...newList,
                [accordionList[i].Title.toLowerCase().replace(' ', '')]: svg
            }
        }
        setSvgList(newList)
    }

    useEffect(() => {
        async function fetchSvgs () {
            getSvgs(ComponentProps.Accordion)
        }
        fetchSvgs()
    }, [])

    return (
        <>
            <section className="containerSection" >
                <main>
                    <div className="accordion-cards" >
                        {ComponentProps.Accordion && ComponentProps.Accordion.map(accordion => {
                            return (
                                <button
                                    className={`accordion-card ${activeAccordion === accordion.Title.toLowerCase().replace(' ', '') ? 'active' : ''}`}
                                    key={accordion.Title.toLowerCase().replace(' ', '')}
                                    onClick={() => setActiveAccordion(accordion.Title.toLowerCase().replace(' ', ''))}
                                >
                                    {accordion.Icon && svgList[accordion.Title.toLowerCase().replace(' ', '')] ? <div dangerouslySetInnerHTML={{ __html: svgList[accordion.Title.toLowerCase().replace(' ', '')]}} /> : ''}<span>{accordion.Title}</span>
                                </button>
                            )
                        })}
                    </div>
                    <div className="accordion-list" >
                    {ComponentProps.Accordion && ComponentProps.Accordion.map(accordion => {
                        return (
                            <Accordion
                                key={accordion.id}
                                parentId={accordion.id}
                                items={accordion.Item}
                                title={accordion.Title}
                                activeAccordion={activeAccordion}
                            />
                        )
                    })}

                    </div>
                </main>
            </section>
            <style jsx>{`
                section {
                    background: white;
                    min-height: 750px;
                }
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    padding: 45px 0;
                    display: grid;
                    grid-template-columns: 350px auto;
                }
                .accordion-cards {
                    display: grid;
                    grid-template-rows: repeat(${ComponentProps.Accordion.length}, 80px);
                    background: white;
                    height: fit-content;
                    border-radius: ${borderRadius} 0 0 ${borderRadius};
                    padding: 20px;
                    box-shadow: -14px 5px 40px rgba(180, 180, 180, 0.2);
                    z-index: 2;
                }
                .accordion-cards button {
                    border: none;
                    outline: 0;
                    background: transparent;
                    transition: .4s ease-out all;
                    border-radius: ${borderRadius};
                    color: ${colors.lightGray};
                    letter-spacing: 0.02em;
                    font-weight: 700;
                    font-size: 18px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .accordion-cards button:hover {
                    color: ${colors.day};
                }
                .accordion-cards button span,
                .accordion-cards button div {
                    z-index: 2;
                    position: relative;
                }
                .accordion-cards button span {
                    transition: .4s ease-in-out all;
                    transform: translateX(-15px);
                }
                .accordion-cards button div {
                    transition: .3s ease-out all;
                    display: flex;
                    align-items: center;
                    transition-delay: .0s;
                    justify-content: center;
                    opacity: 0;
                    transform: translateY(-10px);
                    color: ${colors.day};
                }
                .accordion-cards button div :global(svg),
                .accordion-cards button div {
                    width: 30px;
                    height: 30px;
                }
                .accordion-cards button.active {
                    color: ${colors.day};
                }
                .accordion-cards button.active div {
                    opacity: 1;
                    transition-delay: .3s;
                    transform: translateY(0px);
                }
                .accordion-cards button.active span {
                    transform: translateX(12px);
                }
                .accordion-cards button:after {
                    background: ${colors.dayLight};
                    content: '';
                    position: absolute;
                    top: -100%;
                    height: 100%;
                    left: 0;
                    right: 0;
                    transition: .4s ease-out all;
                    z-index: 1;
                }
                .accordion-cards button.active:after {
                    top: 0;
                }
                .accordion-list {
                    background: white;
                    padding: 20px;
                    border-radius: 0 ${borderRadius} ${borderRadius} ${borderRadius};
                    box-shadow: -7px 5px 40px rgba(180, 180, 180, 0.2);
                }
                @media screen and (max-width: ${breakpoints.extraSmallDesktop}) {
                    main {
                        grid-template-columns: 100%;
                    }
                    .accordion-cards {
                        grid-template-columns: repeat(${ComponentProps.Accordion.length}, minmax(100px,1fr));
                        grid-template-rows: 100%;
                        height: 110px;
                    }
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    .accordion-cards {
                        grid-template-columns: 100%;
                        grid-template-rows: repeat(${ComponentProps.Accordion.length}, 65px);
                        height: initial;
                    }
                }
            `}</style>
        </>
    )
}

export default FaqAccordion