import { useState } from 'react'

function OpenModal() {

    const [imgNumber, setImgNumber] = useState(0);
    const [modal, setModal] = useState(false);

    const openModal = (id) => {
        setImgNumber(id);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return { imgNumber, modal, openModal, closeModal }        //return function and variable
    
}

export default OpenModal