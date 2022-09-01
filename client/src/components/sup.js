import { useState } from "react";
import axios from "axios";
const Signup = ()=> {
    const [signupState, setSignupState] = useState({});
    const signUpFormData = [{attr: "username", type: "text", id: "username", label: "Username:"},
                            {attr: "password", type: "password", id: "password", label: "Password:"},
                            {attr: "confirmpassword", type: "password", id: "confirmpassword", label: "confirmpassword:"}
                        ]
    const handleUserAdd = ()=> {
        if(document.getElementById("password").value!=(document.getElementById("confirmpassword").value)){
                alert("pass is not same");
        }else{
        console.log(signupState);
        axios({
            url: "http://localhost:3001/user/signup",
            method: "POST",
            headers: {
            },
            data: signupState
        }).then((res)=> {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    }}
    const handleInputChange = (e, id)=> {
        setSignupState({...signupState, [id]: e.target.value})
    }
    return (
        <>
            <div>
                <form>
                    {signUpFormData.map((formKey)=> {
                        return (
                            <div>
                                <div>
                                    <label for={formKey.id}>{formKey.label}</label>
                                </div>
                                <div>
                                    <input type={formKey.type} id={formKey.id} onChange={(e)=> {handleInputChange(e,formKey.id)}}/>
                                </div>
                            </div>
                        )
                    })}
                </form>
                <button type="button" onClick={handleUserAdd}>Submit</button>
            </div>
        </>
    )
}
export default Signup;