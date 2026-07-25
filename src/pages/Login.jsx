import react ,{ useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import  axios from "axios"

function Login() {
    const [authData, setAuthData] = useState({
            email: "",
            password: ""
        });
        const navigate = useNavigate()
        const changeHandler = (e) =>{
            const value = e.target.value;
            const name = e.target.name;
            setAuthData({...authData, [name]: value});
        };
        async function submitHandler(e){
            e.preventDefault();
            try{
                const res = await axios.post("http://localhost:8000/login", authData)
                console.log(res);
                setAuthData({
                    email:"",
                    password:"",
                })
                navigate("/")
            } catch (err){
                console.log(err)
            }
        }
  return (
    <div className="container">
        <h1 className="text-center my-4">Login Account</h1>
       <Form className="w-1/2 mx-auto" onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="name@example.com" 
        value={authData.email} 
        name="email"
        onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Enter password" 
        value={authData.password} 
        onChange={changeHandler}
        name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </Form>
    </div>
  );
}
    
export default Login;