import cardimg1 from './img/cardimg1.png'
import cardimg2 from './img/cardimg2.png'
import cardimg3 from './img/cardimg3.png'
import './style.css'
export function Card (){
    return(
        <ul className='card'>
            <li className='card-item'>
                <div className='card-content'>
                    <img src={cardimg1} alt="card1" className='card-item__img'/>
                    <h2 className='card-item__header'>Онлайн прием</h2>
                    <p className='card-item__desk'>Рыба текст</p>
                </div>
            </li>
            <li className='card-item'>
                <div className='card-content'>
                    <img src={cardimg2} alt="card2" className='card-item__img'/>
                    <h2 className='card-item__header'>Экстренный Случай</h2>
                    <p className='card-item__desk'>Рыба текст</p>
                </div>
            </li>
            <li className='card-item'> 
                <div className='card-content'>
                    <img src={cardimg3} alt="card3" className='card-item__img'/>
                    <h2 className='card-item__header'>Лечение рака</h2>
                    <p className='card-item__desk'>Рыба текст</p>
                </div>
            </li>
        </ul>
    )
}