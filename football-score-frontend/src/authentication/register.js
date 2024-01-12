import UserService from '../services/userService'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(User) {

        let [user,setUser]=useState({'username':'','email':'','password':'','role':''})
        const navigate=useNavigate()
        
    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setUser({ ...user, [name]: value });
        };
        
    
        // const handleSubmit=(event)=>{
        //     event.preventDefault();
        //     console.log(event)
        //     console.log(user)
        //     validateUser(user)

        // }
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
              const response = await UserService.register(user);
              console.log(response);
              console.log(response.data);
        
              // Clear fields after successful submission
              setUser({
                username: '',
                email: '',
                password: '',
                role: ''
              });
        
              // Display a success message using a pop-up
              window.alert('Registered successfully! Please login to continue.');
            } catch (error) {
              setUser({
                email: '',
                password: ''
              })
              window.alert('Registration failed email already exists! Please enter another email.');
            }
          };
    
        return(
            <>
                <input type="text" name="username" 
                placeholder="Enter the Username" 
                onChange={handleChange} 
                value={user.username}/>
            
                <input type="text" name="email" 
                placeholder="Enter the email" 
                onChange={handleChange} 
                value={user.email}/>

                <input type="password" name="password" 
                placeholder="Enter the password" 
                onChange={handleChange}
                value={user.password}/>

                <input type="text" name="role" 
                placeholder="Enter the role" 
                onChange={handleChange} 
                value={user.role}/>
            
                <button onClick={handleSubmit}>Submit</button>

            </>  
        )
    }
    

export default Register