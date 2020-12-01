import React from "react";
import Patients from "../Patients/Patients";

class Quitting extends React.Component {
  render() {
    let patients = this.props.state.quittingPatients;
    return (
      <div>
        {this.props.state.isLoading && <p>Loading...</p>}
        {Array.isArray(patients) && <Patients data={patients} /> }
      </div>
    );
  }
}

export default Quitting;
