import React, { useState } from 'react'
import { AddWordForm } from "../components/addWordForm";
import Waves from '/public/waves.svg'

import { Menu } from '../components/menu';

const AddWord = () => {

    return (
        <>
        <Menu />

        <div className="hero">
            <h1 className="title">{"What's The Werd?"}</h1>
                <p className="description">
                    Add a New Word or Phrase to the Library!
                </p>
        </div>

        <div className='wave-container'>
            <Waves />
        </div>
        <div>
            <AddWordForm />
        </div>
        </>
    )
}

export default AddWord;