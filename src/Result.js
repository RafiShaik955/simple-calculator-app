import Add from "./Add";
import Division from "./Divison";
import Multiply from "./Multiply";
import Subtract from "./Subtract";
import {useSelector,useDispatch} from 'react-redux'

const result = ()=>{
    return{
        type:'RESULT'
    }
}

export default function Result(){
    const num = useSelector((state)=>state.reducerFunction);
    const dispatch = useDispatch();
    return(
        <>
            <Add/>
            <Subtract/>
            <Multiply/>
            <Division/>
            <h1>Result:{num}</h1>
        </>
    )
}