import React from "react";
import store from "../../../store";
import Patients from "../Patients/Patients";

class Quitting extends React.Component {
  state = {
    patients: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3000/data/quittingList.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        store.changePatientsCount({type: 'QUITTING', count: data.length})
        this.setState({ isLoading: false, patients: data });
      });
  }

  render() {
    const { patients, isLoading } = this.state;

    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {Array.isArray(patients) && <Patients data={patients} />}
      </div>
    );
  }
}

export default Quitting;
