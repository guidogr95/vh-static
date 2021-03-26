// Utils
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import customizeHtmlContent from 'utils/customizeHtmlContent'
// Assets
import { FiPlusCircle } from 'react-icons/fi'

const { Toggle, Collapse } = Accordion

const AccordionItem = ({ Title, parentId, id, Content }) => {

    const itemId = `${parentId}${id}`

    const handleHeader = () => {
        const item = document.getElementById(itemId)
        item.click()
        item.scrollIntoView({ behavior: 'smooth', block: 'center' })
        // setTimeout(() => {
        // }, 300)
    }

    return (
        <Card>
            <Toggle id={itemId} as={Card.Header} eventKey={itemId}/>
            <Collapse eventKey={itemId}>
                <Card.Body className="htmlContent" dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content) }} />
            </Collapse>
            <div className="header-icon" onClick={handleHeader} >
                {Title}
                <FiPlusCircle onClick={handleHeader} />
            </div>
        </Card>
    )
}

export default AccordionItem