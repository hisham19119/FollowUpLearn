import React from 'react'
import "./Section.css"
// const Section = () => {
// return (
//     <div className='sec-container'>
//         <div className='sec-wrapper'>
//             <div className='add'></div>
//         </div>
//     </div>
// )
// }

// export default Section

import { useState } from 'react';
import { Button, TextField, Card } from '@mui/material';

const Section = () => {
  const [sections, setSections] = useState([]);
  const [inputValues, setInputValues] = useState({
    sectionName: '',
    sectionDescription: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newSection = {
      id: Date.now(),
      name: inputValues.sectionName,
      description: inputValues.sectionDescription
    };

    setSections([...sections, newSection]);
    setInputValues({
      sectionName: '',
      sectionDescription: ''
    });
    setShowForm(false);
  };

  const handleAddSectionClick = () => {
    setShowForm(true);
  };

  return (
    <div className='sel-co'>
      {!showForm && (
        <Button variant="contained" onClick={handleAddSectionClick} sx={{fontSize:"25px", background:"#003173"}}>
          إضافة اختبار
        </Button>
        
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className='formaya'>
          
          <TextField
            name="sectionName"
            label="اسم الاختبار"
            value={inputValues.sectionName}
            onChange={handleInputChange}
          />
          <TextField
            name="sectionDescription"
            label="اسم الصف "
            value={inputValues.sectionDescription}
            onChange={handleInputChange}
          /> 
          <Button type="submit" variant="contained">
            إضافة
          </Button>

        </form>
      )}

      {sections.map((section) => (
        <Card key={section.id} className='cary' sx={{background:"#003173" , color:"#fff"}}>
          <h3>{section.name}</h3>
          <p>{section.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default Section;