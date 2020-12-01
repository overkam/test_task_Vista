import React from "react";
import store from "../../../store";
import Patients from "../Patients/Patients";

class Present extends React.Component {

  render() {
    let patients = this.props.state.presentPatients;
    return (
      <div>
        {this.props.state.isLoading && <p>Loading...</p>}
        {Array.isArray(patients) && <Patients data={patients} /> }
      </div>
    );
  }
}

export default Present;
