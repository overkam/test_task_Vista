import React from 'react';
import './Info.css';

class AddPatient extends React.Component {
  render() {
    const {fullName, diagnosis, age} = this.props.state 

    return (
      <div className='patient-info'>
        <div>ФИО {fullName}</div>
        <div>Возраст {age}</div>
        <div>Диагноз {diagnosis}</div>
      </div>
    )
  }
}

export default AddPatient