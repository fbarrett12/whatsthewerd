import { useState } from "react";
import { Form, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import styles from './addWordForm.module.scss';



const AddWordForm = () => {
    // FORM STATES
    const [term, setTerm] = useState('');
    const [definition, setDefinition] = useState('');
    const [city, setCity] = useState('')
    const [usstate, setUsState] = useState('')
    const [country, setCountry] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [disabled, setDisabled] = useState(false);
    const [show, setShow] = useState(true);
    const [isInUS, setIsInUS] = useState(true)
    const [slangID, setSlangID] = useState('')
    const [locationID, setLocationID] = useState('')

    const geoKey = process.env.GEO_KEY

    const handleSubmit = async e => {
        e.preventDefault();
        // TODO ADD SOME CHECKS AND VALIDATION,
        // FOR NOW WE ARE ASSUMING THE INPUTS ARE VALID
        setDisabled(true);
        sendDataToServer();
        
    }

    const sendLocationToGeocoder = () => {
        if (isInUS) {
            axios.get(`http://api.positionstack.com/v1/forward?access_key=${geoKey}&query=${city},${usstate}`)
            .then((res) => {
                console.log(res.data.data)
                setLongitude(res.data.data[0].longitude)
                setLatitude(res.data.data[0].latitude)
                axios.post(('http://localhost:3000/locations'), {
                    city: city,
                    state: usstate,
                    country: "USA",
                    longitude: longitude,
                    latitude: latitude
                })
                .then((result) => {
                    console.log(result)
                    if (result.data.id) {
                        setLocationID(result.data.id)
                        console.log(locationID)
                        axios.patch((`http://localhost:3000/slangs/${slangID}`), {
                            location_id: locationID
                        })
                    }
                })
            })
        } else {
            axios.get(`http://api.positionstack.com/v1/forward?access_key=${geoKey}&query=${city},${country}`)
            .then((res2) => {
                setLongitude(res2.data.data[0].longitude)
                setLatitude(res2.data.data[0].latitude)
                axios.post(('http://localhost:3000/locations'), {
                    city: city,
                    country: country,
                    longitude: longitude,
                    latitude: latitude
                })
                .then((result) => {
                    console.log(result)
                    if (result.data.id) {
                        setLocationID(result.data.id)
                        console.log(locationID)
                        axios.patch((`http://localhost:3000/slangs/${slangID}`), {
                            location_id: locationID
                        })
                    }
                })
        })}
    }

    const sendDataToServer = () => {
        // TODO
        // We have to add a CATEGORY, INVENTORY, and VENDOR field in form
        // for now we are hard coding it inside the POST request
        axios.post('http://localhost:3000/slangs', {
            term: term,
            definition: definition
        })
        .then((res3) => {
            console.log(res3);
            if (res3.data.data.id) {
                setSlangID(res3.data.data.id)
                console.log(slangID)
                setDisabled(false)
                sendLocationToGeocoder()
            }
        
           
            // if (show) {
            //     return (
            //         <Alert variant="success" onClose={() => setShow(false)} dismissible>
            //             <Alert.Heading>Lit!</Alert.Heading>
            //             <p>
            //                 Your slang has been added to the lingo! Thank you for helping!
            //             </p>
            //         </Alert>
            //     )
            // }
            
            
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
                        <Col>
                            <Form.Control 
                                placeholder="Enter Definition"
                                onChange={(e) => setDefinition(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Control 
                                placeholder="What City Do They Say This In?" 
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />
                        <Form.Switch 
                        label="Are you in the US?"
                        checked={isInUS}
                        onChange={() => setIsInUS(!isInUS)}
                        />
                    <br />
                    <Row>
                        <Col>
                            <Form.Control 
                                placeholder="Enter State if in USA" 
                                onChange={(e) => setUsState(e.target.value)}
                                disabled={!isInUS}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Form.Control 
                                placeholder="Enter Country if not in USA" 
                                onChange={(e) => setCountry(e.target.value)}
                                disabled={isInUS}
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