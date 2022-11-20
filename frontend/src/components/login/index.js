import React from "react";
import Img from "../../images/login.png";
import {TextField, InputLabel} from "@material-ui/core/";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useState } from 'react';
import axios from 'axios';
import { authenticate } from './helpers';

import { Button } from 'reactstrap';
import {
  HeroImageContainer,
  AppWrapper,
  App,
  TextWrapper,
  AppTitle,
  AppPara
} from "./HeroImageElements";

const HeroImage = () => {

  let navigate = useNavigate();

  const [error, setError] = useState({  
    email: '',
    password: '',
    });

  const [usersss, setUser] = useState({
    email: '',
    password: '',
  })

  const onChange = e => {
        setUser({ ...usersss, [e.target.name]: e.target.value })
  }


  const submitLogin = ()=>{
   

  
    let formData = new FormData();

    formData.set("email", usersss.email);
    formData.set("password",usersss.password);
   
    axios({
        method: "post",
        url: `api/signin`,
        data: formData,
      }).then(response => {
        console.log(response.data.message)
        
        if(response.data.message === 'verifyEmail'){
          setError({ 
            email: '',
            password: ''
          });
          Swal.fire({
            title: 'A verification link has been sent to your email account.',
            text: 'Please click on the link that has been sent to your email account to verify your email and continue the registration process',
            imageUrl: 'https://media1.giphy.com/media/YRE5lkyWvuOdj469ul/giphy.gif?cid=ecf05e47yem71lb0lupcox6qkbd55qna1u1hh2olk1awg5nh&rid=giphy.gif&ct=s',
            imageWidth: 350,
            imageHeight: 250,
            imageAlt: 'Custom image',
            confirmButtonColor: '#EF3A47',
          })
        }else if(response.data.message === 'inactive'){
          setError({ 
            email: '',
            password: ''
          });
          Swal.fire({
            title: 'Your account is temporary deactivated!',
            imageUrl: 'https://media2.giphy.com/media/LkV0XjZTGlGDJtOZSB/giphy.gif?cid=ecf05e47w1kpkv2yjynvcsrkygfj1t0qww18jfjvk0js3v6y&rid=giphy.gif&ct=s',
            icon: 'error',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonColor: '#EF3A47',
            })
        }else{
          setError({ 
            email: '',
            password: ''
          });
         

          if(response.data.user.role === 'admin'){
            // authenticate(response, () => navigate("/animal"));
            Swal.fire({
              title: 'Well done!',
              text: 'You have successfully logged in.',
              imageUrl: 'https://media1.giphy.com/media/jJT08co7tJmcaQhK2V/giphy.gif?cid=ecf05e47v6kbo49mwxm6ie9s5yx18monij6hykk8q5xnmt7u&rid=giphy.gif&ct=s',
              icon: 'success',
              imageWidth: 200,
              imageHeight: 200,
              imageAlt: 'Custom image',
              confirmButtonColor: '#967259',
              })
          }else if((response.data.user.role === 'client')){
            authenticate(response, () => navigate("/client/dashboard"));
            Swal.fire({
              title: 'Well done!',
              text: 'You have successfully logged in.',
              imageUrl: 'https://media4.giphy.com/media/Hnl23o6SHL21d8kmcB/giphy.gif?cid=ecf05e479vhp0mku8nm5hfyfom7ojy3cxm1y444jm9lavw6u&rid=giphy.gif&ct=s',
            
              imageWidth: 200,
              imageHeight: 200,
              imageAlt: 'Custom image',
              confirmButtonColor: '#EF3A47',
              })
          }else if((response.data.user.role === 'employee')){
            // authenticate(response, () => navigate("/animal"));
            Swal.fire({
              title: 'Well done!',
              text: 'You have successfully logged in.',
              imageUrl: 'https://media1.giphy.com/media/jJT08co7tJmcaQhK2V/giphy.gif?cid=ecf05e47v6kbo49mwxm6ie9s5yx18monij6hykk8q5xnmt7u&rid=giphy.gif&ct=s',
              icon: 'success',
              imageWidth: 200,
              imageHeight: 200,
              imageAlt: 'Custom image',
              confirmButtonColor: '#967259',
              })
          }
       
       
          }
    
       
       
      }).catch(error => {
                        console.log(error.response.data)
                            setError(error.response.data);
                    });   
}


  return (
    <Container style={{ minHeight: "50vh" }}>
    <HeroImageContainer>
   
        <App src={Img} 
        style={{ width: "100%", height: "auto", alignContent: "left" }}
        alt="" />
   
      <TextWrapper>
        <AppTitle>
          <h1>Login</h1>
          {/* <h2>dwadwadwadwadw</h2> */}
        </AppTitle>
        <AppPara>
        
          <TextField fullWidth color="secondary" name="email" onChange={onChange} id="fullName" label="Email" />
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.email}</InputLabel> 
         
          <TextField type="password" color="secondary" name="password" onChange={onChange} fullWidth id="fullName" label="Password" />
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.password}</InputLabel> 
          <InputLabel><Link to="/password/forgot" style={{color: "red", "font-size": "1rem","text-decoration": "none"}}>Forgot password?</Link> </InputLabel>   
          <div style={{color: "black", "font-size": "1rem", "padding-top": "8px"}}>
          <Button outline color="danger" onClick={()=>submitLogin()} >Login</Button>
          </div>
          <InputLabel style={{color: "black", "font-size": "1rem", "padding-top": "5px"}}>
            Don't have an account?
            <Link to="/register" style={{color: "red", "font-size": "1rem", "text-decoration": "none"}}>&nbsp;Signup here!</Link>
            </InputLabel>     
        </AppPara>
       
      </TextWrapper>
      <style>
        {`
        
        .MuiFormLabel-root.Mui-focused {
          color: red !important;
        }
        .MuiFormLabel-root.Mui {
          color: red !important;
          font-size: 2rem;
        }
        .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
          border-color: red !important;
        }
        
        `}
      </style>
    </HeroImageContainer>
    </Container>
  );
};

export default HeroImage;
