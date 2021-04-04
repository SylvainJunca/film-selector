import { Form } from "react-bootstrap";

const AnticipationForm = ({anticipation, setField}) => {
  
    return(
        <Form.Row>
            <Form.Group>
                <Form.Label>Anticipation</Form.Label>
                <Form.Control as="select" defaultValue={1}>
                    <option value={-1}>Nope Nope Nope</option>
                    <option value={0}>I'm a rebel (Neutral)</option>
                    <option value={0.75}>Wouldn't bother me to watch it</option>
                    <option value={1}>I want to watch it</option>
                    <option value={1.25}>REALLY pushing to watch this one!</option>
                </Form.Control>
            </Form.Group>
            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Already watched" />
            </Form.Group>
        </Form.Row>
    )
}

export default AnticipationForm;