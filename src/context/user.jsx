import { useContext } from "react"
import UserContext from "./usercontext"

export default function User () {
    const {user} = useContext(UserContext)
    return <div>{user}</div>
}