import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todoList: [
        {
            id: uuidv4(),
            title: 'Learn JS',
            isDone: true
        },
        {
            id: uuidv4(),
            title: 'Learn React',
            isDone: false
        },
        {
            id: uuidv4(),
            title: 'Get Job',
            isDone: false
        },
    ],
    appHeader: 'ToDo List',
    version: 'v1.0.0',
    menu: ['Home', 'Todo list', 'Contacts', 'Settings', 'About'],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW_TASK':
            return {
                ...state, //разворачиваем state, тк иммутабельно
                todoList: [...state.todoList, { //все, что изменилось в todo list после развернутого state
                    //мы снова разворачиваем state но он уже иммутабельный и разворачиваем целый этот массив
                    //todo list, он как и все остальное находится в state, и потом мы добавляем целый этот объект(
                    // id, title- мы поместили в action.payload)
                    id: uuidv4(),
                    title: action.payload,
                    isDone: false
                }]
            }
        case 'DELETE_TASK':
            const newList = state.todoList.filter(el => el.id !== action.payload);
            return {
                ...state,
                todoList: newList,
            }
        case 'CHECK_IS_DONE':
            const checkTask = state.todoList.map(el => el.id === action.payload ? {...el, isDone: !el.isDone} : el);
            return {
                ...state, todoList: checkTask
            }
        case 'MOVE_TASK':
            const currentIndex = state.todoList.indexOf(state.todoList.find(el => el.id === action.payload.id));
            const currentTodoList = [...state.todoList];
            const value = action.payload.direction === 'up' ? -1 : 1;
            [currentTodoList[currentIndex], currentTodoList[currentIndex + value]] = [currentTodoList[currentIndex + value], currentTodoList[currentIndex]]
        return {
                ...state, todoList: currentTodoList
        }

        default:
            return state;
    }
}
export default reducer;