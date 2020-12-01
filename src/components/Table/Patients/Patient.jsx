import React from "react";
import store from "../../../store";
import "./Patient.css";

class Patient extends React.Component {
  getAge = (date) => {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0
  }

  onPatientClick = () => {
    const age = this.getAge(this.props.data.birthDate)
    store.addPatient(
      this.props.data.firstName +
        " " +
        this.props.data.lastName +
        " " +
        this.props.data.patrName,
      this.props.data.diagnosis,
      age
    );
  };

  render() {
    const {
      historyNumber,
      firstName,
      lastName,
      patrName,
      birthDate,
      diagnosis,
      bedNumber,
      cause
    } = this.props.data;

    return (
      <div className="patient" onClick={this.onPatientClick} id={historyNumber}>
        <div>{historyNumber}</div>
        <div>
          {firstName} {lastName} {patrName}
        </div>
        <div>{bedNumber || cause}</div>
      </div>
    );
  }
}

export default Patient;
