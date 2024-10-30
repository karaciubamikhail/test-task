import logo from './logo.svg';
import './style.css'
import { Link } from 'react-router-dom';
import { unLogin } from '../login/unLogin';
import { modalContent } from '../login/ModalContent';
import Modal from 'react-modal';
import { Login } from '../login/Login';
import { useState } from 'react';
export function Header (){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };   
    let link = <button className='header-btn__login' onClick={openModal} >Войти</button >
    console.log(localStorage)
    if(localStorage.length === 1){
        link = <Link className='header-btn__login' to="/index" onClick = {unLogin}>Выйти</Link>
    }
    return(
        <div className='header'>
            <div className='header-container'>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div className='header-btn'>
                    <Link className='header-btn__contact' to="/Contact">Контакты</Link>
                    {link}
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={Login}>
                    {modalContent}
                </Modal>
            </div>
        </div>
    )
}