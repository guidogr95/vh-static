// Utils
import Accordion from 'react-bootstrap/Accordion'
// Theme
import { borderRadius, colors } from 'styles/theme'
// Components
import AccordionItem from './AccordionItem'

const index = ({ items, parentId, title, activeAccordion }) => {

    return (
        <>
            <div className={`accordion-wrapper ${activeAccordion !== title.toLowerCase().replace(' ', '') ? 'inactive' : ''}`} >
                <Accordion>
                    {items.map(item => {
                        return (
                            <AccordionItem
                                key={item.id}
                                parentId={parentId}
                                {...item}
                            />
                        )
                    })}
                </Accordion>
            </div>
            <style jsx>{`
                .accordion-wrapper.inactive {
                    display: none
                }
                .accordion-wrapper :global(.card-header),
                .accordion-wrapper :global(.card .header-icon) {
                    padding: 1rem 1.25rem;
                    height: 70px;
                    transition: .3s ease-out all;
                }
                .accordion-wrapper :global(.card) {
                    border-radius: ${borderRadius};
                    border: 1px solid ${colors.whiteGray};
                    position: relative;
                }
                .accordion-wrapper :global(.card .header-icon) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    cursor: pointer;
                    color: ${colors.lightGray};
                    background: #ffffff;
                    font-weight: 500;
                    letter-spacing: 0.03em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 18px;
                }
                .accordion-wrapper :global(.header-icon svg line) {
                    transition: .3s ease-out all;
                }
                .accordion-wrapper :global(.collapse.show + .header-icon svg line:first-of-type) {
                    stroke-width: 0;
                }
                .accordion-wrapper :global(.collapse.show + .header-icon) {
                    color: ${colors.day};
                }
                .accordion-wrapper :global(.card .header-icon svg) {
                    font-size: 1.6em;
                    min-width: 28.8px;
                }
                .accordion-wrapper :global(.card:not(:last-of-type)) {
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}

export default index