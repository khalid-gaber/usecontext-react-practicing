import UserContext from "./usercontext"
import { useContext } from "react"

export default function Button () {
    const {onClick} = useContext(UserContext);

    return <button onClick={()=>{onClick("hi")}}>update</button>
}