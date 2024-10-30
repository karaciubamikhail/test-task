import { Header } from '../header/Header';
import { Card } from '../card/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '../login/Login';
import { modalContent } from '../login/ModalContent';
import Modal from 'react-modal';
import './style.css'
export function Index (){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };   
    return(
        <div className="container">
            <Header></Header>
            <div className='index'>
                <h1 className='index-header'>Место для получения медицинской помощи</h1>
                <div className='index-btns'>
                    <button onClick={openModal} className='index-btns-login'>Войти</button>
                    <Link to="/Contact" className='index-btns-contacts'>Контакты</Link>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={Login}>
                    {modalContent}
                </Modal>
                <Card></Card>
            </div>
        </div>
    )
}