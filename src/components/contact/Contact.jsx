import { Header } from '../header/Header';
import './style.css'
export function Contact (){
    return(
        <div className="container">
            <Header></Header>
            <div className='contacts'>
                <h1 className='contacts-header'>Контакты</h1> 
            </div>
        </div>
    )
}