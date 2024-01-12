import axios from 'axios'

const register=(userDetails)=>{
    return axios.post('http://127.0.0.1:8081/user',userDetails)

}

const login=(user)=>{
    return axios.post('http://127.0.0.1:8081/user/login',user)
}

const logout=()=>{}

const UserService={
    register,login,logout
}
export default UserService