import React from 'react';
import AddPatient from './AddPatient';
import './Info.css';

const Info = (props) => {
  return (
    <div className='information'>
      <div className='title'>
        <p>Инфорация о пациенте</p>
      </div>
      <AddPatient state={props.state}/>
    </div>
  )
}

export default Info