import React from 'react'
import "./Main.css"
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate();
    const handleCourses = () => {
      navigate('/coursat');
    };

return (
    <div className='main-cont'>
        <div className='main-wrapper'>
            <div className='main-image'>
            <div className='image-blue'>
                
                </div>
                <img src='assets/Student1.png' alt='student'/>
            </div>  
            <div className='main-content'>
                <h1 className='main-h1'>تعلم، ذاكر، تدرب.</h1>
                <p className='main-p'>استكشف عالم المعرفة والتعلم عبر منصتنا التعليمية العربية المتميزة.<br/>  اكتسب المهارات الجديدة، وقم بتطوير معرفتك ، وحقق أعلى النتائج<br/> في مسيترك التعليمية.</p>
                <button className='main-btn' onClick={handleCourses}> اطلع على كافة المساقات التعليمية </button>
            </div>
        </div>
        
    </div>
)
}

export default Main
