
// Custom Styling
import style from './Login.module.scss';
import styled from '@emotion/styled';
// Styling
import { Divider, Icon, Stack, Button, TextField, Typography } from '@mui/material';
// Firebase
import { GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';
// React Hook form 
import { Controller, useForm } from 'react-hook-form';
// Authentication 
import { baseUrl, login } from '../../lib/authentication-request';

const options = {
  shouldForwardProp: (prop: string) => prop !== 'fontColor',
};

const StyledTextField = styled(
  TextField,
  options,
)(({ fontColor }: { fontColor: string }) => ({
  input: {
    color: fontColor,
  },
}));

const buttonStyle = {
  borderColor: 'white',
  color: 'white',
  '&:hover': {
    borderColor: 'black '
  }
}

const LoginPage = () => {
  const navigate = useNavigate();

  auth.onAuthStateChanged((user) => {
    if (user) {
      navigate("/admin/form")
    }
  })

  const handleLoginWithGoogle = () => {
    signInWithRedirect(auth, new GoogleAuthProvider);
  }

  const handleLoginWithFacebook = () => {
    signInWithRedirect(auth, new FacebookAuthProvider);
  }

  // Form
  const {control, handleSubmit} = useForm();
  

  const submitForm = async (data:any) => {
    const response = await login(data['username'], data['password'], `${baseUrl}/login/`)
    
    if (response) {
      navigate("/admin/form")
    }
  } 
  
  return (
    <div className={style['login__container']}>
      <div className={style['login__card_container']}>
        <Stack onSubmit={handleSubmit(submitForm)} color="white" rowGap={4} sx={{ padding: 20 }} component="form">
          <Button onClick={handleLoginWithGoogle} variant="outlined" sx={buttonStyle}>
            <Icon sx={{ mx: 3 }}>
              <img src="https://img.icons8.com/color/48/null/google-logo.png" />
            </Icon>
            <Typography variant='button'>Log in With Google</Typography>
          </Button>
          <Button 
            onClick={handleLoginWithFacebook}
            variant="outlined" 
            sx={buttonStyle}> 
            <Icon sx={{ mx: 3 }}>
              <img src="https://img.icons8.com/color/48/null/facebook.png" />
            </Icon> 
            <Typography variant='button'>Log in With Facebook</Typography>
          </Button>
          
          <Divider sx={{
            "&::before, &::after": {
              borderColor: "white",
            },
          }}>
            or
          </Divider>

          <Controller
            control={control}
            name="username"
            render={(({field}) => <StyledTextField
              {...field}
              type="text"
              size="small"
              placeholder='Username'
              variant="standard"
              fontColor='white'
            sx={{
              '&:hover': {
                color: 'white',
                borderColor: 'white'
              }
            }}
          />
          )}
          />
          <Controller
            control={control}
            name="password"
            render={(({field}) => <StyledTextField
              {...field}
              type="password"
              size="small"
              placeholder='Password'
              variant="standard"
              fontColor='white'
            sx={{
              '&:hover': {
                color: 'white',
                borderColor: 'white'
              }
            }}
          />
          )}
          />
          <Button type="submit" variant='contained' sx={{
            bgcolor: 'black',
            "&:hover": {
              backgroundColor: 'black'
            }
          }}>Log In</Button>
        </Stack>
      </div>
    </div>
  )
}

export default LoginPage; 