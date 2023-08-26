import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import React from 'react';
function Navbar() {
  const navigate = useNavigate();
  const handlehome = () => {
    navigate('/');
  };
  const handledash = () => {
    navigate('/dash');
  };
    
  const handlesingle = () => {
    navigate('/single');
  };
  const handlestudent = () => {
    navigate('/student');
  };

  const handleCourses = () => {
    navigate('/coursat');
  };


  return (
    <Container fluid className="nav-cont">
      <div className='nav-search'> 
        <input type='srearch'  
        placeholder="ابحث هنا"
        className="me-2 searching"
        aria-label="Search"
        />
        <Button variant="outline-danger">بحث</Button>
      </div>
      <div className='nav-links'> 
        <a className='nav-link' onClick={handlehome}>الرئيسية</a>
        <a className='nav-link' onClick={handleCourses}>المساقات التعليمية</a>
        <a className='nav-link' onClick={handledash} >لوحة التحكم </a>
        <a className='nav-link' onClick={handlesingle} > المعلم </a>
        <a className='nav-link' onClick={handlestudent} > الطالب </a>
      </div>
      <div className='nav-logo'> <img src="assets/logo.png" width="100%" height="70px" href="##" /> </div>
    </Container>

  );
}

export default Navbar;