import React from 'react';
// import jsPDF from 'jspdf';
import "./Certificate.css"

const Certificate = () => {

  const storedName = JSON.parse(localStorage.getItem("naaame"));


  return (
    <div className='c-container'>
      <div className='c-wrapper'>
        <div className='outer'>
          
            <div className='c-h11'>
              <h1 className='c-h1' style={{direction:"rtl"}}> شهادة تفوق</h1>
            </div>
            <div className='c-content'>
              <p className='c-cong'  style={{direction:"rtl"}}>
                تمنح هذه الشهادة للطالب/ه  <span className='c-name'>{storedName}</span> بسبب تفوقه في الاختبارات  <br /> والذي أظهر فيها أنه على قدر عال من العلم والمعرفة
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;