
import {useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
// import useCounter from '../hooks/use-counter';


const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT= 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE = 'add_value';


function CounterPage({initialCount}){
    // const {count,Decrement} = useCounter(initialCount);
    // const [count,setCount] = useState(initialCount);
    // const [valueToAdd,setValueToAdd] = useState(0);
    const reducer = (state,action)=>{
        switch(action.type){
            case INCREMENT_COUNT:
                return  {...state,count: state.count + 1}
            case DECREMENT_COUNT:
                return {...state,count: state.count - 1}
            case SET_VALUE_TO_ADD:
                return {...state,valueToAdd: action.payload }
            case ADD_VALUE:
                return {...state,count: state.count + state.valueToAdd,valueToAdd: 0}
            default :
                return state;
        }
    }
    const [state,dispatch] = useReducer(reducer,{count:initialCount,valueToAdd:0})
    const increment = () => {
        dispatch({type: INCREMENT_COUNT})
        // setCount(count+1);
    };

    const decrement = () => {
        dispatch({type: DECREMENT_COUNT})
        // setCount(count - 1);
    };
    const handleOnChange=(event)=>{
        const value = parseInt(event.target.value) || 0
        // setValueToAdd(value);
        dispatch({type: SET_VALUE_TO_ADD,payload: value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch({type: ADD_VALUE})
        // setCount(count+valueToAdd)
        // setValueToAdd(0);
    }
    return <Panel className="m-3">
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex flex-row">
        <Button onClick={increment}>
            Increment
        </Button>
        <Button onClick={decrement}>
            Decrement
        </Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot</label>
            <input value={state.valueToAdd || ''} 
            onChange={handleOnChange}
            type="number"
            className="p-1 m-3 bg-gray-50 border border-gray-300"
            />
            <Button >Add it !!</Button>
        </form>
    </Panel>

}

export default CounterPage;