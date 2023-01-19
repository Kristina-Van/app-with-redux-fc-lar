import './App.css';
import {connect} from "react-redux";
import TaskList from "./TaskList";

function App(props) {

  const { header } = props;

  return (
    <div className="App">
      <h1>{header}</h1>
      <TaskList/>
    </div>
  );
}

const mapStateToProps = state => ({
  header: state.appHeader,
})

export default connect(mapStateToProps)(App);
