import { useState } from "react";
import { Form, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

import styles from './addWordForm.module.scss';


const AddWordForm = () => {
    // FORM STATES
    const [term, setTerm] = useState('');
    const [definition, setDefinition] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [show, setShow] = useState(true);


    const handleSubmit = async e => {
        e.preventDefault();
        // TODO ADD SOME CHECKS AND VALIDATION,
        // FOR NOW WE ARE ASSUMING THE INPUTS ARE VALID
        setDisabled(true);
        sendDataToServer();
    }

    const sendDataToServer = () => {
        // TODO
        // We have to add a CATEGORY, INVENTORY, and VENDOR field in form
        // for now we are hard coding it inside the POST request
        axios.post('http://localhost:3000/slangs', {
            term: term,
            definition: definition
        })
        .then((res) => {
            console.log(res.data);
            setShow(true)
            setDisabled(false)
            return (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Lit!</Alert.Heading>
                    <p>
                        Your slang has been added to the lingo! Thank you for helping!
                    </p>
                </Alert>
            )
        })
        .catch(error => console.log(error.response))
    }


    return (
        <div className={styles.formContainer}>
            {disabled ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <Form>
                    <Row>
                        <Col>
                            <Form.Control 
                                placeholder="Enter New Word or Phrase" 
                                onChange={(e) => setTerm(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Control 
                                placeholder="Enter Definition"
                                onChange={(e) => setDefinition(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Button type="submit" className="mb-2" onClick={(e) => handleSubmit(e)}>
                            Submit
                        </Button>
                    </Row>
                </Form>
            )}
            
        </div>
    );
}

export default AddWordForm;