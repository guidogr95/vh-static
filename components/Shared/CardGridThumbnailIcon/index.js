// Theme
import { breakpoints, desktopMaxWidth } from 'styles/theme'
// Components
import GridItem from './GridItem'

const CardGridThumbnailIcon = ({ ComponentProps }) => {

    const { CardGridTIItem } = ComponentProps

    return (
        <>
            <section className="containerSection" >
                <main>
                    {CardGridTIItem && CardGridTIItem.map((gridItem, index) => {
                        return (
                            <GridItem
                                key={gridItem.id}
                                index={index}
                                {...gridItem}
                            />
                        )
                    })}
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(3, 250px);
                    gap: 40px;
                    padding: 45px 0;
                }
                main :global(.a) {
                    grid-column: 1 / 3;
                    grid-row: 1;
                }
                main :global(.b) {
                    grid-column: 3;
                    grid-row: span 2;
                    background: linear-gradient(to bottom, #6536FF, #2A165980);
                }
                main :global(.c) {
                    grid-column: 4;
                    grid-row: span 2;
                    background: linear-gradient(to bottom, #2B2D42, #2A165980);
                }
                main :global(.d) {
                    grid-column: 1;
                    grid-row: span 2;
                    background: linear-gradient(to bottom, #2A1659, #2A165980);
                }
                main :global(.e) {
                    grid-column: 2;
                    grid-row: span 2;
                    background: linear-gradient(to bottom, #6536FF, #2A165980);
                }
                main :global(.f) {
                    grid-column: 3 / 5;
                    grid-row: 3;
                    background: linear-gradient(to bottom, #2B2D42, #2A165980);
                }
                main :global(.g) {
                    grid-column: 2;
                    grid-row: 2;
                }
                main :global(.a > div),
                main :global(.f > div) {
                    width: 50%;
                }
                main :global(.b),
                main :global(.c),
                main :global(.d),
                main :global(.e) {
                    flex-direction: column;
                }
                main :global(.b > div),
                main :global(.c > div),
                main :global(.d > div),
                main :global(.e > div) {
                    height: 50%;
                }
                main :global(.a :global(button)) {
                    color: #38AECC;
                }
                main :global(.b :global(button)) {
                    color: #6536FF;
                }
                main :global(.c :global(button)) {
                    color: #2B2D42;
                }
                main :global(.d :global(button)) {
                    color: #2A1659;
                }
                main :global(.e :global(button)) {
                    color: #6536FF;
                }
                main :global(.f :global(button)) {
                    color: #2B2D42;
                }
                @media screen and (max-width: 1100px) {
                    main {
                        grid-template-columns: repeat(3,minmax(100px,1fr));
                        grid-auto-rows: 500px;
                        grid-template-rows: none;
                        gap: 20px;
                    }
                    main :global(article) {
                        flex-direction: column !important;
                        grid-column: initial !important;
                        grid-row: initial !important;
                    }
                    main :global(article > div) {
                        height: 50% !important;
                        width: 100% !important;
                    }
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    main {
                        grid-template-columns: repeat(1,minmax(100px,1fr));
                        grid-auto-rows: 250px;
                    }
                    main :global(article) {
                        flex-direction: row !important;
                    }
                    main :global(article > div) {
                        height: 100% !important;
                        width: 50% !important;
                    }
                }
                @media screen and (max-width: ${breakpoints.largePhone}) {
                    main {
                        grid-template-columns: repeat(1,minmax(100px,1fr));
                        grid-auto-rows: 500px;
                    }
                    main :global(article) {
                        flex-direction: column !important;
                    }
                    main :global(article > div) {
                        height: 50% !important;
                        width: 100% !important;
                    }
                }
            `}</style>
        </>
    )
}

export default CardGridThumbnailIcon