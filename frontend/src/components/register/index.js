import React from "react";
import Img from "../../images/register.png";
import {TextField, InputLabel} from "@material-ui/core/";
import { InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useState } from 'react';
import axios from 'axios';

import { Button } from 'reactstrap';
import {
  HeroImageContainer,
  AppWrapper,
  App,
  TextWrapper,
  AppTitle,
  AppPara
} from "./RegisterElements";

const HeroImage = () => {

  let navigate = useNavigate();

  const [error, setError] = useState({  
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    user_name: '',
    password: '',
    confirmPassword: '',
    });

    const [usersss, setUser] = useState({
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      user_name: '',
      password: '',
      confirmPassword: '',
      
  })

  const onChange = e => {
    setUser({ ...usersss, [e.target.name]: e.target.value })
  }

  const addUserss = ()=>{
    console.log(usersss)
 
      
        let formData = new FormData();

        formData.set("first_name", usersss.first_name);
        formData.set("middle_name", usersss.middle_name);
        formData.set("last_name", usersss.last_name);
        formData.set("email", usersss.email);
        formData.set("user_name", usersss.user_name);
        formData.set("password",usersss.password);
        formData.set("confirmPassword",usersss.confirmPassword);
        formData.set("role",'client');
        formData.set("status",'active');
       
        axios({
            method: "post",
            url: `api/user/new`,
            data: formData
          }).then(response => {
            console.log(response);
            setUser({  first_name: '',
            middle_name: '',
            last_name: '',
            email: '',
            user_name: '',
            password: '',
            confirmPassword: '',});
            navigate(`/login`);
            Swal.fire({
                title: 'A verification link has been sent to your email account.',
                text: 'Please click on the link that has been sent to your email account to verify your email and continue the registration process',
                imageUrl: 'https://media1.giphy.com/media/YRE5lkyWvuOdj469ul/giphy.gif?cid=ecf05e47yem71lb0lupcox6qkbd55qna1u1hh2olk1awg5nh&rid=giphy.gif&ct=s',
                imageWidth: 350,
                imageHeight: 250,
                imageAlt: 'Custom image',
                confirmButtonColor: '#EF3A47',
              })
           
          }).catch(error => {
                            console.log(error.response.data)
                            setError(error.response.data);
                        });   
    }

////////////////////////// show and hide password

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


  return (
    <Container style={{ minHeight: "50vh" }}>
    <HeroImageContainer>
   
        <App src={Img} 
        style={{ width: "90%", height: "auto", alignContent: "left" }}
        alt="" />
   
      <TextWrapper>
        <AppTitle>
          <h1>Register</h1>
          {/* <h2>dwadwadwadwadw</h2> */}
        </AppTitle>
        <AppPara>
          
          <TextField fullWidth color="secondary" id="first_name" name="first_name" onChange={onChange} label="Firstname" /> 
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.first_name}</InputLabel> 
         
          <TextField fullWidth color="secondary" id="middle_name" name="middle_name" onChange={onChange} label="Middlename" />
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.middle_name}</InputLabel> 
          
          <TextField fullWidth color="secondary" id="last_name" name="last_name" onChange={onChange} label="Lastname" />
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.last_name}</InputLabel> 
    
          <TextField type="email" fullWidth color="secondary" name="email" id="email" onChange={onChange} label="Email Address" />
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.email}</InputLabel> 
          
          <TextField fullWidth color="secondary" id="user_name" name="user_name" onChange={onChange} label="Username" />
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.user_name}</InputLabel>
         
          <TextField type={showPassword ? 'text' : 'password'} fullWidth InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            color="secondary" name="password" onChange={onChange} id="password" label="Password" />
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.password}</InputLabel> 

          <TextField type={showPassword ? 'text' : 'password'} fullWidth InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            color="secondary" name="confirmPassword" onChange={onChange} id="password" label="Confirm Password" />
          <InputLabel style={{color: "red", "font-size": "0.8rem"}}>{error.confirmPassword}</InputLabel> 

          
          <Button onClick={()=>addUserss()} outline color="danger" >Register</Button>
          <InputLabel style={{color: "black", "font-size": "1rem", "padding-top": "5px"}}>
            Already have an account?
            <Link to="/login" style={{color: "red", "font-size": "1rem", "text-decoration": "none"}}>&nbsp;Signin here!</Link>
            </InputLabel>              
        </AppPara>
       
      </TextWrapper>
      <style>
        {`
        .test-label {
          color: red !important;
          font-size: 0.8rem;
          padding-top: 0px;
        }

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
