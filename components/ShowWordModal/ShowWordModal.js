import React, {useState, useEffect} from 'react';
import {
    Modal,
    Button
} from 'react-bootstrap';
import Map from '../map/Map';

const ShowWordModal = props => {

    console.log(props)

    return (
        <Modal key={props.term}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.term}
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <h5>{props.definition}</h5>
                    <Map 
                        city={props.city} 
                        longitude={props.longitude}
                        latitude={props.latitude}
                    />
                </Modal.Body>
           
        </Modal>
    )

}

export default ShowWordModal