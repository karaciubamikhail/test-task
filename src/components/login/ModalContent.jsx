import { Login } from './Login';
export const modalContent = (
    <div className='login'>
        <h2 className='login-header'>Авторизация</h2>
        <form action="" className='form-login'>
            <input type="text" name='login' placeholder='Логин'/>
            <input type="text" name='password' placeholder='Пароль' />
            <button className='form-login__btn'onClick={Login}>Войти</button>
        </form>
    </div>
  );