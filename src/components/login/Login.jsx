import data from '../../data.json'
import './style.css'
export const Login = (e) => {
    e.preventDefault();
    const {target} = e;
    const form = target.parentElement;
    const formData = new FormData(form);
    const login = formData.get('login');
    const password = formData.get('password');
    data.users.forEach((elem)=>{
        if(elem.login === login && elem.password === password){
            localStorage.setItem('name',elem.name);
            window.location.assign('http://localhost:3000/Cabinet')
        }
    })
  };