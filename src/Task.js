import React from 'react';
import {connect} from "react-redux";

const Task = (props) => {

    const {task, deleteTask} = props;

    return (
        <li>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id})
})

export default connect(null, mapDispatchToProps)(Task);