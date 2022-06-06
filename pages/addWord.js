import React, { useState } from 'react'
import { AddWordForm } from "../components/addWordForm";

import { Menu } from '../components/menu';

const AddWord = () => {

    return (
        <>
        <Menu />

        <div>
            <AddWordForm />
        </div>
        </>
    )
}

export default AddWord;