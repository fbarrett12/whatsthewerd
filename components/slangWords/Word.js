import React, {useState, useEffect} from 'react';

import { ShowWordModal } from '../ShowWordModal';

const Word = props => {
        console.log(props)
        const [modalShow, setModalShow] = useState(false)

    return (
        <>
                <div className='card' style={{margin: ".5em"}} onClick={() => setModalShow(true)}>
                        {props.term}
                </div>
                <ShowWordModal
                        term={props.term} 
                        definition={props.definition}
                        city={props.city} 
                        longitude={props.longitude}
                        latitude={props.latitude} 
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                />
      </>
        )
}

export default Word
