
import {useSelector,useDispatch} from 'react-redux'
var num1,num2;
const multiply = ()=>{
    return{
    type:"MUL",
    payload:{num1,num2}
    }
}
function setValue1(e){
    num1 = Number(e.target.value);
}
function setValue2(e){
    num2 = Number(e.target.value);
}

function Multiply() {
    const dispatch = useDispatch();
    return (
    <div>
        <div>
            <input onChange={setValue1} id='num1' type = "text" placeholder='first value'/>
            <input onChange={setValue2} id='num2' type = "text" placeholder='second value'/>
            <button onClick={()=>{dispatch(multiply())}}>Multiply</button>
        </div>
        <br></br>
    </div>
    );
}

export default Multiply;