import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import React from 'react'

function Login() {
  const [user, setUser] = useState('');
  const refInput = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    refInput.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('naaame', JSON.stringify(user));
    navigate('/quiz');
  };

  return (
    <div className='l-container'>
      <div className='l-wrapper'>
        <form className='l-form' onSubmit={handleSubmit}>
          <input className='l-input' style={{direction:"rtl"}} placeholder='أكتب اسمك ' ref={refInput} type='text' onChange={(e) => { setUser(e.target.value) }} />
          <div  className='l-button' style={{background:"#8e3257"}}><button id='bbbt' type='submit'>ابدأ الاختبار</button></div>
        </form>
      </div>
    </div>
  );
}

export default Login;