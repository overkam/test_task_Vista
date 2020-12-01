let store = {
  _state: {
    fullName: "",
    age: "",
    diagnosis: "",
    presentPatients: null,
    quittingPatients: null,
    isLoading: false,
  },
  _callSubscriber() {},
  async getPatients() {
    this._state.isLoading = true;
    await fetch("http://localhost:3000/data/presentList.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this._state.presentPatients = data;
        this._state.isLoading = false;
      });
    await fetch("http://localhost:3000/data/quittingList.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this._state.quittingPatients = data;
        this._state.isLoading = false;
      });
    this._callSubscriber(this._state);
  },
  getState() {
    return this._state;
  },
  addPatient(name, diagnosis, age) {
    this._state.fullName = name;
    this._state.diagnosis = diagnosis;
    this._state.age = age;
    this._callSubscriber(this._state);
  },
  changePatientsCount(action) {
    if (action.type === "PRESENT") {
      this._state.presentPatients = action.count;
      this._callSubscriber(this._state);
    } else if (action.type === "QUITTING") {
      this._state.quittingPatients = action.count;
      this._callSubscriber(this._state);
    }
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
