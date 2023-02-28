import React, {useState} from "react";
import './login.css'
const Login = () => {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            window.location.href = "/payment";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (

        <div className="container"> 
            <div class="text">User Login</div>
            <img src="https://pngimg.com/uploads/groot/groot_PNG26.png" className="image"></img>
            <form onSubmit={loginSubmit}>

                <div class="data">
                    <input type="text" name="username" required 
                    placeholder="Username" value={user.usename} onChange={onChangeInput}/>
                </div>

                <div class="data">
                    <input type="password" name="password" required
                    placeholder="Password" value={user.password} onChange={onChangeInput} />
                </div>
                <div className="btn1">
                    <button type="submit">Login</button>

                </div>
                
            </form>
        </div>
    )
}

export default Login;