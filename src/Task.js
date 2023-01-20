import React from 'react';
import {connect} from "react-redux";

const Task = (props) => {

    const {task, deleteTask, checkIsDone, moveTask, index, taskLength} = props;

    return (
        <li style={task.isDone ? {textDecoration: 'line-through'} : null}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => checkIsDone(task.id)}>Done</button>
            <button disabled={index === 0} onClick={() => moveTask(task.id, 'up')}>↑</button>
            {index !== taskLength -1 && <button onClick={() => moveTask(task.id, 'down')}>↓</button>}
        </li>
    );
};

const mapStateToProps = (state) => ({
    taskLength: state.todoList.length
})

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id}),
    checkIsDone: (id) => dispatch({type: 'CHECK_IS_DONE', payload: id}),
    moveTask: (id, direction) => dispatch({type: 'MOVE_TASK', payload: {id, direction}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Task);