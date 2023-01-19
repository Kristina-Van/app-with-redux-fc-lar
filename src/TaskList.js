import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";
import CreateTask from "./CreateTask";

const TaskList = (props) => {

    const {tasks} = props;

    return (
        <div>
            <CreateTask/>
            <ul style={{listStyleType: 'none'}}>
                {tasks.map(task => <Task
                    task={task}
                />)}
            </ul>
        </div>
    );
};
const mapStateToProps = state => ({
    tasks: state.todoList,
})
export default connect(mapStateToProps)(TaskList);