import React from "react";
import store from "../../../store";
import "./Patient.css";

class Patient extends React.Component {
  getAge = (date) => {
    return (
      ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) |
      0
    );
  };

  onPatientClick = (e) => {
    const age = this.getAge(this.props.data.birthDate);
    store.addPatient(
      this.props.data.firstName +
        " " +
        this.props.data.lastName +
        " " +
        this.props.data.patrName,
      this.props.data.diagnosis,
      age
    );

    if (document.querySelector('.patinet-active')) {document.querySelector('.patinet-active').classList.remove("patinet-active")}

    if (
      e.target.className === "patient_history" ||
      e.target.className === "patient_name" ||
      e.target.className === "patient_bed-or-cause"
    ) {
      e.target.parentElement.classList.add("patinet-active");
    } else {
      e.target.classList.add("patinet-active");
    }
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
      cause,
    } = this.props.data;

    return (
      <div className="patient" onClick={this.onPatientClick} id={historyNumber}>
        <div className="patient_history">{historyNumber}</div>
        <div className="patient_name">
          {firstName} {lastName} {patrName}
        </div>
        <div className="patient_bed-or-cause">{bedNumber || cause}</div>
      </div>
    );
  }
}

export default Patient;
