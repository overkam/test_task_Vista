import './App.css';
import Info from './components/Info';
import Table from './components/Table/Table';

function App(props) {
  return (
    <div className="content">
      <Info state={props.state}/>
      <Table state={props.state}/>
    </div>
  );
}


export default App;
