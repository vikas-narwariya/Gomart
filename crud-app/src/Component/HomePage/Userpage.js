import React from "react"
import "./adminpage.css"
import { useHistory } from "react-router"
import AllProduct from "../AllProduct"
import Homepage from "../Homepage"

const Userpage = () => {

    const history = useHistory()
    return (
        <>
        <Homepage/>
        <div className="block">
        <div className="admin">
            <h1>User Dashboard</h1>
            <div className="button"  onClick={() => history.push("/user-login")} >Logout</div>
        </div>
        </div>
        
        </>
    )
}

export default Userpage