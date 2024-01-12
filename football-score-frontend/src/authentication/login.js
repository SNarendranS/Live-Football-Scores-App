import UserService from '../services/userService'
import Register from './register';
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import '../LoginStyle.css'

function Login({setUsername}) {
    let [user,setUser]=useState({'username':'','password':''})
    const navigate=useNavigate()
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(event)
        console.log(user)
        validateUser(user)
    }

    function parseJwt(token) {//to extract the payload from JWT
        if (!token) { return }
        const base64Url = token.split('.')[1]
        console.log(base64Url)
        console.log(JSON.parse(window.atob(base64Url)))
        return JSON.parse(window.atob(base64Url))
      }

    const validateUser=async (user)=>{
        try{
          const response=await UserService.login(user)
          console.log(response)
          console.log(response.data)
          let token=response.data//JWT token
          console.log(parseJwt(token))
          let userData=parseJwt(token)//sub,iss,iat,exp,role
          localStorage.setItem('token',JSON.stringify(token))
          localStorage.setItem('username',userData.username);
          setUsername(userData.username)
          console.log(userData)
        navigate('/scores')
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>

<div class="body">  	
<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
                    <Register/>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="text" name="username" placeholder="Username" required="" onChange={handleChange} value={user.username}/>
					<input type="password" name="password" placeholder="Password" required="" onChange={handleChange} value={user.password}/>
					<button onClick={handleSubmit}>Login</button>
				</form>
			</div>
	</div>
</div>





        </>  
    )
}

export default Login