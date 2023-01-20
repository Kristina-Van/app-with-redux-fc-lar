import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTask = (props) => {

    const [input, setInput] = useState('');

    function createButtonHandler () {
        props.addTask(input);
        setInput('');
    }

    return (
        <div>
            <input
                type="text"
                value={input}
                placeholder="Add new task name"
                onChange={(e) => setInput(e.target.value)}/>
            <button onClick={createButtonHandler}>Create Task</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addTask: (input) => dispatch({type: 'ADD_NEW_TASK', payload: input})
})

export default connect(null, mapDispatchToProps)(CreateTask);