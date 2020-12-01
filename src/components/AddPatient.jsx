import React from 'react';
import './AddPatinet.css';

class AddPatient extends React.Component {
  debugger
  render() {
    const {fullName, diagnosis, age} = this.props.state
    return (
      <div className='patient-info'>
        <div className='patient-info_item'>ФИО<div>{fullName}</div></div>
        <div className='patient-info_item'>Возраст<div>{age}</div></div>
        <div className='patient-info_item'>Диагноз<div>{diagnosis}</div></div>
      </div>
    )
  }
}

export default AddPatient