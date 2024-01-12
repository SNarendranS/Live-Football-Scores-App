import { useEffect } from "react"
import { Link } from "react-router-dom"

function Logout({setUsername}){
    useEffect(()=>{
            localStorage.removeItem('username')
            localStorage.removeItem('token')
        setUsername('')
    })
    return(
        <>
        You have successfully logged out!
        <Link to="/login">Back to login</Link>
        </>
    )
}
export default Logout