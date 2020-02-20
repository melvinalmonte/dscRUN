import React from "react";
import {logout, signUp} from "../../../utils/auth";

const SignUpHandler = () => {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [passValid, setPassValid] = React.useState("");
    const [err, setErr] = React.useState(false);

    const handleEmail = e => setEmail(e.target.value);
    const handlePass = e => setPass(e.target.value);
    const handleValidate = e => setPassValid(e.target.value);

    const handleSignUp = () => {
        if (pass !== passValid){
            return(setErr(true))
        }
        signUp(email, pass)
            .catch(() => {
                setErr(true)
            })
    };

    const handleLogout = () => (
        logout()
    );

    return {
        err,
        handleEmail,
        handlePass,
        handleValidate,
        handleSignUp,
        handleLogout
    }
};

export default SignUpHandler