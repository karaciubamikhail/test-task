import { Link } from 'react-router-dom';
import { Header } from '../header/Header';
import './style.css'
import { unLogin } from '../login/unLogin';
export function Cabinet (){
    const name = localStorage.getItem("name");
    return(
        <div className='container'>
            <Header></Header>
            <div className='cabinet'>
                <h1 className='cabinet-header'>Привет, {name}</h1>
                <div className='cabinet-btns'>
                    <Link className='cabinet-btns_unlogin' to="/index" onClick={unLogin}>Выйти из аккаунта</Link>
                    <Link className='cabinet-btns_contacts' to="/Contact">Перейти в Контакты</Link>
                </div>
            </div>
        </div>
    )
}