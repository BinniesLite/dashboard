import React from 'react'
// Custom Styling
import style from './Login.module.scss';
import styled from '@emotion/styled';
// Styling
import { Divider, Stack, Button, TextField, Typography } from '@mui/material';
// Firebase
import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';
// React hookform
import {useForm, Controller} from 'react-hook-form';



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



const fields: string[] = ['firstName', 'lastName', 'email', 'username', 'password']

const LoginPage = () => {
  const navigate = useNavigate();

  // Form Control
  const {control, handleSubmit} = useForm()
  
  const submitForm = (data: any) => { 
    console.log(data)
  }

  return (
    <div className={style['login__container']}>
      <div className={style['login__card_container']}>
        <Stack color="white" onSubmit={handleSubmit(submitForm)} rowGap={4} sx={{ padding: 20 }} component="form">
          <Typography variant="h5">
            Register Page
          </Typography>

          <Divider sx={{ "&::before, &::after": { borderColor: "white", },}}>
            or
          </Divider>
          {fields.map((item, index) => (
            <Controller
              key={index}
              name={item}
              control={control}
              render={({field}) => <StyledTextField
              type={item}
              {...field}
              size="small"
              placeholder={item[0].toUpperCase() + item.substring(1)}
              variant="standard"
              fontColor='white'
              sx={{
                '&:hover': {
                  color: 'white',
                  borderColor: 'white'
                },
                width: '110%'
              }}
            />}
            />
          ))}

          <Button 
          type="submit"
          variant='contained' sx={{
            bgcolor: 'black',
            "&:hover": {
              backgroundColor: 'black'
            }
          }}>Register</Button>
        </Stack>
      </div>
    </div>
  )
}

export default LoginPage; 