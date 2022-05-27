
import {useSelector,useDispatch} from 'react-redux'
var num1,num2;
const add = ()=>{
    return{
    type:"ADD",
    payload:{num1,num2}
    }
}
function setValue1(e){
    num1 = Number(e.target.value);
}
function setValue2(e){
    num2 = Number(e.target.value);
}

function Add() {
    const dispatch = useDispatch();
    return (
    <div>
        <div>
            <input onChange={setValue1} id='num1' type = "text" placeholder='first value'/>
            <input onChange={setValue2} id='num2' type = "text" placeholder='second value'/>
            <button onClick={()=>{dispatch(add())}}>Addition</button>
        </div>
        <br></br>
    </div>
    );
}

export default Add;