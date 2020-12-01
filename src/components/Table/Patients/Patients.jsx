import React from "react";
import Patient from './Patient'

class Patients extends React.Component {
  renderPatients = () => {
    debugger
    let data = this.props.data
    let patientsList = null
      patientsList = data.map(function(item) {
      return <Patient key={item.historyNumber} data={item} />
    })
    return patientsList
  }

  render() {
    debugger
    return (
      <div className="patients">
      {this.renderPatients()}
      </div>
    )
  }
}

export default Patients;
