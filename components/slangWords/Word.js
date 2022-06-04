import React, {useState, useEffect} from 'react';

import { ShowWordModal } from '../ShowWordModal';
import { Button } from 'react-bootstrap';

const Word = props => {
        console.log(props)
        const [modalShow, setModalShow] = useState(false)

    return (
            <Button className='card' onClick={() => setModalShow(true)}>
         {props.term}
         <ShowWordModal
            term={props.term} 
            definition={props.definition} 
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
      </Button>
        )
}

export default Word
