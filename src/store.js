import {createStore} from 'redux'
import {combineReducers} from 'redux'

let initialCount = 0;

function reducerFunction(state=initialCount,action){
    console.log(action.type);
    if(action.type === 'ADD')
        return action.payload['num1']+action.payload['num2'];
    else if(action.type === 'SUB')
        return action.payload['num1']-action.payload['num2'];
    else if(action.type === 'MUL')
        return action.payload['num1']*action.payload['num2'];
    else if(action.type ==='DIV')
        return (action.payload['num1']/action.payload['num2']);
    else 
        return state;
}

const root = combineReducers({reducerFunction});

export const store = createStore(root);
